"use client";

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
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  BOARDS,
  CLASSES,
  DAYS,
  LANGUAGES,
  MODES,
  ROLES_TEACHER,
  SUBJECTS,
  TIME_SLOTS,
} from "@/lib/register-data";
import { ChipGroup, Field, FileDrop, SectionHeader } from "@/pages/register/components/register-form-elements";

const TeacherForm = ({ onBack }: { onBack: () => void }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    otp: "",
    email: "",
    password: "",
    qualification: "",
    specialization: [] as string[],
    experience: "",
    currentRole: "",
    classes: [] as string[],
    subjects: [] as string[],
    boards: [] as string[],
    languages: [] as string[],
    modes: [] as string[],
    timings: [] as string[],
    days: [] as string[],
    rateType: "per-question",
    rate: "",
    upi: "",
    bank: "",
  });
  const [files, setFiles] = useState<{ id?: string; degree?: string; photo?: string }>({});

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const toggle = (k: keyof typeof form, v: string) =>
    setForm((s) => {
      const arr = s[k] as string[];
      return {
        ...s,
        [k]: arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v],
      };
    });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.mobile) {
      toast({ title: "Missing fields", description: "Please complete the required basic details." });
      return;
    }
    toast({ title: "Application submitted", description: "Teacher profile created (UI demo)." });
    router.push("/");
  };

  return (
    <form onSubmit={submit} className="space-y-10">
      <section>
        <SectionHeader step="01" title="Basic details" desc="The essentials." />
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full name" icon={User} required>
            <Input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Dr. Priya Mehta" />
          </Field>
          <Field label="Mobile number" icon={Phone} required>
            <div className="flex gap-2">
              <Input value={form.mobile} onChange={(e) => set("mobile", e.target.value)} placeholder="+91 98765 43210" />
              <Input value={form.otp} onChange={(e) => set("otp", e.target.value)} placeholder="OTP" className="w-24" maxLength={6} />
            </div>
          </Field>
          <Field label="Email" icon={Mail} required>
            <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="teacher@doubtr.com" />
          </Field>
          <Field label="Password" icon={Lock} required>
            <Input type="password" value={form.password} onChange={(e) => set("password", e.target.value)} placeholder="Minimum 8 characters" />
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="02" title="Professional info" desc="Your background and credentials." />
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Highest qualification" icon={GraduationCap} required>
            <Input value={form.qualification} onChange={(e) => set("qualification", e.target.value)} placeholder="M.Sc. Physics, B.Ed." />
          </Field>
          <Field label="Experience (years)" icon={Briefcase} required>
            <Input type="number" min={0} value={form.experience} onChange={(e) => set("experience", e.target.value)} placeholder="5" />
          </Field>
          <Field label="Current role" icon={Briefcase} required>
            <Select value={form.currentRole} onValueChange={(v) => set("currentRole", v)}>
              <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
              <SelectContent>
                {ROLES_TEACHER.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Specialization (subjects)">
            <ChipGroup options={SUBJECTS} values={form.specialization} onToggle={(v) => toggle("specialization", v)} />
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="03" title="Teaching scope" desc="What and whom you can teach." />
        <div className="space-y-5">
          <Field label="Classes you can teach (6-12)">
            <ChipGroup options={CLASSES.map((c) => `Class ${c}`)} values={form.classes} onToggle={(v) => toggle("classes", v)} />
          </Field>
          <Field label="Subjects">
            <ChipGroup options={SUBJECTS} values={form.subjects} onToggle={(v) => toggle("subjects", v)} />
          </Field>
          <Field label="Boards you can handle">
            <ChipGroup options={BOARDS} values={form.boards} onToggle={(v) => toggle("boards", v)} />
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
            <ChipGroup options={LANGUAGES} values={form.languages} onToggle={(v) => toggle("languages", v)} />
          </Field>
          <Field label="Mode">
            <ChipGroup options={MODES} values={form.modes} onToggle={(v) => toggle("modes", v)} />
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="06" title="Availability" desc="When you are open to take doubts." />
        <div className="space-y-5">
          <Field label="Available timings" icon={Clock}>
            <ChipGroup options={TIME_SLOTS} values={form.timings} onToggle={(v) => toggle("timings", v)} />
          </Field>
          <Field label="Days available">
            <ChipGroup options={DAYS} values={form.days} onToggle={(v) => toggle("days", v)} />
          </Field>
        </div>
      </section>

      <section>
        <SectionHeader step="07" title="Earnings setup" desc="How we will pay you out." />
        <div className="space-y-5">
          <Field label="Rate type" icon={Wallet}>
            <RadioGroup
              value={form.rateType}
              onValueChange={(v) => set("rateType", v)}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { v: "per-question", l: "Per question" },
                { v: "per-minute", l: "Per minute" },
              ].map((o) => (
                <label key={o.v} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border cursor-pointer hover:border-foreground/40 transition">
                  <RadioGroupItem value={o.v} />
                  <span className="text-sm">{o.l}</span>
                </label>
              ))}
            </RadioGroup>
          </Field>
          <div className="grid sm:grid-cols-3 gap-5">
            <Field label={form.rateType === "per-question" ? "Charge per question (INR)" : "Rate per minute (INR)"}>
              <Input type="number" min={0} value={form.rate} onChange={(e) => set("rate", e.target.value)} placeholder="50" />
            </Field>
            <Field label="UPI ID">
              <Input value={form.upi} onChange={(e) => set("upi", e.target.value)} placeholder="name@upi" />
            </Field>
            <Field label="Bank account (optional)">
              <Input value={form.bank} onChange={(e) => set("bank", e.target.value)} placeholder="A/C and IFSC" />
            </Field>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button type="button" variant="ghost" onClick={onBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" /> Change role
        </Button>
        <Button type="submit" size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-elegant gap-2">
          Submit teacher application <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default TeacherForm;
