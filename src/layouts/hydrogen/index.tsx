"use client";

import React, { useState, useEffect } from "react";
import { defaultColumns } from "./column"; // use your user table columns

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const UsersTable = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Safely read from localStorage
        const storedUserString = localStorage.getItem("user");
        const storedUser = storedUserString
          ? JSON.parse(storedUserString)
          : null;

        const token = storedUser?.token;

        const res = await fetch("https://auto-car-backend.vercel.app/api/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        setUsers(data.users || []);
        setTotalUsers(data.users?.length || 0);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  const table = useReactTable({
    data: users,
    columns: defaultColumns(), // using your custom columns
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-6 bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.getRowModel().rows.length === 0 && (
        <div className="text-center py-8 text-gray-500">No users found</div>
      )}
    </div>
  );
};

export default UsersTable;
