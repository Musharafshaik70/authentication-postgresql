import JWT from "jsonwebtoken";

export type UserTokenPayload = {
    id: string;
};

export function createUserToken(payload: UserTokenPayload) {
    const token = JWT.sign(payload, process.env.JWT_SECRET!);
    return token;
}

export function verifyUserToken(token: string) {
    try {
        return JWT.verify(token, process.env.JWT_SECRET!) as UserTokenPayload;
    } catch (error) {
        return null;
    }
}
