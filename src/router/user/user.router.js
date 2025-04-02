import { Router } from "express";
import { userController } from "../../module/user/user.controller.js";
import verifyUserRole from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/signup", userController.userSignUp);

router.post("/login", userController.userLogin);

router.post("/cancelBooking/:id", verifyUserRole(["professor", "student"]), userController.userCancelBooking);

export default router;