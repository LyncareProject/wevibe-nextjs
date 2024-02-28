'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail, MdKey } from 'react-icons/md';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { toast } from 'react-toastify';
import Button from '../Button';
import IconInput from '../InputIcon';
const LoginForm = () => {
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await signIn('credentials', {
        email: emailRef.current?.value ?? '',
        password: passwordRef.current?.value ?? '',
        redirect: false,
      });
      if (res && res.status === 401) {
        console.log();
        toast.error('' + res.error + ' ! ');
      } else {
        toast.success('로그인 완료! ');
        router.push('/');
      }
    } catch (error: any) {
      toast.error('' + error.message + ' ! ');
    }
  };

  return (
    /* eslint-disable-next-line */
    <div id="dev"  className=" bg-[url('/img/h_bg.png')]   w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 lg:px-6 mt-[-152px] mb-[-30px]">
     <div className=' w-[60%] m-auto bg-white h-auto pb-8 mb-[60px]  rounded-3xl   shadow-lg drop-shadow-sm '> 
      <div className="flex px-12 max-w-[550px]  mx-auto flex-col gap-4 py-8 mt-[155px]   ">
        <h2 className="mt-4 text-xl font-bold text-center leading-8  from-black">
          로그인
        </h2>
        <div className="mt-8">
          <button
              className="flex w-full flex-row items-center justify-center gap-2 rounded-md bg-[#FEE500] px-5 py-3 font-medium text-slate-900 mt-5"
            onClick={() => signIn('kakao', { redirect: true, callbackUrl: '/' })}
          >
            <RiKakaoTalkFill className="text-xl" />
            카카오로 1초 만에 시작하기
          </button>
          <button
           className="flex w-full flex-row items-center justify-center gap-2 rounded-md bg-[#fff] px-5 py-3 font-medium text-black border-2 mt-5"
            onClick={() => signIn('naver', { redirect: true, callbackUrl: '/' })}
          >
            <SiNaver className="text-xl" />
            네이버 아이디로 시작하기
          </button>
          <button
            className="flex w-full flex-row items-center justify-center gap-2 rounded-md bg-[#fff] px-5 py-3 font-medium text-black border-2 mt-5"
            onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })}
          >
            <FcGoogle className="text-xl" />
            구글 아이디로 시작하기
          </button>
        </div>
        <div>
          <p className="my-4 text-center text-[#919191]">또는 이메일로 로그인</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <IconInput
            icon={<MdEmail />}
            ref={emailRef}
            type="text"
            name="email"
            placeholder="mouse@whitemouse.dev"
          />
          <IconInput
            icon={<MdKey />}
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="········"
          />
          <Button type="submit" className="">
            Login
          </Button>
        </form>
        <Button
          /* eslint-disable-next-line */
          className="bg-[#f2f2f2] text-[#5e5e5e] hover:bg-[#777] mt-4"
          onClick={() => {
            router.push('/signup');
          }}
        >
         회원가입하기
        </Button>
      </div>
    </div>
    </div>
  );
};
export default LoginForm;
