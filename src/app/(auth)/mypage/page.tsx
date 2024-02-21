import EditUserInfoForm from '@/components/form/EditUserInfoForm';
import { authOptions } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function MyPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/');
  return <EditUserInfoForm />;
}
