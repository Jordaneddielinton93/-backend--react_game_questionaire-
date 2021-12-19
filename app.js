import express from "express";
import cors from "cors"
import Router from "./Routes/usersAndScores.js";



let app = express();

app.use(express.json());
app.use(cors());
app.use("/scores",Router)

export default app