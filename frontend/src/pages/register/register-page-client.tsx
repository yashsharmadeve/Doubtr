'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import StudentForm from '@/pages/register/components/student-form';
import TeacherForm from '@/pages/register/components/teacher-form';
import { RoleCard } from '@/components/register/register-form-elements';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Role = 'student' | 'teacher' | null;

const RegisterPageClient = () => {
  const [role, setRole] = useState<Role>(null);

  const heading = useMemo(() => {
    if (role === 'student') return 'Create your student profile';
    if (role === 'teacher') return 'Join Doubtr as a teacher';
    return 'Join Doubtr';
  }, [role]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div
        className="fixed inset-0 -z-10 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />

      <header className="sticky top-0 z-20 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary shadow-glow flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Doubtr</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/sign-in"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Already have an account? <span className="underline underline-offset-4">Sign in</span>
            </Link>
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              Home <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 lg:py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-medium text-muted-foreground mb-5">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Trusted by 50,000+ learners
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl tracking-tight leading-[1.05]">
            {heading}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {role
              ? 'Fill in the details below - it only takes a minute.'
              : 'Pick how you would like to use Doubtr. You can switch later.'}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!role && (
            <motion.div
              key="role"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease }}
              className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto"
            >
              <RoleCard
                active={false}
                icon={GraduationCap}
                title="I'm a student"
                desc="Get instant help with doubts from top tutors across subjects."
                accent="var(--gradient-primary)"
                onClick={() => setRole('student')}
              />
              <RoleCard
                active={false}
                icon={Briefcase}
                title="I'm a teacher"
                desc="Earn by solving doubts on your schedule, your way."
                accent="var(--gradient-accent)"
                onClick={() => setRole('teacher')}
              />
            </motion.div>
          )}

          {role && (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease }}
              className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-soft"
            >
              {role === 'student' ? (
                <StudentForm onBack={() => setRole(null)} />
              ) : (
                <TeacherForm onBack={() => setRole(null)} />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-xs text-muted-foreground mt-10">
          By continuing you agree to Doubtr&#39;s Terms and Privacy Policy.
        </p>
      </div>
    </main>
  );
};

export default RegisterPageClient;
