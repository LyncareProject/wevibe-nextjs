'use client';
import { cn } from '@/utils/style';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import noUser from '../../public/images/noUser.png';
import { useSidebar } from './providers';

const Header: FC = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="w-full sm:m-auto sm:w-[90%]">
      <div className="relative m-auto flex h-32 flex-col justify-between justify-items-center py-6">
        <header className="z-10 h-32">
          <nav className="m-auto flex max-w-[1100px] justify-around justify-items-center  ">
            <p className="w-[10%] cursor-pointer lg:w-[60%]">
              <Image
                src="/img/Logoimg.png"
                alt="Next.js Logo"
                width={90}
                height={17}
                priority
              />
            </p>
            <ul className=" flex justify-around  py-5 lg:hidden ">
              <li className="cursor-pointer px-3">
                <a href="/#Team_dev">Team DEV</a>
              </li>
              <li className="px-3">|</li>
              <li className="px-3">
                <a href="/#viber_X">viber X</a>
              </li>
              <li className="px-3">|</li>
              <li className="px-3">
                <a href="/#Ai_lawline">문서작성 AI 로라인</a>
              </li>
              <li className="px-3">|</li>
              <li className="px-3">
                <a href="/#WORKS">Works</a>
              </li>
              <li className="px-3">|</li>
              <li className="px-3">프로젝트 의뢰하기</li>
            </ul>

            <ol
              className={cn(
                'flex justify-between gap-4  py-5 sm:mr-4 lg:w-[150px]',
                isOpen && 'hidden'
              )}
            >
              {!session ? (
                <>
                  <button className="mb-2" onClick={() => signIn()}>
                    로그인
                  </button>
                  <li>/</li>
                  <Link href="/signup">회원가입</Link>
                </>
              ) : (
                <>
                  <Image
                    className="size-[25px] rounded-full"
                    src={session.user.image || noUser}
                    width={25}
                    height={25}
                    alt={'user'}
                  />
                  <Link href={'/mypage'}>
                    <li>{session.user.name} 님</li>
                  </Link>
                  <button className="mb-2" onClick={() => signOut()}>
                    로그아웃
                  </button>
                </>
              )}
            </ol>

            <Image
              id="Sidibar_boutton"
              className=" mb-2 box-border hidden   h-12 cursor-pointer  rounded-md border-2 border-black p-2 sm:mr-4 lg:block "
              src={!isOpen ? '/img/hamburger_.png' : '/img/sidebarClose.png'}
              alt="Next.js Logo"
              onClick={() => setIsOpen((open) => !open)}
              width={50}
              height={5}
            />
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
