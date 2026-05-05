import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  BookOpen,
  Brain,
  MessageSquare,
  Sparkles,
  Target,
  Users,
  Video,
  Zap,
} from 'lucide-react';

type ItemWithIcon = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const stats = [
  { value: '10K+', label: 'Active learners' },
  { value: '2,500+', label: 'Verified tutors' },
  { value: '50+', label: 'Subjects covered' },
  { value: '4.8★', label: 'Average rating' },
];

export const steps: ItemWithIcon[] = [
  {
    icon: MessageSquare,
    title: 'Post your doubt',
    desc: 'Snap a photo or type it out — any subject, any level.',
  },
  {
    icon: Users,
    title: 'Match with a tutor',
    desc: 'Our system pairs you with the right expert in seconds.',
  },
  {
    icon: Sparkles,
    title: 'Get the breakthrough',
    desc: 'Solve, understand, and level up — in real time.',
  },
];

export const features: ItemWithIcon[] = [
  {
    icon: Zap,
    title: 'Instant matching',
    desc: 'Connect with a verified tutor in under 60 seconds.',
  },
  {
    icon: Video,
    title: 'Live sessions',
    desc: 'Whiteboard, video, and chat — built for deep learning.',
  },
  { icon: Brain, title: 'AI study buddy', desc: '24/7 hints, summaries, and practice questions.' },
  {
    icon: BadgeCheck,
    title: 'Verified teachers',
    desc: 'Every tutor passes a 5-stage qualification process.',
  },
  {
    icon: BookOpen,
    title: 'Multiple modes',
    desc: 'Quick chat, deep dives, exam prep — your call.',
  },
  {
    icon: Target,
    title: 'Affordable pricing',
    desc: 'Pay per session or subscribe — no hidden fees.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Aanya Sharma',
    role: 'Class 12 · JEE Aspirant',
    quote:
      'I was stuck on calculus for weeks. One 20-minute session here and it clicked. The tutor was patient and brilliant.',
    rating: 5,
  },
  {
    name: 'Mihir Kapoor',
    role: 'Engineering Student',
    quote:
      'Doubtr saved me before my finals. The whiteboard tool feels like sitting next to my professor. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Sara Ahmed',
    role: 'Class 10',
    quote:
      'I love that I can ask anything without feeling judged. My grades jumped from a B to an A in one term.',
    rating: 5,
  },
];

export const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Economics',
  'Computer Science',
  'English',
  'History',
];
