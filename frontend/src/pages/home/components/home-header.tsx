import Link from 'next/link';
import { ArrowUpRight, GraduationCap } from 'lucide-react';

import BrandLogo from '@/components/brand-logo';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#tutors', label: 'For Tutors' },
  { href: '#stories', label: 'Stories' },
];

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="container flex items-center justify-between h-16">
        <BrandLogo
          icon={<GraduationCap className="w-4 h-4" />}
          iconWrapperClassName="w-8 h-8 rounded-lg bg-gradient-primary text-primary-foreground"
          textClassName="font-bold text-lg"
          className="font-bold text-lg"
        />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground transition">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="rounded-full bg-foreground text-background hover:bg-foreground/90"
          >
            <Link href="/register">
              Get started <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
