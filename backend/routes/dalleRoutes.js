import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.send("Hello from dall-e");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      model: "gpt-image-1",
    });

    const image = response.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('DALL-E request failed:', error);

    const message =
      error?.error?.message ??
      error?.response?.data?.error?.message ??
      error?.message ??
      'Something went wrong generating the image';

    res.status(error?.status ?? 500).json({ success: false, message });
  }
});

export default router;
