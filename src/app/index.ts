import express from "express";
import type { Express } from "express";
import { authRouter } from "./auth/auth.routes.ts";
import { authenticationMiddleware } from "./auth/auth.middleware.ts";

function createExpressApplication(): Express {
    const app = express();

    app.use(express.json());
    app.use(authenticationMiddleware());

    app.get("/", (req, res) => {
        return res.json({ message: "The app is working fine" });
    });

    app.use("/auth", authRouter);

    return app;
}

export default createExpressApplication;
