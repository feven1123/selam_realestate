import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const totalProperties = await prisma.property.count();
    const ongoing = await prisma.property.count({ where: { status: "On Process" } });
    const completed = await prisma.property.count({ where: { status: "Completed" } });
    const featured = await prisma.property.count({ where: { status: "Featured" } });




    return NextResponse.json({
      stats: [
        { title: 'Total Properties', value: totalProperties },
        { title: 'Ongoing Projects', value: ongoing },
        { title: 'Completed Projects', value: completed },
        { title: 'Featured Projects', value: featured },
      ],

    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to load dashboard data' }, { status: 500 });
  }
}
