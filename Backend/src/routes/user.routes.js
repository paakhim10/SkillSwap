import { Router } from "express";
import { UserDetails } from "../controllers/user.controllers.js";
import { verifyJWT_email, verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";
import {
  UnRegisteredUserDetails,
  saveRegUnRegisteredUser,
  saveEduUnRegisteredUser,
  saveAddUnRegisteredUser,
  registerUser,
} from "../controllers/user.controllers.js";

const router = Router();

router.route("/registered/getDetails").get(verifyJWT_username, UserDetails);
router.route("/unregistered/getDetails").get(verifyJWT_email, UnRegisteredUserDetails);
router.route("/unregistered/saveRegDetails").post(saveRegUnRegisteredUser);
router.route("/unregistered/saveEduDetail").post(saveEduUnRegisteredUser);
router.route("/unregistered/saveAddDetail").post(saveAddUnRegisteredUser);
router.route("/registerUser").post(registerUser);

export default router;
