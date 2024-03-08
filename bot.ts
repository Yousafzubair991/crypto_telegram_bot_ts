import express, { Request, Response } from "express";

import TelegramBot from "node-telegram-bot-api";
import { initializeBot } from "./handlers";

require("dotenv").config();

const token = process.env.bot_token;
const bot = new TelegramBot(token!, { polling: true });
bot.setWebHook("https://b090-86-99-138-86.ngrok-free.app/bot" + token);
initializeBot(bot);
const app = express();

// Allow requests from any origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Define route to check Home
app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>Telegram bot</h1>`);
});

// Start Express server
app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
