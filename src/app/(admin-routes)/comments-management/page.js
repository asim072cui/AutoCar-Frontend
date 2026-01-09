"use client";
import React, { useEffect, useState } from "react";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import { Loader } from "rizzui/loader";

const AdminCommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [total, setTotal] = useState(0);
  const [today, setToday] = useState(0);
  const [uniqueUsers, setUniqueUsers] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const fetchComments = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          "http://localhost:5000/api/comments/getcomments",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            signal: controller.signal,
          }
        );

        if (!res.ok) {
          // try to get message from backend
          let message = `Failed to load comments (${res.status})`;
          try {
            const errBody = await res.json();
            if (errBody?.message) message = errBody.message;
          } catch {}
          throw new Error(message);
        }

        const data = await res.json();
        const list = Array.isArray(data.comments) ? data.comments : [];

        setComments(list);
        setTotal(list.length);

        // Unique users by email
        const unique = new Set(list.map((x) => (x?.email || "").toLowerCase()));
        setUniqueUsers(unique.size);

        // Today's comments
        const todayDate = new Date().toDateString();
        const todayCount = list.filter(
          (c) => new Date(c.createdAt).toDateString() === todayDate
        ).length;
        setToday(todayCount);
      } catch (err) {
        if (err.name === "AbortError") return; // fetch canceled
        setError(err?.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();

    // cleanup
    return () => controller.abort();
  }, []);

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <HydrogenLayout>
      <div className="@container p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">User Comments</h1>
          <p className="text-gray-600">View all user-submitted feedback</p>
        </div>

        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

        {/* Loader shown inside the layout so page chrome remains visible */}
        {loading ? (
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center justify-center py-12"
          >
            <div className="flex items-center justify-center">
              {/* If rizzui Loader accepts className, keep it; otherwise wrap it */}
              <Loader variant="threeDot" className="scale-150 text-gray-500" />
            </div>
            <p className="mt-3 text-sm text-gray-900">Loading comments… <Loader className="text-md" variant="threeDot" /></p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm text-gray-500">Total Comments</h3>
                <p className="text-3xl font-semibold">{total}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm text-gray-500">Today</h3>
                <p className="text-3xl font-semibold">{today}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm text-gray-500">Unique Users</h3>
                <p className="text-3xl font-semibold">{uniqueUsers}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">User</th>
                    <th className="p-2 text-left">Email</th>
                    <th className="p-2 text-left">Comment</th>
                    <th className="p-2 text-left">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {comments.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-4 text-center">
                        No comments found.
                      </td>
                    </tr>
                  ) : (
                    comments.map((comment) => {
                      const id = comment?._id ?? comment?.id ?? Math.random().toString(36).slice(2);
                      const name = comment?.name || "Unknown";
                      return (
                        <tr key={id} className="border-t">
                          <td className="p-2 flex items-center gap-3">
                            {comment?.profilePic ? (
                              <img
                                src={comment.profilePic}
                                alt={`${name} avatar`}
                                className="h-10 w-10 rounded-full object-cover"
                              />
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
                                {name.charAt(0).toUpperCase()}
                              </div>
                            )}

                            <div>
                              <p className="font-medium text-gray-900">{name}</p>
                            </div>
                          </td>

                          <td className="p-2">{comment?.email || "-"}</td>

                          <td
                            className="p-2 max-w-xs truncate"
                            title={comment?.comment || ""}
                          >
                            {comment?.comment || "-"}
                          </td>

                          <td className="p-2 text-gray-500">
                            {comment?.createdAt ? formatDate(comment.createdAt) : "-"}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </HydrogenLayout>
  );
};

export default AdminCommentsPage;
