import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("Salvador Puppy 서버입니다.");
});

app.listen(8080, () => {
  console.log("서버가 시작되었습니다.\nhttps://localhost:8080");
});
