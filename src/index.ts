import http from "node:http";
import createExpressApplication from "./app/index.ts";

async function main() {
    try {
        const server = http.createServer(createExpressApplication());
        const PORT: number = 8000;
        server.listen(PORT, () => {
            console.log(`The server is running on ${PORT}`);
        });
    } catch (err) {
        console.log("Server Failed to start", err);
    }
}

main();
