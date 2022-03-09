import axios from "axios";
import { useEffect, useState } from "react";
import { FetchState } from "../types/requests";

// export const getQuote = async (symbol: string): Promise<Quote> => {

//   const response = axios.get("https://finnhub.io/api/v1/quote", {
//     searchParams: { symbol },
//     responseType: "json",
//     headers: {
//       "X-Finnhub-Token": 'c8i3q8qad3iearbu2fhg',
//     },
//   });
//   return response.body as Quote;
// };

export function useStockSymbol() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [posts, setPosts] = useState<Array<Quote>>([]);
  
  useEffect()
  
  const getPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const res = await axios.get<Quote>(
        "https://finnhub.io/api/v1/search?q=MSFT",
        {
          responseType: "json",
          headers: {
            "X-Finnhub-Token": "c8i3q8qad3iearbu2fhg",
          },
        }
      );

      const resData = res.data;

      //setPosts(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };
}

type Quote = {
  /**
   * Opening price
   */
  o: number;
  /**
   * High
   */
  h: number;
  /**
   * Low
   */
  l: number;
  /**
   * Current price
   */
  c: number;
  /**
   * Previous close
   */
  pc: number;
  /**
   * Timestamp
   */
  t: number;
};
