import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

import { appRouter } from "./routes";
import { createCtx } from "./context";

dotenv.config();

const app = express();

app.use(cors());
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: createCtx,
  })
);

app.listen(5000, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Server listen on " + 5000);
  } catch (err) {
    const error = err as { message: string };
    console.log("Error starting server >", error.message);
  }
});

export type AppRouter = typeof appRouter;
