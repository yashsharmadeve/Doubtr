import TeacherShell from '@/page/teacher/components/TeacherShell';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <TeacherShell>{children}</TeacherShell>;
};

export default Layout;
