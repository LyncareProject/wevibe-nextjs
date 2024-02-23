import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nonFunctionState } = body;
    console.log(nonFunctionState);
    return NextResponse.json({ message: '완료', status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
}
