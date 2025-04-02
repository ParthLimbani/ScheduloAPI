import { config } from "dotenv";

config();

export const appConfig = {
    mongoUrl: process.env.MONGO_URL ?? "",
    jwtSecret: process.env.JWT_SECRET ?? "",
};