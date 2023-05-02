import express from "express"
import { API_CreacteUser } from "../controllers/user.controller";

const router = express.Router();

router.post("/", API_CreacteUser)

export = router;