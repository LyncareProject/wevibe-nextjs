import { cn } from '@/utils/style';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, FC, SetStateAction } from 'react';
import noUser from '../../public/images/noUser.png';

type HeaderProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Header: FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { status, data: session } = useSession();

  return (
    <div className="w-full sm:w-[90%] sm:m-auto">
      <div className="relative flex flex-col justify-between py-6 justify-items-center m-auto h-32">
        <header className="h-32 z-10">
          <nav className="flex justify-around justify-items-center max-w-[1100px] m-auto  ">
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
              <li className="px-3 cursor-pointer">
                <a href="#Team_dev">Team DEV</a>
              </li>
              <li className="px-3">|</li>
              <li className="px-3">
                <a href="#viber_X">viber X</a>
              </li>
              <li className="px-3">|</li>
              <li className="px-3">
                <a href="#Ai_lawline">문서작성 AI 로라인</a>
              </li>
              <li className="px-3">|</li>
              <li className="px-3">
                <a href="#WORKS">Works</a>
              </li>
              <li className="px-3">|</li>
              <li className="px-3">프로젝트 의뢰하기</li>
            </ul>

            <ol
              className={cn(
                'flex justify-between gap-4  py-5 lg:w-[150px] sm:mr-4',
                isSidebarOpen && 'hidden'
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
                    className="w-[25px] h-[25px] rounded-full"
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
              className=" hidden h-12 mb-2   p-2 rounded-md  border-2 border-black box-border cursor-pointer lg:block sm:mr-4 "
              src={
                !isSidebarOpen ? '/img/hamburger_.png' : '/img/sidebarClose.png'
              }
              alt="Next.js Logo"
              onClick={() => setIsSidebarOpen((open) => !open)}
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
