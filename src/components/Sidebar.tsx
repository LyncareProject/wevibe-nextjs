import { cn } from '@/utils/style';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FC } from 'react';

type SidebarProps = {
  close: () => void;
  isOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ close, isOpen }) => {
  const { status, data: session } = useSession();
  return (
    <div
      className={cn(
        'relative w-full m-auto bg-[#eeeeee] bg-opacity-95 z-10 lg:absolute',
        isOpen ? 'flex' : 'hidden'
      )}
    >
      <div className="flex justify-end lg:hidden">
        <button>
          <Image
            id="Sidibar_boutton"
            className="flex justify-end z-50 lg:hidden"
            src="/img/sidebarClose.png"
            alt="Next.js Logo"
            width={50}
            height={5}
          />
        </button>
      </div>
      <header className=" z-100 m-auto">
        <nav className="w-full m-auto">
          <p className="cursor-pointer m-auto">
            <Image
              className="m-auto pt-6"
              src="/img/Logoimg2.png"
              alt="Next.js Logo"
              width={90}
              height={17}
              priority
            />
          </p>
          <ul className="w-full m-auto  block text-center  py-5">
            <li className="0 cursor-pointer p-2 hover:bg-slate-100">
              <a href="#Team_dev">Team DEV</a>
            </li>

            <li className="0 cursor-pointer p-2 hover:bg-slate-100">
              <a href="#viber_X">viber X</a>
            </li>

            <li className="0 cursor-pointer p-2 hover:bg-slate-100">
              <a href="#Ai_lawline">문서작성 AI 로라인</a>
            </li>

            <li className="0 cursor-pointer p-2 hover:bg-slate-100">
              <a href="#WORKS">Works</a>
            </li>

            <li className="0 cursor-pointer p-2 hover:bg-slate-100">
              <input
                type="button"
                value="프로젝트 의뢰하기"
                name="프로젝트 의뢰하기"
              />
            </li>
          </ul>
          <hr></hr>

          <ol className="py-5 text-center m-auto">
            {!session ? (
              <>
                <li className="0 cursor-pointer p-2 hover:bg-slate-100">
                  <input type="button" value="로그인" name="로그인" />
                </li>
                <li className="0 cursor-pointer p-2 hover:bg-slate-100">
                  <input type="button" value="회원가입" name="회원가입" />
                </li>
              </>
            ) : (
              <>
                <li className="0 cursor-pointer p-2 hover:bg-slate-100">
                  {session.user.name} 님
                </li>
                <li className="0 cursor-pointer p-2 hover:bg-slate-100">
                  <input type="button" value="로그아웃" name="signOut" />
                </li>
              </>
            )}
          </ol>
        </nav>
      </header>
    </div>
  );
};

export default Sidebar;
