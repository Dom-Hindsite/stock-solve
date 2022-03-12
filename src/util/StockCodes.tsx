export function GetRandomStockCodeUS() {
  const stockCodesUS = [
    "MSFT",
    "AAPL",
    "AMZN",
    "GOOG",
    "BABA",
    "FB",
    "BRK.B",
    "TSLA",
  ];

  const index = Math.floor(Math.random() * (stockCodesUS.length - 1));

  return stockCodesUS[index];
}
