import mongoose from "mongoose";

const connection_url =
  "mongodb+srv://instagramclone:instagramclone@cluster0.0x9ex.mongodb.net/instagram-clone-db?retryWrites=true&w=majority";

export const database = () => {
  mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Mongoose default connection has occurred " + err + " error");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection is disconnected");
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        "Mongoose default connection is disconnected due to application termination"
      );
      process.exit(0);
    });
  });
};
