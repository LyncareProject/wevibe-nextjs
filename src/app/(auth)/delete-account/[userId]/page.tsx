'use client';

import { resignReasonSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Button from '../../../../components/Button';
import InputFormik from '../../../../components/InputFormik';

const DeleteAccountForm = ({ params }: { params: { userId: string } }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = params.userId;

  if (!session?.user.id) return redirect('/');
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-[330px] flex-col gap-8 ">
        <h1 className="pt-5 text-center text-3xl">회원탈퇴</h1>
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
            <Form className="flex flex-col gap-2">
              <p>{session?.user.image}</p>
              <p>{session?.user.name}</p>
              <p>{session?.user.email}</p>
              <InputFormik
                label="탈퇴사유"
                name={'reason'}
                type={'text'}
                touched={touched}
                errors={errors}
              />

              <Link href="/forgot-password">비밀번호 변경</Link>
              <Link href="/delete-account">회원 탈퇴</Link>
              <Button type="submit" disabled={isSubmitting} className="my-5">
                회원탈퇴
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default DeleteAccountForm;
