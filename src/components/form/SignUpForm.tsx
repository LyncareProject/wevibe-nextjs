'use client';

import { signUpSchema } from '@/libs/validations';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Button from '../Button';
import InputFormik from '../InputFormik';

const SignUpForm = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center">
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
                company: data.company,
                rank: data.rank,
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
                label="비밀번호"
                name={'password'}
                type={'password'}
                touched={touched}
                errors={errors}
              />
              <InputFormik
                label="비밀번호 확인"
                name={'confirmPassword'}
                type={'password'}
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
              <InputFormik
                label="가입 경로"
                name={'funnel'}
                type={'text'}
                touched={touched}
                errors={errors}
              />

              <Button type="submit" disabled={isSubmitting} className="my-5">
                회원가입
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
