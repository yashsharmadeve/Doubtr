-- CreateEnum
CREATE TYPE "RateType" AS ENUM ('PER_QUESTION', 'PER_MINUTE');

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "availableDays" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "availableTimeSlots" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "bankDetails" TEXT,
ADD COLUMN     "boards" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "classes" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "currentRole" TEXT,
ADD COLUMN     "rateType" "RateType" NOT NULL DEFAULT 'PER_QUESTION',
ADD COLUMN     "specializations" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "teachingModes" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "upiId" TEXT;
