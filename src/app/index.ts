import express from "express";
import type { Express } from "express";

function createExpressApplication(): Express {
    const app = express();
    app.use(express.json());

    //middlewares

    //routes
    app.get("/", (req, res) => {
        return res.json({ message: "The app is working fine" });
    });

    return app;
}

export default createExpressApplication;
