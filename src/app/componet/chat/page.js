"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { FiSend, FiPaperclip, FiMic } from "react-icons/fi";
import Image from "next/image";

let socket;

export default function UserChat() {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [user, setUser] = useState(null);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
   const socketRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Load user and initialize socket
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      setUser(savedUser);

      socket = io("https://auto-car-backend.vercel.app");
      socket.emit("join_room", savedUser._id);

      socket.on("receive_message", (msg) => {
        if (msg.userId === savedUser._id || msg.sender?._id === savedUser._id) {
          setMessages((prev) => [...prev, msg]);
        }
      });

      socket.on("typing", (data) => {
        if (data.userId === savedUser._id) setTyping(data.status);
      });
    }
  }, []);

  const token = user?.token;
  const userId = user?._id;

  // Fetch previous messages
  useEffect(() => {
    const fetchMessages = async () => {
      if (!token) return;
      try {
        const res = await axios.get(
          `https://auto-car-backend.vercel.app/api/chat/admin/messages/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessages(res.data.messages);
      } catch (err) {
        console.error("Error loading chat:", err);
      }
    };
    fetchMessages();
  }, [token, userId]);

  // Send message
const sendMessage = async () => {
  if (!newMsg.trim()) return;

  const msgData = { userId, message: newMsg };

  // Update UI immediately
  setMessages((prev) => [
    ...prev,
    { ...msgData, sender: { _id: userId, name: user.name }, _id: Date.now() },
  ]);
  setNewMsg("");

  try {
    // Save to DB
    await axios.post(
      "https://auto-car-backend.vercel.app/api/chat/sendmessages",
      { message: msgData.message },
      { headers: { Authorization: `Bearer ${user.token}` } }
    );
  } catch (err) {
    console.error("Failed to save message:", err);
  }

  // Emit via socket if initialized
  socketRef.current?.emit("send_message", msgData);
};



  // Handle typing indicator
  const handleTyping = (e) => {
    setNewMsg(e.target.value);
    socket?.emit("typing", { userId, status: e.target.value.length > 0 });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4 font-bold text-lg border-b">Live Chat</div>
        <div className="p-2">
          {/* Dummy users list */}
          <div className="flex items-center p-2 hover:bg-gray-100  rounded cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
            <Image
            className="rounded-full"
              src="/user/user8.png"
                alt="Admin"
                width={40}
                height={40}
            >
              
            </Image>
            </div>
            <div>
              <p className="font-semibold">Admin Support</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex items-center gap-3 bg-white">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <p className="font-semibold">Admin Support</p>
            <p className="text-xs text-green-500">{typing ? "Admin is typing..." : "Online"}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {messages.map((msg) => {
            const isUser = msg.sender?._id === userId;
            return (
              <div
                key={msg._id}
                className={`p-3 rounded-lg max-w-[70%] ${
                  isUser ? "bg-blue-600 text-white ml-auto" : "bg-gray-200 text-black"
                }`}
              >
                {msg.message}
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 flex gap-2 border-t bg-white items-center">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FiPaperclip size={20} />
          </button>
          <input
            type="text"
            value={newMsg}
            onChange={handleTyping}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border rounded-full focus:outline-none"
          />
          <button onClick={sendMessage} className="p-2 rounded-full bg-blue-600 text-white">
            <FiSend size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FiMic size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
