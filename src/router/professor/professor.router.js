import { Router } from "express";
import { professorController } from "../../module/professor/professor.controller.js";
import verfiyUserRole from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/createAvailability", verfiyUserRole(["professor"]) ,professorController.createAvailability);

export default router;