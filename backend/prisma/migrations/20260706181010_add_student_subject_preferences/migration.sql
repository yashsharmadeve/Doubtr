-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "subjectPreferences" TEXT[] DEFAULT ARRAY[]::TEXT[];
