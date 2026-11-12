import express from "express";
import { setUserController, LoginController, getAllUsersController } from "../controller/user.controller.js";
import { validateUser } from "../middleware/validateUser.js";

const router = express.Router();

router.post("/register", setUserController);
router.post("/login", LoginController);
router.get("/getallusers", validateUser, getAllUsersController);

export default router;
