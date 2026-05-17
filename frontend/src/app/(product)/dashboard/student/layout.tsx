import StudentShell from '@/page/student/components/student-shell';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StudentShell>{children}</StudentShell>;
};

export default Layout;
