import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/mongo.js";
import carRouter from "./routes/car-router.js";
import swaggerMiddleware from "middlewares/swagger-middleware.js";

dotenv.config();
console.log(process.env.MONGO_URL);
connect();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", carRouter);

app.use("/", ...swaggerMiddleware);

app.listen(process.env.Port || 3000);
