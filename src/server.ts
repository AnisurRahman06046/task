import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

async function start() {
  try {
    await mongoose.connect(config.database_uri as string);
    app.listen(config.port, () => {
      console.log(`Database is connected successfully!`);
      console.log(`server is running from ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
