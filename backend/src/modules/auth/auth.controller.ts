import { Request, Response, NextFunction } from "express";
import { authService } from "./auth.service";

export const authController = {
  async registerStudent(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.registerStudent(req.body);

      res.status(201).json({
        success: true,
        message: "Student registered successfully",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },

  async registerTeacher(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.registerTeacher(req.body);

      res.status(201).json({
        success: true,
        message: "Teacher registered successfully",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.login(req.body);
      res.status(200).json({
        success: true,
        message: "Login successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },
};
