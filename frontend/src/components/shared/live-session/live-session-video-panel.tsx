'use client';

import { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MoreVertical } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type LiveSessionVideoPanelProps = {
  teacherName: string;
  teacherInitials: string;
  selfInitials?: string;
  selfLabel?: string;
  defaultMuted?: boolean;
  defaultVideoOn?: boolean;
  onMuteChange?: (muted: boolean) => void;
  onVideoChange?: (videoOn: boolean) => void;
  onEndCall?: () => void;
  onMore?: () => void;
  className?: string;
};

const LiveSessionVideoPanel = ({
  teacherName,
  teacherInitials,
  selfInitials = 'A',
  selfLabel = 'You',
  defaultMuted = false,
  defaultVideoOn = true,
  onMuteChange,
  onVideoChange,
  onEndCall,
  onMore,
  className,
}: LiveSessionVideoPanelProps) => {
  const [muted, setMuted] = useState(defaultMuted);
  const [videoOn, setVideoOn] = useState(defaultVideoOn);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    onMuteChange?.(next);
  };

  const toggleVideo = () => {
    const next = !videoOn;
    setVideoOn(next);
    onVideoChange?.(next);
  };

  return (
    <div className={cn('space-y-4', className)}>
      <Card className="relative aspect-video overflow-hidden rounded-2xl border-border/70 bg-gradient-dark">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-28 w-28 rounded-full bg-gradient-primary flex items-center justify-center text-4xl font-semibold text-primary-foreground shadow-elegant">
            {teacherInitials}
          </div>
        </div>
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur text-white text-xs">
          {teacherName}
        </div>

        <div className="absolute bottom-3 right-3 h-32 w-44 rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden">
          {videoOn ? (
            <div className="h-12 w-12 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-semibold">
              {selfInitials}
            </div>
          ) : (
            <VideoOff className="h-5 w-5 text-muted-foreground" />
          )}
          <div className="absolute bottom-1 left-2 text-[11px] text-foreground/80">{selfLabel}</div>
        </div>
      </Card>

      <Card className="p-3 rounded-2xl border-border/70 flex items-center justify-center gap-2">
        <Button
          variant={muted ? 'destructive' : 'outline'}
          size="icon"
          className="h-12 w-12 rounded-full"
          onClick={toggleMute}
        >
          {muted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </Button>
        <Button
          variant={!videoOn ? 'destructive' : 'outline'}
          size="icon"
          className="h-12 w-12 rounded-full"
          onClick={toggleVideo}
        >
          {videoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
        </Button>
        <Button
          size="icon"
          className="h-12 w-12 rounded-full bg-destructive hover:bg-destructive/90"
          onClick={onEndCall}
        >
          <PhoneOff className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" onClick={onMore}>
          <MoreVertical className="h-5 w-5" />
        </Button>
      </Card>
    </div>
  );
};

export default LiveSessionVideoPanel;
