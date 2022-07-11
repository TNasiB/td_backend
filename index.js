import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(process.env.APP_PORT, () =>
      console.log(`SERVER START ON PORT ${process.env.APP_PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
}
await startApp();
