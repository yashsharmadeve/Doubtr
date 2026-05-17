'use client';

import { useState } from 'react';
import RequestsHeader from '@/components/teacher/requests/requests-header';
import RequestsFilters from '@/components/teacher/requests/requests-filters';
import RequestCard from '@/components/teacher/requests/request-card';
import { teacherRequests, type RequestType } from '@/lib/teacher-requests-data';

const RequestsPageClient = () => {
  const [activeTab, setActiveTab] = useState<RequestType>('All');
  const [query, setQuery] = useState('');

  const filteredRequests = teacherRequests.filter(
    (request) =>
      (activeTab === 'All' || request.type === activeTab) &&
      (query === '' ||
        request.student.toLowerCase().includes(query.toLowerCase()) ||
        request.topic.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <div className="px-6 lg:px-10 py-8 max-w-7xl mx-auto space-y-6">
      <RequestsHeader />
      <RequestsFilters
        activeTab={activeTab}
        onTabChange={setActiveTab}
        query={query}
        onQueryChange={setQuery}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredRequests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
};
export default RequestsPageClient;
