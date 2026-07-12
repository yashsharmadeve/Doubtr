import bcrypt from "bcryptjs";
import { authRepository } from "./auth.repository";
import { signToken } from "../../lib/jwt";
import { AppError } from "../../middleware/error.middleware";
import {
  LoginInput,
  StudentRegisterInput,
  TeacherRegisterInput,
} from "./auth.validation";

export const authService = {
  async registerStudent(data: StudentRegisterInput) {
    // 1. Check if email already exists
    const existing = await authRepository.findUserByEmail(data.email);
    if (existing) {
      throw new AppError("Email already registered", 409);
    }

    // 2. Hash password
    const passwordHash = await bcrypt.hash(data.password, 12);

    // 3. Create user + student in DB
    const { user, student } = await authRepository.createStudent(
      data,
      passwordHash,
    );

    // 4. Generate JWT
    const token = signToken({
      userId: user.id,
      role: user.role,
      email: user.email,
    });

    // 5. Return response (never return passwordHash)
    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        student: {
          id: student.id,
          class: student.class,
          board: student.board,
          school: student.school,
          city: student.city,
          preferredLanguage: student.preferredLanguage,
          subjectPreferences: student.subjectPreferences,
        },
      },
    };
  },

  async registerTeacher(data: TeacherRegisterInput) {
    // 1. Check if email already exists
    const existing = await authRepository.findUserByEmail(data.email);
    if (existing) {
      throw new AppError("Email already registered", 409);
    }

    // 2. Hash password
    const passwordHash = await bcrypt.hash(data.password, 12);

    // 3. Create user + teacher in DB
    const { user, teacher } = await authRepository.createTeacher(
      data,
      passwordHash,
    );

    // 4. Generate JWT
    const token = signToken({
      userId: user.id,
      role: user.role,
      email: user.email,
    });

    // 5. Return response (never return passwordHash)
    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        redirectTo: "/dashboard/teacher",
        teacher: {
          id: teacher.id,
          subjects: teacher.subjects,
          specializations: teacher.specializations,
          classes: teacher.classes,
          boards: teacher.boards,
          languages: teacher.languages,
          teachingModes: teacher.teachingModes,
          qualifications: teacher.qualifications,
          experience: teacher.experience,
          currentRole: teacher.currentRole,
          rateType: teacher.rateType,
          sessionRate: teacher.sessionRate,
          verificationStatus: teacher.verificationStatus,
          isOnline: teacher.isOnline,
        },
      },
    };
  },

  // Single login for both student and teacher
  async login(data: LoginInput) {
    // 1. Find user by email
    const user = await authRepository.findUserByEmail(data.email);

    // 2. User not found — use generic message (security best practice)
    if (!user) {
      throw new AppError("Invalid email or password", 401);
    }

    // 3. Check if account is active
    if (!user.isActive) {
      throw new AppError(
        "Your account has been deactivated. Please contact support.",
        403,
      );
    }

    // 4. OAuth users trying to login with password
    if (!user.passwordHash) {
      throw new AppError(
        "This account uses Google or Apple sign-in. Please use that instead.",
        400,
      );
    }

    // 5. Verify password
    const isPasswordValid = await bcrypt.compare(
      data.password,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new AppError("Invalid email or password", 401);
    }

    // 6. Generate JWT
    const token = signToken({
      userId: user.id,
      role: user.role,
      email: user.email,
    });

    // 7. Build response based on role
    const baseUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    };

    // Student login
    if (user.role === "STUDENT") {
      return {
        token,
        user: {
          ...baseUser,
          redirectTo: "/dashboard/student",
          profile: user.student
            ? {
                id: user.student.id,
                class: user.student.class,
                board: user.student.board,
                school: user.student.school,
                city: user.student.city,
                preferredLanguage: user.student.preferredLanguage,
                subjectPreferences: user.student.subjectPreferences,
              }
            : null,
        },
      };
    }

    // Teacher login
    if (user.role === "TEACHER") {
      return {
        token,
        user: {
          ...baseUser,
          redirectTo: "/dashboard/teacher",
          profile: user.teacher
            ? {
                id: user.teacher.id,
                subjects: user.teacher.subjects,
                isOnline: user.teacher.isOnline,
                verificationStatus: user.teacher.verificationStatus,
                rating: user.teacher.rating,
                totalSessions: user.teacher.totalSessions,
              }
            : null,
        },
      };
    }

    // if (user.role === "ADMIN") {
    //   return {
    //     token,
    //     user: {
    //       ...baseUser,
    //       redirectTo: "/admin/dashboard",
    //       profile: null,
    //     },
    //   };
    // }

    throw new AppError("Unknown role", 400);
  },
};
