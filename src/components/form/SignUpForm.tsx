'use client';

import { signUpSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Button from '../Button';
import InputFormik from '../InputFormik';


const SignUpForm = () => {
  const router = useRouter();
  return (
    <div id="dev"  className=" bg-[url('/img/h_bg.png')]  w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 lg:px-6 mt-[-152px] mb-[-30px]">
    <div className=' w-[60%] m-auto bg-white h-auto pb-8 mb-[60px]  rounded-3xl   shadow-lg drop-shadow-sm '> 
    <div className="flex px-12 max-w-[550px]  mx-auto flex-col gap-4 py-8 mt-[155px] ">
      <div className="mx-auto flex w-full max-w-[330px] flex-col gap-8 ">
        <h1 className="pt-5 text-center text-3xl">회원가입</h1>
        <Formik
          initialValues={{
            email: '',
            name: '',
            password: '',
            confirmPassword: '',
            company: '',
            rank: '',
            funnel: '',
          }}
          validationSchema={signUpSchema}
          onSubmit={async (data, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              const response = await axios.post('/api/auth/signup', {
                email: data.email,
                name: data.name,
                password: data.password,
                company: data.rank,
                funnel: data.funnel,
              });

              if (response.status === 201) {
                toast.success('회원가입 성공! 이메일 인증을 해주세요.');
                resetForm();
                router.push('/login');
              }
            } catch (error: any) {
              toast.error(
                error.response?.data?.message || 'An unexpected error occurred'
              );
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="flex flex-col gap-2">
               <div className=' relative '>
              <InputFormik
                label="이메일"
                name={'email'}
                type={'email'}
                touched={touched}
                errors={errors}
              />
              <Image className=' absolute left-[14px] top-[65px]'
                src="/Icon/Icon-email.png"
                alt="Next.js Logo"
                width={16}
                height={5}
              />
              </div>

              <div className=' relative'>
              <InputFormik
                label="사용자명(이름)"
                name={'name'}
                type={'text'}
                touched={touched}
                errors={errors}
              />
              <Image className=' absolute left-[16px] top-[66px]'
                src="/Icon/Icon-circle.png"
                alt="Next.js Logo"
                width={10}
                height={5}
              />
              </div>

              <div className=' relative'>
              <InputFormik
                label="비밀번호"
                name={'password'}
                type={'password'}
                touched={touched}
                errors={errors}
              />
              <Image className=' absolute left-[14px] top-[62px]'
                src="/Icon/Icon-key.png"
                alt="Next.js Logo"
                width={16}
                height={5}
              />
              </div>

              <div className=' relative'>
              <InputFormik
                label="비밀번호 확인"
                name={'confirmPassword'}
                type={'password'}
                touched={touched}
                errors={errors}
              />
              <Image className=' absolute left-[14px] top-[62px]'
                src="/Icon/Icon-key.png"
                alt="Next.js Logo"
                width={16}
                height={5}
              />
              </div>

              <div className=' relative'>
              <InputFormik
                label="회사"
                name={'company'}
                type={'text'}
                touched={touched}
                errors={errors}
              />
              <Image className=' absolute left-[14px] top-[61px]'
                src="/Icon/Icon-building.png"
                alt="Next.js Logo"
                width={16}
                height={5}
              />
              </div>

                <div className=' relative '>  
              <InputFormik
                label="직급"
                name={'rank'}
                type={'text'}
                touched={touched}
                errors={errors}
              />
              <Image className=' absolute left-[16px] top-[66px]'
                src="/Icon/Icon-circle.png"
                alt="Next.js Logo"
                width={10}
                height={5}
              />
              </div>

              <div className=' relative '>
              <InputFormik
                label="가입 경로"
                name={'funnel'}
                type={'text'}
                touched={touched}
                errors={errors}
              />
              <p className=' absolute left-[13px] top-[63px]'>
              <Image 
                src="/Icon/Icon-down-right.png"
                alt="Next.js Logo"
                width={16}
                height={5}
                style={{ height: 'auto' }}
              />
              </p>
              </div>

              <Button type="submit" disabled={isSubmitting} className="mt-5 bg-[#5B74E1]">
                회원가입
              </Button>
            </Form>
          )}
        </Formik>
         </div>      
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
