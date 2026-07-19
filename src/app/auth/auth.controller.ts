import type { Request, Response } from "express";
import { signupPayloadModel } from "./auth.model.ts";

export default class AuthenticationController {
    public async handleSignup(req: Request, res: Response) {
        const validationResult = await signupPayloadModel.safeParseAsync(req.body);
        if (validationResult.error)
            return res.json(400).json({ message: "body validation failed", error: validationResult.error });
    }
}
