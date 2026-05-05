'use client';

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Languages,
  Lock,
  Mail,
  Phone,
  Sparkles,
  User,
} from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { BOARDS, CLASSES, DOUBT_TYPES, LANGUAGES, STREAMS, SUBJECTS } from '@/lib/register-data';
import { ChipGroup, Field, SectionHeader } from '@/components/register/register-form-elements';

const StudentForm = ({ onBack }: { onBack: () => void }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    classLvl: '',
    board: '',
    stream: '',
    language: 'English',
    subjects: [] as string[],
    doubtTypes: [] as string[],
  });

  const showStream = form.classLvl === '11' || form.classLvl === '12';

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const toggle = (k: 'subjects' | 'doubtTypes', v: string) =>
    setForm((s) => ({
      ...s,
      [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v],
    }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.mobile || !form.classLvl) {
      toast({ title: 'Missing fields', description: 'Please complete all required fields.' });
      return;
    }
    toast({ title: 'Welcome to Doubtr', description: 'Student account created (UI demo).' });
    router.push('/');
  };

  return (
    <form onSubmit={submit} className="space-y-10">
      <section>
        <SectionHeader step="01" title="Basic details" desc="Tell us who you are." />
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full name" icon={User} required>
            <Input
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="Aarav Sharma"
            />
          </Field>
          <Field label="Mobile number" icon={Phone} required>
            <Input
              value={form.mobile}
              onChange={(e) => set('mobile', e.target.value)}
              placeholder="+91 98765 43210"
            />
          </Field>
          <Field label="Email" icon={Mail} required>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder="you@school.com"
            />
          </Field>
          <Field label="Password" icon={Lock} required>
            <Input
              type="password"
              value={form.password}
              onChange={(e) => set('password', e.target.value)}
              placeholder="Minimum 8 characters"
            />
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="02" title="Academic info" desc="Match you with the right tutors." />
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Class" icon={GraduationCap} required>
            <Select value={form.classLvl} onValueChange={(v) => set('classLvl', v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {CLASSES.map((c) => (
                  <SelectItem key={c} value={c}>
                    Class {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Board" icon={BookOpen} required>
            <Select value={form.board} onValueChange={(v) => set('board', v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select board" />
              </SelectTrigger>
              <SelectContent>
                {BOARDS.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          {showStream && (
            <Field label="Stream" icon={Sparkles} required>
              <Select value={form.stream} onValueChange={(v) => set('stream', v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select stream" />
                </SelectTrigger>
                <SelectContent>
                  {STREAMS.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          )}

          <Field label="Preferred language" icon={Languages}>
            <RadioGroup
              value={form.language}
              onValueChange={(v) => set('language', v)}
              className="flex gap-3 pt-2"
            >
              {LANGUAGES.map((l) => (
                <label
                  key={l}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border cursor-pointer hover:border-foreground/40 transition"
                >
                  <RadioGroupItem value={l} />
                  <span className="text-sm">{l}</span>
                </label>
              ))}
            </RadioGroup>
          </Field>
        </div>

        <div className="mt-6 space-y-5">
          <Field label="Subject preferences (multi-select)">
            <ChipGroup
              options={SUBJECTS}
              values={form.subjects}
              onToggle={(v) => toggle('subjects', v)}
            />
          </Field>
          <Field label="Doubt type preference">
            <ChipGroup
              options={DOUBT_TYPES}
              values={form.doubtTypes}
              onToggle={(v) => toggle('doubtTypes', v)}
            />
          </Field>
        </div>
      </section>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button type="button" variant="ghost" onClick={onBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" /> Change role
        </Button>
        <Button
          type="submit"
          size="lg"
          className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-elegant gap-2"
        >
          Create student account <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default StudentForm;
