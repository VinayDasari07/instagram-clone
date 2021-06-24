import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Pusher from "pusher";
import { router } from "./route.js";

//app config
const app = express();
const port = process.env.PORT || 5001;

//middlewares
app.use(express.json());
app.use(cors());

//api routes
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listeng to ${port}`);
});
