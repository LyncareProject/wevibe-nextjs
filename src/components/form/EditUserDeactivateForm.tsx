'use client';

import noUser from '@/../public/images/noUser.png';
import { editUserSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Button from '../Button';

const EditUserInfoForm = () => {
  const router = useRouter();
  const { status, data: session } = useSession();
  console.log(session, status);

  return (
    <div id="dev"  className=" bg-[url('/img/h_bg.png')]   w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 lg:px-6 mt-[-152px] mb-[-30px]">
    <div className="w-[60%] m-auto bg-white h-auto pb-8 mb-[60px]  rounded-3xl   shadow-lg drop-shadow-sm">
      <div className="mx-auto flex w-full max-w-[330px] lg:px-4 mt-[165px] flex-col gap-8 ">
      <h1 className="pt-5 text-center text-3xl mt-4">회원탈퇴</h1>
        <p>
        <Image
                    className="w-[110px] h-[110px]  rounded-full block mt-[10px] mb-[8px]  m-auto "
                    src={noUser}
                    // src={session.user.image || noUser}
                    width={300}
                    height={25}
                    alt={'user'}
                  />
        </p>
       
        <Formik
          initialValues={{
            email: '',
            name: '',
            company: '',
            rank: '',
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

              <h3 className='text-xl text-center font-semibold'>{/* <span className='text-[#5B74E1]'>{session.user.name}</span> 님*/} 정말 탈퇴하시겠습니까?</h3>
              <p className=' text-[#919191] text-center'>탈퇴사유(선택)</p>
              <textarea className='block bg-none border-[#EAEAEA] w-full min-h-80  my-4 rounded-xl  border-2 resize-none   '>
              </textarea>
              
        
            

              <Button type="submit" disabled={isSubmitting} className=" mb-3 flex justify-center font-bold text-[#ffffff]  bg-[#DB7777]">
              <Image className='mt-[3.2px] mr-3 '
                src="/Icon/Icon_w_log-out.png"
                alt="Next.js Logo"
                width={17.5}
                height={5}
              />
                회원탈퇴
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div> 
  );
};

export default EditUserInfoForm;
