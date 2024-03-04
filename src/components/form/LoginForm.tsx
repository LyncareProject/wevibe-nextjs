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
    <div
      id="dev"
      className=" bg-[url('/img/h_bg.png')]   w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 lg:px-6 mt-[-152px] mb-[-30px]"
    >
      <div className=" m-auto mb-[60px] h-auto w-[60%] rounded-3xl bg-white  pb-8   shadow-lg drop-shadow-sm ">
        <div className="mx-auto mt-[155px] flex  max-w-[550px] flex-col gap-4 px-12 py-8   ">
          <h2 className="mt-4 from-black text-center text-xl font-bold  leading-8">
            로그인
          </h2>
          <div className="mt-8">
            <button
              className="mt-5 flex w-full flex-row items-center justify-center gap-2 rounded-md bg-[#FEE500] px-5 py-3 font-medium text-slate-900"
              onClick={() =>
                signIn('kakao', { redirect: true, callbackUrl: '/' })
              }
            >
              <RiKakaoTalkFill className="text-xl" />
              카카오로 1초 만에 가입하기
            </button>
            <button
              className="mt-5 flex w-full flex-row items-center justify-center gap-2 rounded-md bg-[#00C900] px-5 py-3 font-medium text-white"
              onClick={() => signIn('naver')}
            >
              <SiNaver className="text-xl" />
              네이버 아이디로 가입하기
            </button>
            <button
              className="mt-5 flex w-full flex-row items-center justify-center gap-2 rounded-md border-2 bg-[#fff] px-5 py-3 font-medium text-black"
              onClick={() =>
                signIn('google', { redirect: true, callbackUrl: '/' })
              }
            >
              <FcGoogle className="text-xl" />
              구글 아이디로 가입하기
            </button>
          </div>
          <div>
            <p className="my-4 text-center text-[#919191]">
              또는 이메일로 로그인
            </p>
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
