export interface StudentProfile {
  id: string;
  class: string | null;
  board: string | null;
  school: string | null;
  city: string | null;
  preferredLanguage: string;
  subjectPreferences: string[];
}

export interface TeacherProfile {
  id: string;
  subjects: string[];
  isOnline: boolean;
  verificationStatus: 'PENDING' | 'UNDER_REVIEW' | 'VERIFIED' | 'REJECTED';
  rating: number;
  totalSessions: number;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'STUDENT' | 'TEACHER' | 'ADMIN';
  avatar: string | null;
  redirectTo: string;
  profile: StudentProfile | TeacherProfile | null;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface StudentRegisterInput {
  name: string;
  email: string;
  password: string;
  phone: string;
  class: string;
  board: 'CBSE' | 'ICSE' | 'STATE_BOARD' | undefined;
  school: string;
  city: string;
  state: string;
  preferredLanguage: string;
  subjectPreferences?: string[];
}

export interface TeacherRegisterInput {
  name: string;
  email: string;
  password: string;
  phone?: string;
  qualifications: string;
  specializations?: string[];
  experience?: number;
  currentRole?: string;
  classes?: string[];
  subjects?: string[];
  boards?: string[];
  languages?: string[];
  teachingModes?: string[];
  availableTimeSlots?: string[];
  availableDays?: string[];
  rateType?: 'PER_QUESTION' | 'PER_MINUTE';
  sessionRate?: number;
  upiId?: string;
  bankDetails?: string;
  govtIdType?: string;
  govtIdUrl?: string;
  degreeUrl?: string;
  avatar?: string;
  city?: string;
  state?: string;
}
