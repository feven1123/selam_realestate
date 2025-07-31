import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { title, content, image, publishedAt } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const news = await prisma.news.create({
      data: {
        title,
        content,
        image,
        publishedAt: new Date(publishedAt),
      },
    });

    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: { publishedAt: 'desc' },
    });

    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, content, image, publishedAt } = await request.json();

    if (!id || !title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const updated = await prisma.news.update({
      where: { id },
      data: {
        title,
        content,
        image,
        publishedAt: new Date(publishedAt),
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json({ error: 'Failed to update news' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing news ID' }, { status: 400 });
    }

    await prisma.news.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'News deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json({ error: 'Failed to delete news' }, { status: 500 });
  }
}

