import prisma from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = parseInt(params.userId, 10);

    if (isNaN(userId)) {
      return new NextResponse(JSON.stringify({ message: 'Invalid_user_id' }), {
        status: 400,
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    console.log('user : ', user);

    if (!user) {
      return new NextResponse(JSON.stringify({ message: 'Not_found' }), {
        status: 404,
      });
    }

    if (user.emailVerified) {
      return new NextResponse(JSON.stringify({ message: 'Already_verified' }), {
        status: 200,
      });
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        emailVerified: new Date(),
      },
    });

    return new NextResponse(JSON.stringify({ message: 'Verified' }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
