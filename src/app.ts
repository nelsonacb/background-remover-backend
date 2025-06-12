import express from "express";
import morgan from "morgan";
import cors from "cors";
import imageRoutes from "./routes/imageRoutes";
import { errorHandler } from "./utils/errorHandler";

const app = express();

app.use(morgan("combined"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(errorHandler);

app.use("/", imageRoutes);

export default app;
