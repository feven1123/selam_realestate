import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function PUT(req: Request) {
  try {
    const { email, currentPassword, newPassword } = await req.json();

    if (!email || !currentPassword) {
      return NextResponse.json({ message: 'Email and current password are required' }, { status: 400 });
    }

    // Find admin by email (you might want to identify admin by session in a real app)
    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      return NextResponse.json({ message: 'Admin not found' }, { status: 404 });
    }

    // Check current password
    const isValid = await bcrypt.compare(currentPassword, admin.password);
    if (!isValid) {
      return NextResponse.json({ message: 'Current password is incorrect' }, { status: 401 });
    }

    // Prepare data to update

    const updatedData: { email: string; password?: string } = { email };

    if (newPassword && newPassword.trim() !== '') {
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      updatedData.password = hashedNewPassword;
    }

    // Update admin
    await prisma.admin.update({
      where: { id: admin.id },
      data: updatedData,
    });

    return NextResponse.json({ message: 'Settings updated successfully' });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
