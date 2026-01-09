"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import HydrogenLayout from "@/layouts/hydrogen/layout";

export default function AdminChat() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [typing, setTyping] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  const selectedUserRef = useRef(null);

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        setError("No admin session found. Please sign in again.");
        setLoading(false);
        return;
      }
      const parsed = JSON.parse(storedUser);
      if (parsed?.role !== "admin") {
        setError("Admin access required.");
        setLoading(false);
        return;
      }
      const sessionToken = parsed.token || localStorage.getItem("token") || "";
      if (!sessionToken) {
        setError("Session expired. Please sign in again.");
        setLoading(false);
        return;
      }
      setAdmin(parsed);
      setToken(sessionToken);
    } catch (err) {
      console.error("Failed to read admin session:", err);
      setError("Failed to read admin session. Please refresh.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    const socket = io("http://localhost:5000");
    socketRef.current = socket;

    socket.on("receive_message", (msg) => {
      if (selectedUserRef.current && msg.userId === selectedUserRef.current) {
        setMessages((prev) => [...prev, msg]);
      }
    });
    socket.on("typing", (data) => {
      if (data.userId === selectedUserRef.current) setTyping(data.status);
    });
    return () => socket.disconnect();
  }, [token]);

  useEffect(() => {
    selectedUserRef.current = selectedUser?._id || null;
    if (selectedUser?._id && socketRef.current) {
      socketRef.current.emit("join_room", selectedUser._id);
    }
  }, [selectedUser]);

  const fetchUsers = async (authToken) => {
    try {
      const res = await axios.get("http://localhost:5000/api/chat/messages", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setUsers(res.data.users || []);
      setError("");
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Unable to load users. Try again later.");
      setUsers([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    fetchUsers(token);
  }, [token]);

  const loadChat = async (user) => {
    const userId = user?._id;
    if (!userId) return;
    setSelectedUser(user);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/chat/admin/messages/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessages(res.data.messages || []);
      setError("");
    } catch (err) {
      console.error("Error loading chat:", err);
      setError("Unable to load chat history.");
      setMessages([]);
    }
  };

  const handleTyping = (e) => {
    setNewMsg(e.target.value);
    socketRef.current?.emit("typing", {
      userId: selectedUser?._id,
      status: e.target.value.length > 0,
    });
  };

  const sendMessage = async () => {
    if (!newMsg.trim() || !selectedUser?._id || !token) return;
    const msgData = { userId: selectedUser._id, message: newMsg };
    setMessages((prev) => [...prev, { ...msgData, sender: "admin", _id: Date.now() }]);
    setNewMsg("");

    try {
      await axios.post(
        "http://localhost:5000/api/chat/sendmessages",
        { message: msgData.message, receiverId: selectedUser._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setError("");
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Unable to send message.");
    }
    socketRef.current?.emit("admin_send_message", msgData);
  };

  if (loading)
    return (
      <HydrogenLayout>
        <div className="p-6">
          <p>Loading chats...</p>
        </div>
      </HydrogenLayout>
    );

  if (error)
    return (
      <HydrogenLayout>
        <div className="p-6 space-y-3">
          <p className="text-red-600">{error}</p>
        </div>
      </HydrogenLayout>
    );

  return (
    <HydrogenLayout>
      <div className="flex h-screen bg-orange-50">
        {/* Sidebar */}
        <div className="w-72 bg-white border-r shadow-sm flex flex-col">
          <div className="p-4 font-bold text-lg border-b">Chats</div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {users.map((u) => (
              <div
                key={u._id}
                onClick={() => loadChat(u)}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition ${
                  selectedUser?._id === u._id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span>{u.name || u.email || "User"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="p-4 border-b bg-white shadow-sm flex items-center">
            {selectedUser ? (
              <h2 className="font-semibold text-gray-800">
                {selectedUser.name || selectedUser.email}
              </h2>
            ) : (
              <span className="text-gray-500">Select a user to chat</span>
            )}
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-50">
            {messages.map((msg) => {
              const isAdmin =
                msg.sender === "admin" ||
                msg.sender?._id === admin?.id ||
                msg.sender?._id === admin?._id;
              return (
                <div
                  key={msg._id}
                  className={`max-w-[70%] p-3 rounded-2xl text-sm ${
                    isAdmin
                      ? "ml-auto bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.message}
                </div>
              );
            })}

            {typing && (
              <div className="text-gray-400 text-sm italic">User is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          {selectedUser && (
            <div className="p-4 border-t bg-white flex gap-3">
              <input
                type="text"
                value={newMsg}
                onChange={handleTyping}
                placeholder="Type your message..."
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                onClick={sendMessage}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-full"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </HydrogenLayout>
  );
}