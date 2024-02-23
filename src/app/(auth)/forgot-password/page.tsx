'use client';

import Button from '@/components/Button';
import InputFormik from '@/components/InputFormik';
import { emailSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function forgotPassword() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-[330px] flex-col gap-8 ">
        <h1 className="pt-5 text-center text-3xl">비밀번호 변경</h1>
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
  );
}
