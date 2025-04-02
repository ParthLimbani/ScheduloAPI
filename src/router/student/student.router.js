import { Router } from "express";
import { studentController } from "../../module/student/student.controller.js";
import verfiyUserRole from "../../middleware/auth.middleware.js";


const router = Router();

router.get("/viewAvailability/:id", verfiyUserRole(["student"]) ,studentController.viewAvailability);

router.post("/bookAppointments/:id", verfiyUserRole(["student"]) ,studentController.bookAppointments);

export default router;