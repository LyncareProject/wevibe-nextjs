import prisma from '@/libs/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    const body = await request.json();
    const { email, image, name, company, rank } = body;

    if (!session?.user.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        email: session?.user.email,
      },
      data: {
        email,
        image,
        name,
        company,
        rank,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}
