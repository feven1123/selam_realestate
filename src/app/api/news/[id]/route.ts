import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl;
    const id = url.pathname.split('/').pop(); // gets the `[id]` part

    if (!id) {
      return NextResponse.json({ error: 'Missing news ID' }, { status: 400 });
    }

    const news = await prisma.news.findUnique({
      where: { id: Number(id) },
    });

    if (!news) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news by id:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}
