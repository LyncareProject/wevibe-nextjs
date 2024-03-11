'use client';

import Button from '@/components/Button';
import { resignReasonSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { signOut, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import InputFormik from '../../../../components/InputFormik';

const DeleteAccountForm = ({ params }: { params: { userId: string } }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = params.userId;

  if (!session?.user.id) return redirect('/');
  return (
    <div id="dev"  className=" bg-[url('/img/h_bg.png')]   w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 lg:px-6 mt-[-152px] mb-[-30px] 2sm:px-2">
    <div className="w-[40%] lg:w-[60%] 2sm:w-[97%] m-auto bg-white h-auto pb-8 mb-[60px]  rounded-3xl   shadow-lg drop-shadow-sm">
      <div className="mx-auto flex w-full max-w-[330px] lg:px-4 mt-[165px] flex-col gap-8 2sm:px-2 ">
        <h1 className="pt-5 text-center text-3xl mt-7 mb-3">회원탈퇴</h1>
        <Formik
          initialValues={{
            reason: '',
          }}
          validationSchema={resignReasonSchema}
          onSubmit={async (data, { setSubmitting, resetForm }) => {
            console.log(data);
            setSubmitting(true);
            try {
              const response = await axios.post(
                `/api/auth/delete-account/${userId}`,
                {
                  reason: data.reason,
                }
              );
              console.log(response);

              if (response.status === 200) {
                toast.success('회원탈퇴 성공!');
                signOut();
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
            <Form className="flex flex-col gap-2 ">
              <p className='text-center '>  
              <img
                className="w-[140px] h-[140px]  rounded-full block mt-[10px] mb-[8px]  m-auto "
              src={session?.user.image}
              width={200}
              height={200}
              alt={'user'}
            /></p>
              <p className='text-center  text-xl font-semibold' ><span className='text-center text-[#5B74E1]'>{session?.user.name}</span> 님 </p>
              <p className='text-xl text-center font-semibold mb-10'>정말 탈퇴하시겠습니까?</p>
              
              {/* <p>{session?.user.email}</p> */}
              
              <span className=''>
              <InputFormik 
                label="탈퇴사유"
                name={'reason'}
                type={'text'}
                touched={touched}
                errors={errors}
                
              />
              </span>
              {/* <p className='absolute -mt-[35px] ml-2'> (선택)</p> */}
              
              {/* <Link href="/forgot-password">비밀번호 변경</Link>
              <Link href="/delete-account">회원 탈퇴</Link> */}

              <Button type="submit" disabled={isSubmitting} className="mt-2 mb-12 flex justify-center font-bold text-[#ffffff]  bg-[#DB7777] ">
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

export default DeleteAccountForm;

