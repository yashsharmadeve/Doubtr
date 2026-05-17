'use client';

import SessionHistoryPage from '@/components/shared/history/history-page';
import { teacherHistorySessions } from '@/lib/history-data';

export default function HistoryClient() {
  return (
    <SessionHistoryPage
      title="Session history"
      description="All your teaching sessions in one place."
      sessions={teacherHistorySessions}
      monthlyLabel="Earned this month"
      monthlyValue="₹1,176"
    />
  );
}
