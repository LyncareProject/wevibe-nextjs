import prisma from '@/libs/prisma';
import bcrypt from 'bcryptjs';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export default async function POST(request: Request) {
  try {
    const session = await getServerSession();
    const body = await request.json();
    const { email, image, name, password, company, rank } = body;

    if (!session?.user.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const updatedUser = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        email,
        image,
        name,
        password: hashedPassword,
        company,
        rank,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
  return;
}
