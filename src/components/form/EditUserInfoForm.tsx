'use client';

import noUser from '@/../public/images/noUser.png';
import { editUserSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Button from '../Button';
import InputFormik from '../InputFormik';


const EditUserInfoForm = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div id="dev"  className=" top-0   mb-[-30px] mt-[-152px]  h-auto w-full  bg-[url('/img/h_bg.png')] bg-cover bg-center bg-no-repeat py-12 lg:px-6">
    <div className="m-auto mb-[60px] h-auto w-[60%] rounded-3xl bg-white  pb-8   shadow-lg drop-shadow-sm">
      <div className="mx-auto mt-[165px] flex w-full max-w-[330px] flex-col gap-8 lg:px-4 ">
      <h1 className="mt-4 pt-5 text-center text-3xl">마이페이지</h1>
        <p>
          <Image
            className="m-auto mb-[8px]  mt-[10px] block size-[110px] rounded-full "
            src={noUser}
            // src={session.user.image || noUser}
            width={300}
            height={25}
            alt={'user'}
          />
        </p>
        <Formik
          initialValues={{
            email: session?.user.email,
            name: session?.user.name,
            company: session?.user.company,
            rank: session?.user.rank,
          }}
          validationSchema={editUserSchema}
          onSubmit={async (data, { setSubmitting, resetForm }) => {
            console.log(data);
            setSubmitting(true);
            try {
              const response = await axios.post('/api/auth/editUserInfo', {
                email: data.email,
                name: data.name,
                company: data.company,
                rank: data.rank,
              });
              console.log(response);

              if (response.status === 200) {
                toast.success('회원정보 수정 성공!');
                resetForm();
                router.push('/');
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

               <div className=' relative -mb-3'>
               <InputFormik
                 label="사용자명(이름)"
                 name={'name'}
                 type={'text'}
                 touched={touched}
                 errors={errors}
               />
                <Image className=' absolute left-[17px] top-[65px]'
                 src="/Icon/Icon-circle.png"
                 alt="Next.js Logo"
                 width={10}
                 height={5}
               />
               <p className=' absolute right-[16px] top-[61px] text-[12px]  text-[#5B74E1]'>수정</p>
               </div>

               <div className=' relative -my-3'>
               <InputFormik
                 label="이메일"
                 name={'email'}
                 type={'email'}
                 touched={touched}
                 errors={errors}
               />
               <Image className=' absolute left-[15px] top-[64px]'
                 src="/Icon/Icon-email.png"
                 alt="Next.js Logo"
                 width={16}
                 height={5}
               />
               <p className=' absolute right-[16px] top-[61px] text-[12px]  text-[#5B74E1]'>수정</p>
               </div>
 
             
             <div className=' relative -mb-3'>
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
 
                <div className=' relative  '>              
               <InputFormik
                 label="직급"
                 name={'rank'}
                 type={'text'}
                 touched={touched}
                 errors={errors}
               />
                <Image className=' absolute left-[17px] top-[65px]'
                 src="/Icon/Icon-circle.png"
                 alt="Next.js Logo"
                 width={10}
                 height={5}
               />
               </div>
             
               <Link href="/forgot-password">비밀번호 변경</Link>
 
               <Button type="submit" disabled={isSubmitting} className="my-5 flex justify-center bg-[#F2F4FF] text-center font-bold text-[#5B74E1]">
               {/* <Image className=' mt-[3px] mr-3 ] '
                 src="/Icon/Icon-bluekey.png"
                 alt="Next.js Logo"
                 width={18}
                 height={5}
               /> */}
                 정보변경
               </Button>

               <Link href="/deactivate" >
               <Button type="submit" disabled={isSubmitting} className="-my-4 mb-3 flex justify-center bg-[#F2F4FF] font-bold  text-[#8D8D8D]">
               <Image className='mr-3 mt-[3.2px] '
                 src="/Icon/Icon-out.png"
                 alt="Next.js Logo"
                 width={17.5}
                 height={5}
               />
                 회원탈퇴
               </Button>
               </Link>
             </Form>
           )}
         </Formik>
       </div>
     </div>
   </div> 
  );
};

export default EditUserInfoForm;
