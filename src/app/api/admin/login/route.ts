import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';


export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    console.log('Login attempt:', email, password);

    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      console.log('Admin not found');
      return NextResponse.json({ message: 'Invalid credentials (email)' }, { status: 401 });
    }

    console.log('Found admin:', admin.email);
    console.log('Stored hashed password:', admin.password);

    const isValid = await bcrypt.compare(password, admin.password);
    console.log('Password valid:', isValid);

    if (!isValid) {
      return NextResponse.json({ message: 'Invalid credentials (password)' }, { status: 401 });
    }

    return NextResponse.json({
      message: 'Login successful',
      admin: { id: admin.id, email: admin.email },
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
