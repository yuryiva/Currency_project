export const faq = [
  {
    question: "How are the prices calculated for the various cryptocurrencies?",
    answer:
      "Please refer to the Market Data section of the methodology for detailed information on this topic.",
  },
  {
    question: `"Market Capitalization" and how is it calculated?`,
    answer:
      "Market Capitalization is one way to rank the relative size of a cryptocurrency. It is calculated by multiplying the Price by the Circulating Supply.Market Cap = Price X Circulating Supply.",
  },
  {
    question:
      'What is the difference between "Circulating Supply", "Total Supply", and "Max Supply"?',
    answer:
      "Circulating Supply is the best approximation of the number of coins that are circulating in the market and in the general publics hands. Total Supply is the total amount of coins in existence right now (minus any coins that have been verifiably burned). Max Supply is the best approximation of the maximum amount of coins that will ever exist in the lifetime of the cryptocurrency.",
  },
  {
    question:
      "Why is the Circulating Supply used in determining the market capitalization instead of Total Supply?",
    answer:
      "We have found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that cant affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing.",
  },
  {
    question:
      "Why are markets with no fees excluded from the price average and total trading volume?",
    answer: `When no fees are being charged at the exchange, it is possible for a trader (or bot) to trade back and forth with themselves and generate a lot of "fake" volume without penalty. It's impossible to determine how much of the volume is fake so we exclude it entirely from the calculations.`,
  },
  {
    question: "In what time zone is the site based?",
    answer:
      "Data is collected, recorded, and reported in UTC time unless otherwise specified.",
  },
  {
    question: "At what time is the 24 hour % change based?",
    answer: `It's based on the current time. It's a rolling 24 hour period.`,
  },
  {
    question:
      "Why does a question mark sometimes show up for the circulating supply and market cap of a cryptocurrency?",
    answer: `In order to ensure accurate market cap rankings, we work closely with teams and developers to verify supply details on their respective blockchains. If a question mark shows up, it means that we have not sufficiently verified the circulating supply and resulting market cap yet.`,
  },
];
