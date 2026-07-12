import dotenv from "dotenv";
import type { Secret, SignOptions } from "jsonwebtoken";

dotenv.config();

type AppConfig = {
  port: number | string;
  nodeEnv: string;
  db: {
    url: string;
  };
  jwt: {
    secret: Secret;
    expiresIn: SignOptions["expiresIn"];
  };
  frontend: {
    url: string;
  };
};

export const config: AppConfig = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    url: process.env.DATABASE_URL!,
  },
  jwt: {
    secret: process.env.JWT_SECRET!,
    expiresIn: (process.env.JWT_EXPIRES_IN || "7d") as SignOptions["expiresIn"],
  },
  frontend: {
    // Browsers never send a trailing slash in Origin — normalize so CORS matches.
    url: (process.env.FRONTEND_URL || "http://localhost:3000").replace(/\/+$/, ""),
  },
};
