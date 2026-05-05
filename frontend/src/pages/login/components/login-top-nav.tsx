import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import BrandLogo from '@/components/brand-logo';

export default function LoginTopNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex items-center justify-between py-6">
        <BrandLogo
          icon={<Sparkles className="h-4 w-4 text-primary-foreground" />}
          iconWrapperClassName="h-9 w-9 rounded-xl bg-gradient-primary shadow-glow flex items-center justify-center"
        />
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
        >
          Back to home <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}
