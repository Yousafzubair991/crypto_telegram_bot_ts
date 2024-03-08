# TRX Bot - Telegram Bot for Cryptocurrency Information

TRX Bot is a Telegram bot designed to provide users with cryptocurrency-related information such as cryptocurrency prices, basic bot commands, and contact details of the creator.

## Features

- **Welcome Message**: Upon starting a conversation with the bot, users receive a welcome message.
- **Basic Commands**: The bot supports basic commands such as `/hi`, `/bye`, `/help`, `/about`, `/contact`, and `/location`.
- **Cryptocurrency Price**: Users can request the price of a specific cryptocurrency using the `/price` command followed by the name of the cryptocurrency.
- **Help Command**: Users can use the `/help` command to get a list of available commands.

## Getting Started

To use TRX Bot, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**: Make sure you have Node.js installed on your machine. Then, navigate to the project directory and run the following command to install dependencies:

    ```bash
    npm install
    ```

3. **Configure Environment Variables**: Create a `.env` file in the root directory of the project and add the following environment variables:

    ```plaintext
    TELEGRAM_TOKEN=<YOUR_TELEGRAM_BOT_TOKEN>
    ```

    Replace `<YOUR_TELEGRAM_BOT_TOKEN>` with your actual Telegram Bot token obtained from the BotFather.

4. **Run the Bot**: After configuring the environment variables, run the following command to start the bot:

    ```bash
    npm start
    ```

5. **Interact with the Bot**: Start a conversation with the bot on Telegram and use the available commands to interact with it.

## Usage

Once the bot is up and running, users can interact with it through the following commands:

- `/hi`: Greets the user with a hello message.
- `/bye`: Sends a goodbye message.
- `/help`: Displays a list of available commands.
- `/about`: Provides information about the creator of the bot.
- `/contact`: Displays the contact email of the bot creator.
- `/location`: Shares a predefined location.
- `/price <cryptocurrency>`: Retrieves the current price of the specified cryptocurrency.

## Contributors

- **Yousaf Z.** - Creator of TRX Bot

## Support

For any inquiries or support regarding TRX Bot, please contact the creator via email: trxbot@telegramtest.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
