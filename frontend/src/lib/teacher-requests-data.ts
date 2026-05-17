import { MessageSquare, Phone, Video } from 'lucide-react';

export const requestTabs = ['All', 'Video', 'Voice', 'Chat'] as const;

export type RequestType = (typeof requestTabs)[number];

export type TeacherRequest = {
  id: string;
  student: string;
  className: string;
  subject: string;
  topic: string;
  time: string;
  type: Exclude<RequestType, 'All'>;
  initials: string;
};

export const teacherRequests: TeacherRequest[] = [
  {
    id: 'r1',
    student: 'Aarav Sharma',
    className: 'Class 10 · CBSE',
    subject: 'Mathematics',
    topic: 'Trigonometric identities — proving sin²θ + cos²θ = 1',
    time: 'Just now',
    type: 'Video',
    initials: 'AS',
  },
  {
    id: 'r2',
    student: 'Meera Iyer',
    className: 'Class 12 · ICSE',
    subject: 'Physics',
    topic: 'Projectile motion — angle of maximum range',
    time: '2 min ago',
    type: 'Chat',
    initials: 'MI',
  },
  {
    id: 'r3',
    student: 'Rohan Gupta',
    className: 'Class 11 · CBSE',
    subject: 'Mathematics',
    topic: 'Limits & continuity worked example',
    time: '5 min ago',
    type: 'Voice',
    initials: 'RG',
  },
  {
    id: 'r4',
    student: 'Sara Khan',
    className: 'Class 9 · State',
    subject: 'Chemistry',
    topic: 'Balancing redox equations',
    time: '12 min ago',
    type: 'Video',
    initials: 'SK',
  },
  {
    id: 'r5',
    student: 'Ishaan Roy',
    className: 'Class 10 · CBSE',
    subject: 'Mathematics',
    topic: 'Quadratic equations — discriminant',
    time: '20 min ago',
    type: 'Chat',
    initials: 'IR',
  },
];

export const requestTypeIcon = {
  Video,
  Voice: Phone,
  Chat: MessageSquare,
} as const;
