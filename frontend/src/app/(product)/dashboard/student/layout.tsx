import StudentShell from '@/pages/student/components/student-shell';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StudentShell>{children}</StudentShell>;
};

export default Layout;
