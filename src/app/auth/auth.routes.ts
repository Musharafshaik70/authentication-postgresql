import express from "express";
import type { Router } from "express";
import AuthenticationController from "./auth.controller.ts";

export const router: Router = express.Router();

const authenticationController = new AuthenticationController();

router.post("/sign-up", authenticationController.handleSignup.bind(authenticationController));
