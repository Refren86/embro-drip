import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

import { appRouter } from "./routes";
import { createCtx } from "./context";

const app = express();

app.use(cors());
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: createCtx,
  })
);

app.listen(5000, () => {
  console.log("Started on 5000 port");
});

export type AppRouter = typeof appRouter;
