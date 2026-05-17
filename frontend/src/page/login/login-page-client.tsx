'use client';

import LoginFormPanel from '@/page/login/components/login-form-panel';
import LoginHeroPanel from '@/page/login/components/login-hero-panel';
import LoginTopNav from '@/page/login/components/login-top-nav';

export default function LoginPageClient() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <LoginTopNav />

      <div className="grid lg:grid-cols-2 min-h-screen">
        <LoginHeroPanel />
        <LoginFormPanel />
      </div>
    </main>
  );
}
