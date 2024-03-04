import { authOptions } from '@/libs/next-auth';
import prisma from '@/libs/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();
    const { userId } = params;
    const { email, image, name, company, rank } = body;

    const user = await prisma.user.findUnique({
      where: {
        userId,
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: '가입된 유저가 아닙니다.',
        },
        {
          status: 404,
        }
      );
    }

    if (!session?.user.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        userId,
        email,
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
