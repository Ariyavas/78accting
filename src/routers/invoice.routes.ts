import express from "express"
import { API_invoice } from "../controllers/invoice.controller";

const router = express.Router();

router.get("/", API_invoice)

export = router;