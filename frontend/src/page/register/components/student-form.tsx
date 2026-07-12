'use client';

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Languages,
  Lock,
  Mail,
  MapPin,
  Phone,
  School,
  // Sparkles,
  User,
} from 'lucide-react';
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
import { BOARDS, CLASSES, LANGUAGES, SUBJECTS } from '@/lib/register-data';
import { ChipGroup, Field, SectionHeader } from '@/components/register/register-form-elements';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useStudentRegister } from '@/hooks/useAuth';
import type { StudentRegisterInput } from '@/types/auth';

const BOARD_MAP: Record<string, NonNullable<StudentRegisterInput['board']>> = {
  CBSE: 'CBSE',
  ICSE: 'ICSE',
  'State Board': 'STATE_BOARD',
};

const studentRegisterSchema = z.object({
  name: z.string().min(1, { message: 'Full name is required' }),
  mobile: z.string().min(1, { message: 'Mobile number is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  school: z.string().min(1, { message: 'School is required' }),
  classLvl: z.string().min(1, { message: 'Class is required' }),
  board: z.string().min(1, { message: 'Board is required' }),
  // stream: z.string().min(1),
  language: z.string().min(1, { message: 'Language is required' }),
  subjectPreferences: z.array(z.string().min(1, { message: 'Subject is required' })),
  // doubtTypes: z.array(z.string().min(1)),
  // preferredLanguage: z.string().min(1),
});

type StudentRegisterFormValues = z.infer<typeof studentRegisterSchema>;

const StudentForm = ({ onBack }: { onBack: () => void }) => {
  const { mutate: registerStudent, isPending } = useStudentRegister();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<StudentRegisterFormValues>({
    resolver: zodResolver(studentRegisterSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      password: '',
      city: '',
      state: '',
      classLvl: '',
      board: '',
      school: '',
      language: 'English',
      subjectPreferences: [] as string[],
    },
  });

  const classLvl = watch('classLvl');
  const board = watch('board');
  const language = watch('language');
  const subjectPreferences = watch('subjectPreferences');

  const toggleSubject = (value: string) => {
    const current = subjectPreferences ?? [];
    setValue(
      'subjectPreferences',
      current.includes(value) ? current.filter((x) => x !== value) : [...current, value],
      { shouldValidate: true },
    );
  };

  const submit = (data: StudentRegisterFormValues) => {
    registerStudent({
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.mobile,
      class: data.classLvl,
      board: BOARD_MAP[data.board],
      school: data.school,
      city: data.city,
      state: data.state,
      preferredLanguage: data.language,
      subjectPreferences: data.subjectPreferences,
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-10">
      <section>
        <SectionHeader step="01" title="Basic details" desc="Tell us who you are." />
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full name" icon={User} required>
            <Input {...register('name')} placeholder="Aarav Sharma" />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </Field>
          <Field label="Mobile number" icon={Phone} required>
            <Input {...register('mobile')} placeholder="+91 98765 43210" />
            {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
          </Field>
          <Field label="Email" icon={Mail} required>
            <Input type="email" {...register('email')} placeholder="you@school.com" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </Field>
          <Field label="Password" icon={Lock} required>
            <Input type="password" {...register('password')} placeholder="Minimum 8 characters" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </Field>
          <Field label="City" icon={MapPin} required>
            <Input {...register('city')} placeholder="Aarav Sharma" />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </Field>
          <Field label="State" icon={MapPin} required>
            <Input {...register('state')} placeholder="Aarav Sharma" />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="02" title="Academic info" desc="Match you with the right tutors." />
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="School" icon={School} required>
            <Input
              {...register('school')}
              // value={form.school}
              // onChange={(e) => set('school', e.target.value)}
              placeholder="School name"
            />
            {errors.school && <p className="text-red-500">{errors.school.message}</p>}
          </Field>

          <Field label="Class" icon={GraduationCap} required>
            <Select
              value={classLvl || undefined}
              onValueChange={(v) => setValue('classLvl', v, { shouldValidate: true })}
            >
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
            {errors.classLvl && <p className="text-red-500">{errors.classLvl.message}</p>}
          </Field>

          <Field label="Board" icon={BookOpen} required>
            <Select
              value={board || undefined}
              onValueChange={(v) => setValue('board', v, { shouldValidate: true })}
            >
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
            {errors.board && <p className="text-red-500">{errors.board.message}</p>}
          </Field>

          {/* {showStream && (
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
          )} */}

          <Field label="Preferred language" icon={Languages} required>
            <RadioGroup
              value={language}
              onValueChange={(v) => setValue('language', v, { shouldValidate: true })}
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
            {errors.language && <p className="text-red-500">{errors.language.message}</p>}
          </Field>
        </div>

        <div className="mt-6 space-y-5">
          <Field label="Subject preferences (multi-select)">
            <ChipGroup
              values={subjectPreferences ?? []}
              onToggle={toggleSubject}
              options={SUBJECTS}
            />
            {errors.subjectPreferences && (
              <p className="text-red-500 text-sm">{errors.subjectPreferences.message}</p>
            )}
          </Field>
          {/* <Field label="Doubt type preference">
            <ChipGroup
              options={DOUBT_TYPES}
              values={form.doubtTypes}
              onToggle={(v) => toggle('doubtTypes', v)}
            />
          </Field> */}
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
