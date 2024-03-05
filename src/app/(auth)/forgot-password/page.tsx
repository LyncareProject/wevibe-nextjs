'use client';

import Button from '@/components/Button';
import InputFormik from '@/components/InputFormik';
import { emailSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <div id="dev"  className=" bg-[url('/img/h_bg.png')]   w-full h-auto  bg-cover bg-center  bg-no-repeat top-0 py-12 lg:px-6 mt-[-152px] mb-[-30px] 2sm:px-2">
    <div className="w-[40%] lg:w-[60%] 2sm:w-[97%] m-auto bg-white h-auto pb-8 mb-[60px]  rounded-3xl   shadow-lg drop-shadow-sm">
      <div className="mx-auto flex w-full max-w-[330px] lg:px-4 mt-[165px] flex-col gap-8 2sm:px-2 ">
        <h1 className=" pt-9 text-center text-3xl">비밀번호 변경</h1>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={emailSchema}
          onSubmit={async (data, { setSubmitting, resetForm }) => {
            console.log(data);
            setSubmitting(true);
            try {
              const response = await axios.post('/api/auth/forgot-password', {
                email: data.email,
              });
              console.log(response);

              if (response.status === 200) {
                toast.success('메일 발송 성공!');
                resetForm();
                router.push('/forgot-password/success');
              }
            } catch (error: any) {
              toast.error(
                error.response?.data?.message || 'An unexpected error occurred'
              );
              console.log(error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="flex flex-col gap-2">
              <InputFormik
                label="이메일"
                name={'email'}
                type={'email'}
                touched={touched}
                errors={errors}
              />
              <Button type="submit" disabled={isSubmitting} className="my-5">
                메일 발송
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
}
