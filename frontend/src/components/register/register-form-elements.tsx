"use client";

import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const SectionHeader = ({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc?: string;
}) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold shadow-glow">
      {step}
    </div>
    <div>
      <h3 className="font-serif text-2xl tracking-tight">{title}</h3>
      {desc && <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>}
    </div>
  </div>
);

export const Field = ({
  label,
  icon: Icon,
  children,
  required,
}: {
  label: string;
  icon?: ComponentType<{ className?: string }>;
  children: ReactNode;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <Label className="text-sm font-medium flex items-center gap-1.5">
      {Icon && <Icon className="h-3.5 w-3.5 text-muted-foreground" />}
      {label}
      {required && <span className="text-destructive">*</span>}
    </Label>
    {children}
  </div>
);

export const ChipGroup = ({
  options,
  values,
  onToggle,
}: {
  options: string[];
  values: string[];
  onToggle: (v: string) => void;
}) => (
  <div className="flex flex-wrap gap-2">
    {options.map((opt) => {
      const active = values.includes(opt);
      return (
        <button
          type="button"
          key={opt}
          onClick={() => onToggle(opt)}
          className={cn(
            "px-3.5 py-1.5 rounded-full text-sm border transition-all",
            active
              ? "bg-foreground text-background border-foreground shadow-soft"
              : "bg-background text-foreground border-border hover:border-foreground/40",
          )}
        >
          {active && <CheckCircle2 className="h-3 w-3 inline mr-1 -mt-0.5" />}
          {opt}
        </button>
      );
    })}
  </div>
);

export const FileDrop = ({
  label,
  hint,
  onFile,
  fileName,
}: {
  label: string;
  hint?: string;
  onFile: (f: File | null) => void;
  fileName?: string;
}) => (
  <label className="block cursor-pointer">
    <div className="border-2 border-dashed border-border rounded-xl p-5 hover:border-primary/50 hover:bg-muted/40 transition-all text-center">
      <Upload className="h-5 w-5 mx-auto text-muted-foreground mb-2" />
      <p className="text-sm font-medium">{fileName || label}</p>
      {hint && !fileName && (
        <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>
      )}
      {fileName && (
        <p className="text-xs text-primary mt-0.5 inline-flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" /> Uploaded
        </p>
      )}
    </div>
    <input
      type="file"
      className="hidden"
      onChange={(e) => onFile(e.target.files?.[0] || null)}
    />
  </label>
);

export const RoleCard = ({
  active,
  icon: Icon,
  title,
  desc,
  onClick,
  accent,
}: {
  active: boolean;
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  onClick: () => void;
  accent: string;
}) => (
  <motion.button
    type="button"
    onClick={onClick}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3, ease }}
    className={cn(
      "relative text-left p-7 rounded-2xl border-2 transition-all group overflow-hidden",
      active
        ? "border-foreground bg-foreground text-background shadow-elegant"
        : "border-border bg-card hover:border-foreground/30",
    )}
  >
    <div
      className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-40"
      style={{ background: accent }}
    />
    <div
      className={cn(
        "relative h-12 w-12 rounded-xl flex items-center justify-center mb-4",
        active ? "bg-background text-foreground" : "bg-muted text-foreground",
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="relative font-serif text-2xl tracking-tight mb-1">{title}</h3>
    <p
      className={cn(
        "relative text-sm",
        active ? "text-background/70" : "text-muted-foreground",
      )}
    >
      {desc}
    </p>
    {active && (
      <div className="relative mt-4 inline-flex items-center gap-1 text-xs font-medium">
        Selected <ArrowRight className="h-3 w-3" />
      </div>
    )}
  </motion.button>
);
