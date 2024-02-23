'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default async function SuccessPage() {
  const router = useRouter();
  const sec = 5000;

  useEffect(() => {
    setTimeout(() => {
      router.push('/login'); // Redirect to login page
    }, sec);
  });

  return (
    <main className="max-w-xl px-4 mx-auto flex flex-col justify-center h-screen">
      <div className="gap-4 flex flex-col">
        <div>
          <h1 className="text-2xl font-light">
            비밀번호가 성공적으로 변경되었습니다.
          </h1>
          <p>{`${sec}초 후 로그인 화면으로 되돌아갑니다.`}</p>
          <button type="submit">
            <Link href="/login">Return to Login</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
