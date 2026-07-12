import { z } from 'zod'

export const studentRegisterSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name too long'),

  email: z
    .string()
    .email('Invalid email address')
    .toLowerCase(),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number')
    .optional(),

  // Academic info
  class: z
    .string()
    .optional(),

  board: z
    .enum(['CBSE', 'ICSE', 'STATE_BOARD', 'IB', 'IGCSE', 'OTHER'])
    .optional(),

  school: z
    .string()
    .max(100)
    .optional(),

  city: z
    .string()
    .max(50)
    .optional(),

  state: z
    .string()
    .max(50)
    .optional(),

  preferredLanguage: z
    .string()
    .default('English'),

  subjectPreferences: z
    .array(z.string().min(1).max(50))
    .default([]),
})

export const teacherRegisterSchema = z.object({
  // Basic details
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name too long'),

  email: z
    .string()
    .email('Invalid email address')
    .toLowerCase(),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100),

  phone: z
    .string()
    .max(20)
    .optional(),

  // Professional info
  qualifications: z
    .string()
    .min(1, 'Qualification is required')
    .max(200),

  specializations: z
    .array(z.string().min(1).max(50))
    .default([]),

  experience: z
    .coerce.number()
    .int()
    .min(0, 'Experience cannot be negative')
    .max(70)
    .optional(),

  currentRole: z
    .string()
    .max(100)
    .optional(),

  // Teaching scope
  classes: z
    .array(z.string().min(1).max(50))
    .default([]),

  subjects: z
    .array(z.string().min(1).max(50))
    .default([]),

  boards: z
    .array(z.string().min(1).max(50))
    .default([]),

  // Teaching style
  languages: z
    .array(z.string().min(1).max(50))
    .default(['English']),

  teachingModes: z
    .array(z.string().min(1).max(50))
    .default([]),

  // Availability
  availableTimeSlots: z
    .array(z.string().min(1).max(50))
    .default([]),

  availableDays: z
    .array(z.string().min(1).max(20))
    .default([]),

  // Earnings setup
  rateType: z
    .enum(['PER_QUESTION', 'PER_MINUTE'])
    .default('PER_QUESTION'),

  sessionRate: z
    .coerce.number()
    .min(0, 'Rate cannot be negative')
    .optional(),

  upiId: z
    .string()
    .max(100)
    .optional(),

  bankDetails: z
    .string()
    .max(200)
    .optional(),

  // Verification documents (optional URLs — uploaded separately)
  govtIdType: z
    .string()
    .max(50)
    .optional(),

  govtIdUrl: z
    .string()
    .max(500)
    .optional(),

  degreeUrl: z
    .string()
    .max(500)
    .optional(),

  avatar: z
    .string()
    .max(500)
    .optional(),

  city: z
    .string()
    .max(50)
    .optional(),

  state: z
    .string()
    .max(50)
    .optional(),
})

export const loginSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .toLowerCase(),
  password: z
    .string()
    .min(1, 'Password is required'),
})

export type StudentRegisterInput = z.infer<typeof studentRegisterSchema>
export type TeacherRegisterInput = z.infer<typeof teacherRegisterSchema>
export type LoginInput = z.infer<typeof loginSchema>