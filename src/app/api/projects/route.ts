// File: app/api/projects/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET: fetch all projects
export async function GET() {
  try {
    const projects = await prisma.property.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('GET projects error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// ✅ POST: add new project
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, location, status, image } = body;

    // Validation
    if (!title || !description || !location || !status || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newProject = await prisma.property.create({
      data: {
        title,
        description,
        location,
        status,
        image,
      },
    });

    return NextResponse.json(newProject, { status: 201 }); // ✅ return JSON
  } catch (error) {
    console.error('POST /api/projects error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
