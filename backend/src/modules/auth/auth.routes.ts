import { Router } from "express";
import { authController } from "./auth.controller";
import { validate } from "../../middleware/validate.middleware";
import {
  loginSchema,
  studentRegisterSchema,
  teacherRegisterSchema,
} from "./auth.validation";

const router = Router();

// POST /auth/student/register
router.post(
  "/student/register",
  validate(studentRegisterSchema),
  authController.registerStudent,
);

// POST /auth/teacher/register
router.post(
  "/teacher/register",
  validate(teacherRegisterSchema),
  authController.registerTeacher,
);

router.post("/login", validate(loginSchema), authController.login);

export default router;
