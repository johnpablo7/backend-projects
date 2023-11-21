import express, { type Express } from "express";
import { adminRouter } from "./routes/admin";
import { storeRouter } from "./routes/store";

const app: Express = express();

/* MIDDLEWARES */
app.use(express.json({ limit: "5mb" }));

// ROUTES
app.use("/api/v1/admin", adminRouter);

app.use("/api/v1/store", storeRouter);

export default app;
