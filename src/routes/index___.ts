import express from "express";
import * as Auth from "../middlewares/auth";
import PingController from "../controllers/Ping";
import AuthController from "../controllers/AuthController";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.get("/auth", async (_req, res) => {
  //const response = await AuthController.message;
  return res.send("hiiiiiiiiiii");
});

router.get("/auth/login", async (_req, res) => {
  return res.send("wohoooooo");
});

export default router;
