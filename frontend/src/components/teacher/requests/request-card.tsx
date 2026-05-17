'use client';

import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { requestTypeIcon, type TeacherRequest } from '@/lib/teacher-requests-data';

type RequestCardProps = {
  request: TeacherRequest;
};

const RequestCard = ({ request }: RequestCardProps) => {
  const Icon = requestTypeIcon[request.type];

  return (
    <Card className="p-5 rounded-2xl border-border/70 hover:shadow-soft transition-shadow">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold shrink-0">
          {request.initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-medium">{request.student}</h3>
            <Badge variant="outline" className="text-xs">
              {request.subject}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Icon className="h-3 w-3 mr-1" />
              {request.type}
            </Badge>
          </div>

          <div className="text-xs text-muted-foreground">{request.className}</div>
          <p className="text-sm mt-2">{request.topic}</p>

          <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
            <Clock className="h-3 w-3" /> {request.time}
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <Button variant="ghost" className="flex-1 rounded-lg">
          Decline
        </Button>
        <Button asChild className="flex-1 bg-gradient-primary text-primary-foreground rounded-lg">
          <Link href={`/teacher/session/${request.id}`}>Accept</Link>
        </Button>
      </div>
    </Card>
  );
};

export default RequestCard;
