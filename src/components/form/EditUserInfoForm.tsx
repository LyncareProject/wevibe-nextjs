'use client';

import { signUpSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Button from '../Button';
import InputFormik from '../InputFormik';

const EditUserInfoForm = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-[330px] flex-col gap-8 ">
        <h1 className="pt-5 text-center text-3xl">회원정보 수정</h1>
        <Formik
          initialValues={{
            email: '',
            name: '',
            company: '',
            rank: '',
          }}
          validationSchema={signUpSchema}
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
              <InputFormik
                label="이메일"
                name={'email'}
                type={'email'}
                touched={touched}
                errors={errors}
              />
              <InputFormik
                label="사용자명(이름)"
                name={'name'}
                type={'text'}
                touched={touched}
                errors={errors}
              />
              <InputFormik
                label="회사"
                name={'company'}
                type={'text'}
                touched={touched}
                errors={errors}
              />
              <InputFormik
                label="직급"
                name={'rank'}
                type={'text'}
                touched={touched}
                errors={errors}
              />

              <Button type="submit" disabled={isSubmitting} className="my-5">
                정보수정
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditUserInfoForm;
