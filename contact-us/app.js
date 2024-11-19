import express from "express";
import { router as contactRoutes } from "./routes/contact.route.js";
import { router as userRoutes } from "../user-profile/routes/user.route.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// middlewares
app.use(express.json());
app.use(express.static("public"));

// routes
app.use("/contact", contactRoutes);
app.use("/user", userRoutes);

export { app };
