import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const Page = async () => {
  const cookieStore = await cookies();
  const role = cookieStore.get('role')?.value;

  if (role === 'TEACHER') {
    redirect('/dashboard/teacher');
  }

  redirect('/dashboard/student');
};

export default Page;
