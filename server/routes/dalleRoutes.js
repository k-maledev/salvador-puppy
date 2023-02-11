import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const dalleResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });

    const imageUrl = dalleResponse.data.data[0].url;

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.response.data.error.message);
  }
});

export default router;
