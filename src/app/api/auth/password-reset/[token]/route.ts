'use server';

import { prisma } from '@/libs/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { token: string } }
) {
  const body = await request.json();
  const { token } = params;
  const { password } = body;

  const passwordResetToken = await prisma.passwordResetToken.findUnique({
    where: {
      token,
      createdAt: { gt: new Date(Date.now() - 1000 * 60 * 60 * 4) },
      resetAt: null,
    },
  });

  if (!passwordResetToken) {
    return NextResponse.json(
      {
        message:
          'Invalid token reset request. Please try resetting your password again.',
      },
      {
        status: 404,
      }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const updateUser = prisma.user.update({
    where: { id: passwordResetToken.tokenUserId },
    data: {
      password: hashedPassword,
    },
  });

  const updateToken = prisma.passwordResetToken.update({
    where: {
      id: passwordResetToken.id,
    },
    data: {
      resetAt: new Date(),
    },
  });

  try {
    await prisma.$transaction([updateUser, updateToken]);
    return NextResponse.json(
      { message: '비밀번호 변경 성공' },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
