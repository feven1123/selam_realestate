'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  { title: "Total Properties", value: 120 },
  { title: "Completed Projects", value: 45 },
  { title: "Ongoing Projects", value: 50 },
  { title: "Upcoming Projects", value: 25 },
];

const salesData = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 300 },
  { name: 'Mar', sales: 500 },
  { name: 'Apr', sales: 700 },
  { name: 'May', sales: 600 },
];

const recentOrders = [
  { name: "John Doe", project: "Villa Sunrise", date: "2025-07-07" },
  { name: "Marta K", project: "City Heights", date: "2025-07-06" },
  { name: "Abel T", project: "Hillside Homes", date: "2025-07-05" },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-md text-gray-600">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sales Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order, i) => (
              <div key={i} className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-semibold">{order.name}</p>
                  <p className="text-sm text-gray-500">{order.project}</p>
                </div>
                <p className="text-sm text-gray-400">{order.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
