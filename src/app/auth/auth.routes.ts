import express from "express";
import type { Router } from "express";
import AuthenticationController from "./auth.controller.ts";
import { authenticationMiddleware, restrictToAuthenticatedUser } from "./auth.middleware.ts";

export const authRouter: Router = express.Router();

const authenticationController = new AuthenticationController();

authRouter.post("/sign-up", authenticationController.handleSignup.bind(authenticationController));
authRouter.post("/sign-in", authenticationController.handleSignin.bind(authenticationController));

authRouter.get("/me", restrictToAuthenticatedUser(), authenticationController.handleMe.bind(authenticationController));
