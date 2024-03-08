import axios from "axios";

interface ICryptoPrice {
  currency: string;
  chatId?: number;
}

interface IResponse {
  data: {
    [key: string]: {
      usd: number;
    };
  };
}

interface IError {
  response: {
    data: {
      error: string;
    };
  };
}

export const getCurrencyPrice = ({ currency, chatId }: ICryptoPrice) => {
  return axios
    .get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=usd`
    )
    .then((response: IResponse) => {
      const value = response.data[currency]?.usd;
      return value !== undefined
        ? `The price of ${
            currency.charAt(0).toUpperCase() + currency.slice(1)
          } is $${value}`
        : `Sorry, couldn't fetch the price for ${currency}. Please try again later.`;
    })
    .catch((error: IError) => {
      console.error(error);
      return `Sorry, couldn't fetch the price for ${currency}. Please try again later.`;
    });
};
