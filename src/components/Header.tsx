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
    <div className="w-full sm:w-[90%] sm:m-auto">
      <div className="flex flex-col justify-between py-6 justify-items-center m-auto h-32">
        <header className="z-10 h-32">
          <nav className="m-auto flex max-w-[1100px] justify-around justify-items-center  ">
            <p className="w-[10%] cursor-pointer lg:w-[60%] sm:w-[50%]">
            <Link href='./'>
              <Image
                src="/img/Logoimg.png"
                alt="Next.js Logo"
                width={90}
                height={17}
                priority
              />
              </Link>
            </p>
             <div className="flex bg-[url('/img/nav_bg2.png')] bg-cover drop-shadow-md backdrop-saturate-200  backdrop-brightness-150 opacity-80 backdrop-blur-xl px-4 rounded-full pt-0.5  bg-no-repeat bg-center lg:bg-none lg:backdrop-blur-none lg:backdrop-filter-none lg:pt-0">
             <ul className=" flex justify-around  py-5   lg:hidden mt-[1px] ">
              <li className="px-3 cursor-pointer">
                <a href="#Team_dev">Team DEV</a>
              </li>
              <li className="px-3"></li>
              <li className="px-3">
                <a href="#viber_X">viber X</a>
              </li>
              <li className="px-3"></li>
              <li className="px-3">
                <a href="#Ai_lawline">문서작성 AI 로라인</a>
              </li>
              <li className="px-3"></li>
              <li className="px-3">
                <a href="#WORKS">Works</a>
              </li>
              <li className="px-3"></li>
              <li className="px-3">프로젝트 의뢰하기</li>
            </ul>

            <ol
              className={cn(
                'flex justify-between h-[43px] leading-[40px] mt-3 lg:w-[150px] sm:mr-4 text-white bg-black border-[#222] rounded-full px-4 lg:border-2 lg:box-border  lg:bg-white lg:leading-[37px] lg:text-black lg:min-w-[230px] lg:mr-[30px] lg:justify-around '  ,
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
                    className="w-[25px] h-[25px] rounded-full block mt-[8px] mr-[10px]"
                    src={session.user.image || noUser}
                    width={25}
                    height={25}
                    alt={'user'}
                  />
                  <Link href={'/mypage'}>
                    <li>{session.user.name} 님</li>
                  </Link>
                  <p className='mx-2'>/</p>
                  <button className="mb-2" onClick={() => signOut()}>
                    로그아웃
                  </button>
                </>
              )}
            </ol>
            </ div>

            <button className='hidden lg:block opacity-80'>
            <Image
              id="Sidibar_boutton"
              className="absolute hidden h-12 mb-2 right-7 top-[32px]  sm:right-0   p-2 rounded-md  border-2 border-black box-border bg-white cursor-pointer lg:block   "
              src={!isOpen ? '/img/hamburger_.png' : '/img/sidebarClose.png'}
              alt="Next.js Logo"
              onClick={() => setIsOpen((open) => !open)}
              width={50}
              height={5}
            />
            </button>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
