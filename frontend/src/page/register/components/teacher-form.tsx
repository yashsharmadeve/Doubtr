'use client';

import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Clock,
  GraduationCap,
  Languages,
  Lock,
  Mail,
  Phone,
  User,
  Wallet,
} from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
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
import {
  BOARDS,
  CLASSES,
  DAYS,
  LANGUAGES,
  MODES,
  ROLES_TEACHER,
  SUBJECTS,
  TIME_SLOTS,
} from '@/lib/register-data';
import {
  ChipGroup,
  Field,
  FileDrop,
  SectionHeader,
} from '@/components/register/register-form-elements';
import { useTeacherRegister } from '@/hooks/useAuth';

const teacherRegisterSchema = z.object({
  name: z.string().min(1, { message: 'Full name is required' }),
  phone: z.string().min(1, { message: 'Mobile number is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  qualifications: z.string().min(1, { message: 'Qualification is required' }),
  experience: z.string().min(1, { message: 'Experience is required' }),
  currentRole: z.string().min(1, { message: 'Current role is required' }),
  specializations: z.array(z.string()),
  classes: z.array(z.string()),
  subjects: z.array(z.string()),
  boards: z.array(z.string()),
  languages: z.array(z.string()),
  teachingModes: z.array(z.string()),
  availableTimeSlots: z.array(z.string()),
  availableDays: z.array(z.string()),
  rateType: z.enum(['per-question', 'per-minute']),
  rate: z.string(),
  upiId: z.string(),
  bankDetails: z.string(),
});

type TeacherRegisterFormValues = z.infer<typeof teacherRegisterSchema>;

const TeacherForm = ({ onBack }: { onBack: () => void }) => {
  const { mutate: registerTeacher, isPending } = useTeacherRegister();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TeacherRegisterFormValues>({
    resolver: zodResolver(teacherRegisterSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      qualifications: '',
      experience: '',
      currentRole: '',
      specializations: [],
      classes: [],
      subjects: [],
      boards: [],
      languages: [],
      teachingModes: [],
      availableTimeSlots: [],
      availableDays: [],
      rateType: 'per-question',
      rate: '',
      upiId: '',
      bankDetails: '',
    },
  });

  const [files, setFiles] = useState<{ id?: string; degree?: string; photo?: string }>({});

  const currentRole = watch('currentRole');
  const specializations = watch('specializations');
  const classes = watch('classes');
  const subjects = watch('subjects');
  const boards = watch('boards');
  const languages = watch('languages');
  const teachingModes = watch('teachingModes');
  const availableTimeSlots = watch('availableTimeSlots');
  const availableDays = watch('availableDays');
  const rateType = watch('rateType');

  const toggle = (key: keyof TeacherRegisterFormValues, value: string) => {
    const current = (watch(key) as string[]) ?? [];
    setValue(
      key,
      current.includes(value) ? current.filter((x) => x !== value) : [...current, value],
      { shouldValidate: true },
    );
  };

  const submit = (data: TeacherRegisterFormValues) => {
    registerTeacher({
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      qualifications: data.qualifications,
      specializations: data.specializations,
      experience: data.experience ? Number(data.experience) : undefined,
      currentRole: data.currentRole || undefined,
      classes: data.classes,
      subjects: data.subjects,
      boards: data.boards,
      languages: data.languages.length ? data.languages : undefined,
      teachingModes: data.teachingModes,
      availableTimeSlots: data.availableTimeSlots,
      availableDays: data.availableDays,
      rateType: data.rateType === 'per-minute' ? 'PER_MINUTE' : 'PER_QUESTION',
      sessionRate: data.rate ? Number(data.rate) : undefined,
      upiId: data.upiId || undefined,
      bankDetails: data.bankDetails || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-10">
      <section>
        <SectionHeader step="01" title="Basic details" desc="The essentials." />
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full name" icon={User} required>
            <Input {...register('name')} placeholder="Dr. Priya Mehta" />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </Field>
          <Field label="Mobile number" icon={Phone} required>
            <Input {...register('phone')} placeholder="+91 98765 43210" />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
          </Field>
          <Field label="Email" icon={Mail} required>
            <Input type="email" {...register('email')} placeholder="teacher@doubtr.com" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </Field>
          <Field label="Password" icon={Lock} required>
            <Input type="password" {...register('password')} placeholder="Minimum 8 characters" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader
          step="02"
          title="Professional info"
          desc="Your background and credentials."
        />
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Highest qualification" icon={GraduationCap} required>
            <Input {...register('qualifications')} placeholder="M.Sc. Physics, B.Ed." />
            {errors.qualifications && (
              <p className="text-red-500">{errors.qualifications.message}</p>
            )}
          </Field>
          <Field label="Experience (years)" icon={Briefcase} required>
            <Input type="number" min={0} {...register('experience')} placeholder="5" />
            {errors.experience && <p className="text-red-500">{errors.experience.message}</p>}
          </Field>
          <Field label="Current role" icon={Briefcase} required>
            <Select
              value={currentRole || undefined}
              onValueChange={(v) => setValue('currentRole', v, { shouldValidate: true })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {ROLES_TEACHER.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.currentRole && <p className="text-red-500">{errors.currentRole.message}</p>}
          </Field>
          <Field label="Specialization (subjects)">
            <ChipGroup
              options={SUBJECTS}
              values={specializations}
              onToggle={(v) => toggle('specializations', v)}
            />
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="03" title="Teaching scope" desc="What and whom you can teach." />
        <div className="space-y-5">
          <Field label="Classes you can teach (6-12)">
            <ChipGroup
              options={CLASSES.map((c) => `Class ${c}`)}
              values={classes}
              onToggle={(v) => toggle('classes', v)}
            />
          </Field>
          <Field label="Subjects">
            <ChipGroup
              options={SUBJECTS}
              values={subjects}
              onToggle={(v) => toggle('subjects', v)}
            />
          </Field>
          <Field label="Boards you can handle">
            <ChipGroup options={BOARDS} values={boards} onToggle={(v) => toggle('boards', v)} />
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="04" title="Verification" desc="Quick checks for trust and safety." />
        <div className="grid sm:grid-cols-3 gap-4">
          <FileDrop
            label="Upload ID proof"
            hint="Aadhaar / PAN (PDF or image)"
            fileName={files.id}
            onFile={(f) => setFiles((s) => ({ ...s, id: f?.name }))}
          />
          <FileDrop
            label="Upload degree certificate"
            hint="PDF or image"
            fileName={files.degree}
            onFile={(f) => setFiles((s) => ({ ...s, degree: f?.name }))}
          />
          <FileDrop
            label="Upload profile photo"
            hint="JPG / PNG, square preferred"
            fileName={files.photo}
            onFile={(f) => setFiles((s) => ({ ...s, photo: f?.name }))}
          />
        </div>
      </section>

      <section>
        <SectionHeader step="05" title="Teaching style" desc="How you connect with students." />
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Languages you teach in" icon={Languages}>
            <ChipGroup
              options={LANGUAGES}
              values={languages}
              onToggle={(v) => toggle('languages', v)}
            />
          </Field>
          <Field label="Mode">
            <ChipGroup
              options={MODES}
              values={teachingModes}
              onToggle={(v) => toggle('teachingModes', v)}
            />
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="06" title="Availability" desc="When you are open to take doubts." />
        <div className="space-y-5">
          <Field label="Available timings" icon={Clock}>
            <ChipGroup
              options={TIME_SLOTS}
              values={availableTimeSlots}
              onToggle={(v) => toggle('availableTimeSlots', v)}
            />
          </Field>
          <Field label="Days available">
            <ChipGroup
              options={DAYS}
              values={availableDays}
              onToggle={(v) => toggle('availableDays', v)}
            />
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="07" title="Earnings setup" desc="How we will pay you out." />
        <div className="space-y-5">
          <Field label="Rate type" icon={Wallet}>
            <RadioGroup
              value={rateType}
              onValueChange={(v) =>
                setValue('rateType', v as TeacherRegisterFormValues['rateType'], {
                  shouldValidate: true,
                })
              }
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { v: 'per-question', l: 'Per question' },
                { v: 'per-minute', l: 'Per minute' },
              ].map((o) => (
                <label
                  key={o.v}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border cursor-pointer hover:border-foreground/40 transition"
                >
                  <RadioGroupItem value={o.v} />
                  <span className="text-sm">{o.l}</span>
                </label>
              ))}
            </RadioGroup>
          </Field>
          <div className="grid sm:grid-cols-3 gap-5">
            <Field
              label={
                rateType === 'per-question' ? 'Charge per question (INR)' : 'Rate per minute (INR)'
              }
            >
              <Input type="number" min={0} {...register('rate')} placeholder="50" />
            </Field>
            <Field label="UPI ID">
              <Input {...register('upiId')} placeholder="name@upi" />
            </Field>
            <Field label="Bank account (optional)">
              <Input {...register('bankDetails')} placeholder="A/C and IFSC" />
            </Field>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button type="button" variant="ghost" onClick={onBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" /> Change role
        </Button>
        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-elegant gap-2"
        >
          {isPending ? 'Submitting…' : 'Submit teacher application'}{' '}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default TeacherForm;
