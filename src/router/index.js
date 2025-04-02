import { Router } from "express";
import userRouter from "./user/user.router.js" 
import professorRouter from './professor/professor.router.js'
import studentRouter from "./student/student.router.js";


const router = Router();

router.use("/user", userRouter);
router.use("/professor", professorRouter);
router.use("/student", studentRouter);

export default router;