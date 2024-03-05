'use client';

import Button from '@/components/Button';
import ImageChangeModal from '@/components/ImageChangeModal';
import InputFormik from '@/components/InputFormik';
import { editUserSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const EditUserInfoForm = ({ params }: { params: { userId: string } }) => {
  const router = useRouter();
  const { userId } = params;
  const { data: session } = useSession();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return (
    <div id="dev"  className=" bg-[url('/img/h_bg.png')]   w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 lg:px-6 mt-[-152px] mb-[-30px] 2sm:px-2">
    <div className="w-[40%] lg:w-[60%] 2sm:w-[97%] m-auto bg-white h-auto pb-8 mb-[60px]  rounded-3xl   shadow-lg drop-shadow-sm">
      <div className="mx-auto flex w-full max-w-[330px] lg:px-4 mt-[165px] flex-col gap-8 2sm:px-2 ">
        <h1 className="pt-5 text-center text-3xl">회원정보 수정</h1>
        <>
          <button onClick={openModal}>
            <img
                className="w-[120px] h-[120px]  rounded-full block mt-[10px] mb-[8px]  m-auto "
              src={session?.user.image}
              width={200}
              height={200}
              alt={'user'}
            />
          </button>
          <ImageChangeModal
            userId={userId}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          />
        </>

        <Link href="/myproject"> 
              <Button type="submit"  className="mt-1 flex justify-center text-center font-bold text-[#eee] ">
              {/* <Image className=' mt-[3px] mr-3 ] '
                src="/Icon/Icon-bluekey.png"
                alt="Next.js Logo"
                width={18}
                height={5}
              /> */}
                내 프로젝트 목록
              </Button>
        </Link>

        
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
              const response = await axios.post(
                `/api/auth/editUserInfo/${userId}`,
                {
                  email: data.email,
                  name: data.name,
                  company: data.company,
                  rank: data.rank,
                }
              );
              console.log(response);

              if (response.status === 200) {
                toast.success('회원정보 수정 성공!');
                resetForm();
                // router.push('/');
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

              <div className=' relative -mb-3 -mt-3'>
              <InputFormik
                label="사용자명(이름)"
                name={'name'}
                type={'text'}
                touched={touched}
                errors={errors}
              />
              <Image className=' absolute left-[17px] top-[66px]'
                src="/Icon/Icon-circle.png"
                alt="Next.js Logo"
                width={10}
                height={5}
              />
       
              </div>

              <div className=' relative -mb-3 -mt-3'>
              <InputFormik
                label="이메일"
                name={'email'}
                type={'email'}
                touched={touched}
                errors={errors}
              />
              <Image className=' absolute left-[14.5px] top-[64px]'
                src="/Icon/Icon-email.png"
                alt="Next.js Logo"
                width={16}
                height={5}
              />
              </div>

              <div className=' relative -mb-3 -mt-3'>
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

              <div className=' relative -mb-3 -mt-3'>
              <InputFormik
                label="직급"
                name={'rank'}
                type={'text'}
                touched={touched}
                errors={errors}
              />
                <Image className=' absolute left-[17px] top-[66px]'
                src="/Icon/Icon-circle.png"
                alt="Next.js Logo"
                width={10}
                height={5}
              />
              </div>

              <Link className='mt-2 font-semibold underline ' href="/forgot-password">비밀번호 변경</Link>

              
              <Button type="submit" disabled={isSubmitting} className="my-5 flex justify-center text-center font-bold text-[#5B74E1] bg-[#F2F4FF]">
                정보수정
              </Button>

              <Button  className="-my-4 mb-3 flex justify-center font-bold text-[#8D8D8D]  bg-[#F2F4FF]">
              <Link  className='flex'  href={`/delete-account/${session?.user.userId}`} >
              <Image className='mt-[3.2px] mr-3 '
                src="/Icon/Icon-out.png"
                alt="Next.js Logo"
                width={17.5}
                height={5}
              />
                회원 탈퇴
              </Link>
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
