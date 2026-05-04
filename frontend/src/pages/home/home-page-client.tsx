'use client';

import HomeCta from "@/pages/home/components/home-cta";
import HomeFeatures from "@/pages/home/components/home-features";
import HomeHeader from "@/pages/home/components/home-header";
import HomeHero from "@/pages/home/components/home-hero";
import HomeHowItWorks from "@/pages/home/components/home-how-it-works";
import HomeStats from "@/pages/home/components/home-stats";
import HomeTestimonials from "@/pages/home/components/home-testimonials";
import HomeTutorCta from "@/pages/home/components/home-tutor-cta";

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
