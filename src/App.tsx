import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { MathProblem } from "./components/MathProblem";
import { UserInput } from "./components/UserInput";
import { StockData, EodStock } from "./types/stocks";
import { GetRandomStockCodeUS } from "./util/StockCodes";
import "bulma/css/bulma.min.css";

function App() {
  const [answer, setAnswer] = useState(false);
  const [num1, setNum1] = useState(6);
  const [num2, setNum2] = useState(3);
  const [companyName, setCompanyName] = useState("Apple");

  useEffect(() => {
    async function GetStockData() {
      const params = {
        access_key: process.env.REACT_APP_API_KEY,
        limit: 10,
        //symbols: GetRandomStockCodeUS()
      };
      //Start with ticker call to get 30 days
      const res = await axios.get(
        `http://api.marketstack.com/v1/tickers/${GetRandomStockCodeUS()}/eod`,
        { params }
      );

      let responseObject: StockData = res.data.data;
      console.log(
        "Stock" + responseObject.name + " " + responseObject.eod[1].close
      );
      setNum1(responseObject.eod[1].close);
      setNum2(responseObject.eod[4].close);
      setCompanyName(responseObject.name);
    }
    //Loads in data to start experience TODO re-enable this once UI ready
    //GetStockData();

    //Temp
    setNum1(150);
    setNum2(125);
    setCompanyName("Contso");
  }, []);

  //This function is to remind me how to call just the date EOD
  async function GetStockPriceOnDate(date: string) {
    let price: number = 5;
    date = "2022-03-14";
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
    };
    let dateTime = new Date();

    //Building the YYYY-MM-DD myself so I don't need an extra import like Moment
    let dateStr =
      dateTime.getFullYear() +
      "-" +
      dateTime.getMonth() +
      "-" +
      dateTime.getDay();

    //Start with ticker call to get 30 days
    const res = await axios.get(
      `https://api.marketstack.com/v1/eod/${date}?symbols=${GetRandomStockCodeUS()}`,
      { params }
    );

    let responseObject: EodStock[] = res.data.data;
    console.log("Stock" + responseObject[0].symbol);

    return price;
  }

  const inputHandler = (userInput: string) => {
    const userAnswer = +userInput;
    const actualAnswer = num1 - num2;

    if (actualAnswer === userAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }

    //Temp new values
    setNum1(Math.round(Math.random() * (100 - 1) + 1));
    setNum2(Math.round(Math.random() * (num1 - 1) + 1));
    setCompanyName("Contso");
  };

  return (
    <div className="App">
      <div className="rows">
        <div className="row" id="heading">
          <h2>Welcome to the stocks game</h2>
        </div>
        <div className="row" id="GameSection">
          <MathProblem num1={num1} num2={num2} companyName={companyName} />
          <UserInput onUserInput={inputHandler} />
          <div>Input {answer ? "Correct" : "Wrong"}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
