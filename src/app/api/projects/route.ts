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
// ✅ PUT: update existing project
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, description, location, status, image } = body;

    if (!id || !title || !description || !location || !status || !image) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const updated = await prisma.property.update({
      where: { id: Number(id) },
      data: { title, description, location, status, image },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PUT /api/projects error:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

// ✅ DELETE project
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get('id');

  // Convert string to number
  const id = idParam ? parseInt(idParam, 10) : null;

  if (!id || isNaN(id)) {
    return NextResponse.json({ error: 'Invalid or missing project ID' }, { status: 400 });
  }

  try {
    await prisma.property.delete({
      where: { id }, // ✅ Now a number
    });

    return NextResponse.json({ message: 'Project deleted' }, { status: 200 });
  } catch (error) {
    console.error('DELETE project error:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
