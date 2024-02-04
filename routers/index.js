import express from "express";
import { Chat, GenerateContent } from "../controllers";

const router = express.Router();

router.post("/tilebot/chat", Chat);
router.post("/tilebot/generate", GenerateContent);

export { router as apiRouters };
