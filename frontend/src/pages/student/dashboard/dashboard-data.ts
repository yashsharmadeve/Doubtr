import { Clock, Flame, MessageSquare, Target } from 'lucide-react';

export const stats = [
  {
    label: 'Doubts Solved',
    value: '128',
    trend: '+12 this week',
    icon: MessageSquare,
    tone: 'primary',
  },
  { label: 'Hours Learned', value: '42.5', trend: '+3.2 this week', icon: Clock, tone: 'accent' },
  { label: 'Streak', value: '7 days', trend: 'Keep going!', icon: Flame, tone: 'primary' },
  { label: 'Accuracy', value: '92%', trend: '+4% this month', icon: Target, tone: 'accent' },
];

export const upcoming = [
  {
    teacher: 'Priya Nair',
    subject: 'Mathematics',
    topic: 'Trigonometry - Identities',
    time: 'Today, 5:30 PM',
    initials: 'PN',
  },
  {
    teacher: 'Rahul Verma',
    subject: 'Physics',
    topic: "Newton's Laws - Problems",
    time: 'Tomorrow, 7:00 PM',
    initials: 'RV',
  },
];

export const subjects = [
  { name: 'Mathematics', progress: 78, color: 'bg-gradient-primary' },
  { name: 'Physics', progress: 64, color: 'bg-gradient-accent' },
  { name: 'Chemistry', progress: 51, color: 'bg-gradient-primary' },
  { name: 'Biology', progress: 42, color: 'bg-gradient-accent' },
];

export const recent = [
  {
    subject: 'Mathematics',
    question: 'Solve quadratic equation using completing the square',
    time: '2h ago',
    status: 'Resolved',
  },
  {
    subject: 'Physics',
    question: 'Difference between scalar and vector quantities',
    time: '5h ago',
    status: 'Resolved',
  },
  {
    subject: 'Chemistry',
    question: 'Balance the redox reaction in acidic medium',
    time: 'Yesterday',
    status: 'Resolved',
  },
];
