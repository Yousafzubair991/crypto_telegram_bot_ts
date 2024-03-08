import TelegramBot, { Message } from "node-telegram-bot-api";

import { getCurrencyPrice } from "../services/cryptoService";

interface ICommandHandlers {
  [key: string]: (chatId: number, message?: string) => void;
}

export const initializeBot = (bot: TelegramBot) => {
  const email = "trxbot@telegramtest.com";

  const commandHandlers: ICommandHandlers = {
    "/start": (chatId) => {
      bot.sendMessage(
        chatId,
        "Welcome to the TRX bot! Please select a cryptocurrency to get its price:",
        {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Bitcoin", callback_data: "bitcoin" },
                { text: "Ethereum", callback_data: "ethereum" },
                { text: "Litecoin", callback_data: "litecoin" },
              ],
            ],
          },
        }
      );
    },
    "/hi": (chatId) => bot.sendMessage(chatId, "Hello there!"),
    "/bye": (chatId) => bot.sendMessage(chatId, "Goodbye!"),
    "/help": (chatId) => sendHelpMessage(chatId),
    "/about": (chatId) =>
      bot.sendMessage(chatId, "This bot was created by Yousaf Z."),
    "/contact": (chatId) =>
      bot.sendMessage(chatId, `You can contact me at my email: ${email}`),
    "/location": (chatId) => bot.sendLocation(chatId, 37.422, -122.084),
    "/price": (chatId, coin) => {
      if (!coin) {
        bot.sendMessage(
          chatId,
          "Please specify a cryptocurrency. For example, /price <coin_name>"
        );
        return;
      }
      getCurrencyPrice({ currency: coin, chatId }).then((message) =>
        bot.sendMessage(chatId, message)
      );
    },
  };

  bot.on("callback_query", (query) => {
    const chatId = query?.message?.chat.id ?? 0;
    const coin = query?.data ?? "";
    getCurrencyPrice({ currency: coin, chatId }).then((message) =>
      bot.sendMessage(chatId, message)
    );
  });

  bot.on("message", (msg: Message) => {
    const chatId = msg?.chat.id;
    const messageText = msg?.text;
    console.log("Message received: ", messageText);

    const [command, ...args] = (messageText ?? "").split(" ");

    const handler = commandHandlers[command.toLowerCase()] || fallbackHandler;

    if (handler) {
      handler(chatId, args.join(" "));
    }
  });

  const sendHelpMessage = (chatId: number) => {
    const commands = Object.keys(commandHandlers).join("\n");
    bot.sendMessage(chatId, `Available commands:\n${commands}`);
  };

  const fallbackHandler = (chatId: number) =>
    bot.sendMessage(
      chatId,
      "Sorry, I don't understand that command. Type /help to see available commands."
    );
};
