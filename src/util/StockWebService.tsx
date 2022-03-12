import axios from "axios";
import { StockData } from "../types/stocks";
import { GetRandomStockCodeUS } from "./StockCodes";

//Idea, company today to yesterday, a week ago, a month 

const GetStockData = async (): Promise<StockData> => {
  const params = {
    access_key: process.env.REACT_APP_API_KEY,
    limit: 10,
  };

  const res = await axios.get(
    `http://api.marketstack.com/v1/tickers/${GetRandomStockCodeUS()}/eod`,
    { params }
  );

  let responseObject: StockData = res.data.data;
  return new Promise<StockData>((resolve) => {
    resolve(responseObject);
  });
};

export default GetStockData;