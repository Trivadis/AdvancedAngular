import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./src/routes.ts";

const port = 8280;
const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(`--- Listening on: ${secure ? "https://" : "http://"}${
        hostname ?? "localhost"
        }:${port} ---`
    );

    console.log(`--> You can now navigate to http://localhost:8280/employees`);
});
await app.listen({ port });