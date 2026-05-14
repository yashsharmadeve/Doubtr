'use client';

import { useState } from 'react';
import { Send, Paperclip, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export type LiveSessionMessage = {
  from: 'me' | 'teacher';
  text: string;
  time: string;
};

type LiveSessionChatPanelProps = {
  title?: string;
  subject?: string;
  placeholder?: string;
  initialMessages?: LiveSessionMessage[];
  onSendMessage?: (message: LiveSessionMessage) => boolean | void;
  onAttach?: () => void;
  onImage?: () => void;
  className?: string;
};

const LiveSessionChatPanel = ({
  title = 'Chat',
  subject = 'Mathematics',
  placeholder = 'Type a message...',
  initialMessages,
  onSendMessage,
  onAttach,
  onImage,
  className,
}: LiveSessionChatPanelProps) => {
  const [messages, setMessages] = useState<LiveSessionMessage[]>(() => initialMessages ?? []);
  const [msg, setMsg] = useState('');

  const send = () => {
    const trimmed = msg.trim();
    if (!trimmed) return;

    const nextMessage: LiveSessionMessage = {
      from: 'me',
      text: trimmed,
      time: 'now',
    };

    const allowSend = onSendMessage?.(nextMessage);
    if (allowSend === false) return;

    setMessages((current) => [...current, nextMessage]);
    setMsg('');
  };

  return (
    <Card className={cn('rounded-2xl border-border/70 flex flex-col', className)}>
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs text-muted-foreground">{subject}</span>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={`${message.time}-${index}`}
            className={`flex ${message.from === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm ${
                message.from === 'me'
                  ? 'bg-gradient-primary text-primary-foreground rounded-br-sm'
                  : 'bg-muted rounded-bl-sm'
              }`}
            >
              <p>{message.text}</p>
              <div
                className={`text-[10px] mt-1 ${
                  message.from === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                }`}
              >
                {message.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-border flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full shrink-0" onClick={onAttach}>
          <Paperclip className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full shrink-0" onClick={onImage}>
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Input
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && send()}
          placeholder={placeholder}
          className="bg-muted/50 border-transparent rounded-full"
        />
        <Button
          size="icon"
          onClick={send}
          className="rounded-full bg-gradient-primary text-primary-foreground shrink-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default LiveSessionChatPanel;
