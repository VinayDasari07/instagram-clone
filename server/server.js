import express from "express";
import cors from "cors";
import { router } from "./route.js";
import { UserDetailModel } from "./models/UserDetailModel.js";
import { database } from "./databaseConnection.js";

//app config
const app = express();
const port = process.env.PORT || 5001;

//DB config
database();

// console.log(process.env);

//middlewares
app.use(express.json());
app.use(cors());

//api routes
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listeng to ${port}`);
});
