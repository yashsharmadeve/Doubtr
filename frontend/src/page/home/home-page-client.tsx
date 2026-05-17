'use client';

import HomeCta from '@/page/home/components/home-cta';
import HomeFeatures from '@/page/home/components/home-features';
import HomeHeader from '@/page/home/components/home-header';
import HomeHero from '@/page/home/components/home-hero';
import HomeHowItWorks from '@/page/home/components/home-how-it-works';
import HomeStats from '@/page/home/components/home-stats';
import HomeTestimonials from '@/page/home/components/home-testimonials';
import HomeTutorCta from '@/page/home/components/home-tutor-cta';

export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HomeHeader />
      <HomeHero />
      <HomeStats />
      <HomeHowItWorks />
      <HomeFeatures />
      <HomeTutorCta />
      <HomeTestimonials />
      <HomeCta />
    </div>
  );
}
