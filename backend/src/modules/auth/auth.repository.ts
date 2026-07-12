import { prisma } from "../../lib/prisma";
import { StudentRegisterInput, TeacherRegisterInput } from "./auth.validation";

export const authRepository = {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      include: {
        student: true,
        teacher: true,
      },
    });
  },

  async findUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        student: true,
        teacher: true,
      },
    });
  },

  async createStudent(data: StudentRegisterInput, passwordHash: string) {
    // Use Prisma transaction to create User + Student together
    // If either fails, both are rolled back
    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          passwordHash,
          phone: data.phone,
          role: "STUDENT",
          provider: "EMAIL",
        },
      });

      const student = await tx.student.create({
        data: {
          userId: user.id,
          school: data.school,
          class: data.class,
          board: data.board,
          city: data.city,
          state: data.state,
          preferredLanguage: data.preferredLanguage,
          subjectPreferences: data.subjectPreferences,
        },
      });

      return { user, student };
    });
  },

  async createTeacher(data: TeacherRegisterInput, passwordHash: string) {
    // Create User + Teacher together inside a transaction
    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          passwordHash,
          phone: data.phone,
          avatar: data.avatar,
          role: "TEACHER",
          provider: "EMAIL",
        },
      });

      const teacher = await tx.teacher.create({
        data: {
          userId: user.id,
          qualifications: data.qualifications,
          specializations: data.specializations,
          experience: data.experience,
          currentRole: data.currentRole,
          subjects: data.subjects,
          classes: data.classes,
          boards: data.boards,
          languages: data.languages,
          teachingModes: data.teachingModes,
          availableTimeSlots: data.availableTimeSlots,
          availableDays: data.availableDays,
          rateType: data.rateType,
          ...(data.sessionRate !== undefined && {
            sessionRate: data.sessionRate,
          }),
          upiId: data.upiId,
          bankDetails: data.bankDetails,
          govtIdType: data.govtIdType,
          govtIdUrl: data.govtIdUrl,
          degreeUrl: data.degreeUrl,
          city: data.city,
          state: data.state,
        },
      });

      return { user, teacher };
    });
  },
};
