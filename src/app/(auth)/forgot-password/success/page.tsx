import Link from 'next/link';

export default async function SuccessPage() {
  return (
    <main className="max-w-xl px-4 mx-auto flex flex-col justify-center h-screen">
      <div className="gap-4 flex flex-col">
        <div>
          <h1 className="text-2xl font-light">비밀번호 초기화</h1>
          <p>메일함에 메일이 보이지 않으면, 스팸메일함을 확인해주세요.</p>
          <button type="submit">
            <Link href="/">메인으로</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
