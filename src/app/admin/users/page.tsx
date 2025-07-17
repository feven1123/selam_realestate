'use client';

import { useState } from "react";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+251912345678", lastActive: "2025-07-08" },
  { id: 2, name: "Marta K", email: "marta@example.com", phone: "+251911234567", lastActive: "2025-06-01" },
  { id: 3, name: "Abel T", email: "abel@example.com", phone: "+251922334455", lastActive: "2024-12-15" },
  { id: 4, name: "Saba A", email: "saba@example.com", phone: "+251933221100", lastActive: "2025-07-05" },
  { id: 5, name: "Dawit Y", email: "dawit@example.com", phone: "+251911998877", lastActive: "2025-05-20" },
];

function isActive(lastActive: string) {
  const daysAgo = (new Date().getTime() - new Date(lastActive).getTime()) / (1000 * 60 * 60 * 24);
  return daysAgo <= 30;
}

function getMonthYear(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function getUniqueMonths(users: typeof users) {
  const months = users.map(u => getMonthYear(u.lastActive));
  return Array.from(new Set(months)).sort((a, b) => (b > a ? 1 : -1));
}

function formatMonthYear(monthStr: string) {
  const [year, month] = monthStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export default function UsersAdminPage() {
  const [filterMonth, setFilterMonth] = useState("all");

  const filteredUsers = filterMonth === "all"
    ? users
    : users.filter(u => getMonthYear(u.lastActive) === filterMonth);

  const totalUsers = filteredUsers.length;
  const activeUsers = filteredUsers.filter(user => isActive(user.lastActive)).length;
  const inactiveUsers = totalUsers - activeUsers;

  const months = getUniqueMonths(users);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-2">User Requests</h1>
      <p className="text-gray-600 mb-6">View users who sent inquiries via forms.</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-gray-500">Total Users</p>
          <p className="text-3xl font-bold">{totalUsers}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-gray-500">Active Users</p>
          <p className="text-3xl font-bold text-green-600">{activeUsers}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-gray-500">Inactive Users</p>
          <p className="text-3xl font-bold text-gray-400">{inactiveUsers}</p>
        </div>
      </div>

      {/* Filter dropdown below cards, left aligned */}
      <div className="mt-4">
        <label htmlFor="monthFilter" className="font-semibold text-gray-700 mr-2">Filter by Month:</label>
        <select
          id="monthFilter"
          value={filterMonth}
          onChange={e => setFilterMonth(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="all">All Months</option>
          {months.map(month => (
            <option key={month} value={month}>{formatMonthYear(month)}</option>
          ))}
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto rounded-lg shadow border bg-white mt-2">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last Active</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td className="px-4 py-2 whitespace-nowrap">{user.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.phone}</td>
                <td
                  className={`px-4 py-2 whitespace-nowrap font-semibold ${
                    isActive(user.lastActive) ? 'text-green-600' : 'text-gray-400'
                  }`}
                >
                  {isActive(user.lastActive) ? 'Active' : 'Inactive'}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-500">{user.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
