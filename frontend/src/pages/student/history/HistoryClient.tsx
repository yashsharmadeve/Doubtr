'use client';

import SessionHistoryPage from '@/components/shared/history/history-page';
import { studentHistorySessions } from '@/lib/history-data';

export default function HistoryClient() {
  return (
    <SessionHistoryPage
      title="Session history"
      description="All your learning sessions in one place."
      sessions={studentHistorySessions}
      monthlyLabel="Spent this month"
      monthlyValue="₹890"
    />
  );
}
