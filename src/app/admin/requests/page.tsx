'use client';

export default function RequestsPage() {
  const requests = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+251912345678",
      message: "Interested in 3-bedroom in Addis.",
      date: "2025-07-08",
    },
    {
      id: 2,
      name: "Marta K",
      email: "marta@example.com",
      phone: "+251911234567",
      message: "Is the Hillside project still available?",
      date: "2025-07-07",
    },
    {
      id: 3,
      name: "Abel T",
      email: "abel@example.com",
      phone: "+251922334455",
      message: "What is the payment method?",
      date: "2025-07-06",
    },
    {
      id: 4,
      name: "Saba A",
      email: "saba@example.com",
      phone: "+251933221100",
      message: "Looking for property in Bole.",
      date: "2025-07-05",
    },
    {
      id: 5,
      name: "Dawit Y",
      email: "dawit@example.com",
      phone: "+251911998877",
      message: "Do you have villas in Tulu Dimtu?",
      date: "2025-07-04",
    },
    {
      id: 6,
      name: "Lily M",
      email: "lily@example.com",
      phone: "+251912567890",
      message: "Requesting details on 2BR apartment.",
      date: "2025-07-03",
    },
    {
      id: 7,
      name: "Kibrom Z",
      email: "kibrom@example.com",
      phone: "+251944556677",
      message: "I sent a request but no reply.",
      date: "2025-07-02",
    },
    {
      id: 8,
      name: "Hanna G",
      email: "hanna@example.com",
      phone: "+251955667788",
      message: "Can I pay in installments?",
      date: "2025-07-01",
    },
    {
      id: 9,
      name: "Nahom S",
      email: "nahom@example.com",
      phone: "+251966778899",
      message: "Looking for gated community homes.",
      date: "2025-06-30",
    },
    {
      id: 10,
      name: "Salem W",
      email: "salem@example.com",
      phone: "+251977889900",
      message: "Interested in real estate partnership.",
      date: "2025-06-29",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold">Requests</h1>

      

      {/* Table */}
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
                <td className="px-4 py-2 whitespace-nowrap text-gray-500">{req.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
