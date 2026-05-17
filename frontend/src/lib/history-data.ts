import { MessageSquare, Phone, Video } from 'lucide-react';

export const historyTabs = ['All', 'Video', 'Voice', 'Chat'] as const;

export type HistoryTab = (typeof historyTabs)[number];

export type HistorySessionType = Exclude<HistoryTab, 'All'>;

export type HistorySession = {
  id: string;
  person: string;
  subject: string;
  topic: string;
  duration: string;
  date: string;
  type: HistorySessionType;
  rating: number;
  amount: string;
  initials: string;
};

export const historyTypeIcon = {
  Video,
  Voice: Phone,
  Chat: MessageSquare,
} as const;

export const studentHistorySessions: HistorySession[] = [
  {
    id: 's1',
    person: 'Priya Nair',
    subject: 'Mathematics',
    topic: 'Trigonometry – Identities',
    duration: '32 min',
    date: 'May 4, 2026',
    type: 'Video',
    rating: 5,
    amount: '₹192',
    initials: 'PN',
  },
  {
    id: 's2',
    person: 'Rahul Verma',
    subject: 'Physics',
    topic: "Newton's Laws of Motion",
    duration: '24 min',
    date: 'May 3, 2026',
    type: 'Voice',
    rating: 5,
    amount: '₹192',
    initials: 'RV',
  },
  {
    id: 's3',
    person: 'Sneha Kapoor',
    subject: 'Chemistry',
    topic: 'Redox reactions',
    duration: '18 min',
    date: 'May 2, 2026',
    type: 'Chat',
    rating: 4,
    amount: '₹126',
    initials: 'SK',
  },
  {
    id: 's4',
    person: 'Arjun Mehta',
    subject: 'Mathematics',
    topic: 'Quadratic equations',
    duration: '28 min',
    date: 'Apr 30, 2026',
    type: 'Video',
    rating: 5,
    amount: '₹140',
    initials: 'AM',
  },
  {
    id: 's5',
    person: 'Kavita Iyer',
    subject: 'Biology',
    topic: 'Cell structure & functions',
    duration: '40 min',
    date: 'Apr 28, 2026',
    type: 'Video',
    rating: 5,
    amount: '₹240',
    initials: 'KI',
  },
];

export const teacherHistorySessions: HistorySession[] = [
  {
    id: 't1',
    person: 'Aarav Sharma',
    subject: 'Mathematics',
    topic: 'Trigonometric identities',
    duration: '32 min',
    date: 'May 4, 2026',
    type: 'Video',
    rating: 5,
    amount: '₹240',
    initials: 'AS',
  },
  {
    id: 't2',
    person: 'Meera Iyer',
    subject: 'Physics',
    topic: 'Projectile motion derivation',
    duration: '24 min',
    date: 'May 3, 2026',
    type: 'Voice',
    rating: 5,
    amount: '₹180',
    initials: 'MI',
  },
  {
    id: 't3',
    person: 'Rohan Gupta',
    subject: 'Mathematics',
    topic: 'Limits & continuity worked example',
    duration: '18 min',
    date: 'May 2, 2026',
    type: 'Chat',
    rating: 4,
    amount: '₹126',
    initials: 'RG',
  },
  {
    id: 't4',
    person: 'Sara Khan',
    subject: 'Chemistry',
    topic: 'Balancing redox equations',
    duration: '28 min',
    date: 'Apr 30, 2026',
    type: 'Video',
    rating: 5,
    amount: '₹210',
    initials: 'SK',
  },
  {
    id: 't5',
    person: 'Ishaan Roy',
    subject: 'Mathematics',
    topic: 'Quadratic equations — discriminant',
    duration: '40 min',
    date: 'Apr 28, 2026',
    type: 'Video',
    rating: 5,
    amount: '₹420',
    initials: 'IR',
  },
];
