'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Property = {
  id: number;
  title: string;
  description: string;
  location: string;
  status: string; // e.g. 'Completed', 'On Process'
  createdAt: string;
  updatedAt: string;
  image: string;
  isFeatured?: boolean; // if you are using this field on frontend, even if not in schema
};

export default function DashboardPage() {
  const [stats, setStats] = useState([
    { title: "Total Properties", value: 0 },
    { title: "Completed Projects", value: 0 },
    { title: "Ongoing Projects", value: 0 },
    { title: "Featured Properties", value: 0 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/projects');
        const data: Property[] = await res.json();

        const total = data.length;
        const completed = data.filter((p) => p.status === 'Completed').length;
        const ongoing = data.filter((p) => p.status === 'On Process').length;
        const featured = data.filter((p) => p.isFeatured).length;

        setStats([
          { title: "Total Properties", value: total },
          { title: "Completed Projects", value: completed },
          { title: "Ongoing Projects", value: ongoing },
          { title: "Featured Properties", value: featured },
        ]);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      }
    };

    fetchData();
  }, []);

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
            <BarChart
              data={[
                { name: 'Jan', sales: 400 },
                { name: 'Feb', sales: 300 },
                { name: 'Mar', sales: 500 },
                { name: 'Apr', sales: 700 },
                { name: 'May', sales: 600 },
              ]}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
