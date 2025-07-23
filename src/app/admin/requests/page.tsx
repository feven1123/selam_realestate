'use client';

import { useEffect, useState } from 'react';

type RequestType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export default function RequestsPage() {
  const [requests, setRequests] = useState<RequestType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch('/api/requests');
        const data = await res.json();
        setRequests(data);
      } catch (error) {
        console.error('Failed to fetch requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Requests</h1>

      {loading ? (
        <p>Loading requests...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow border bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {requests.map((req) => (
                <tr key={req.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{req.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{req.email}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{req.phone}</td>
                  <td className="px-4 py-2">{req.message}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-500">
                    {new Date(req.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
