import axios from "axios";
import { useState } from "react";
import "./App.css";
import { MathProblem } from "./components/MathProblem";
import { UserInput } from "./components/UserInput";
import { StockData } from "./types/stocks";

function App() {
  const [answer, setAnswer] = useState(false);

  const num1 = Math.floor(Math.random() * (100 - 1) + 1);
  const num2 = Math.floor(Math.random() * (num1 - 1) + 1);

  const inputHandler = (userInput: string) => {
    const userAnswer = +userInput;
    const actualAnswer = num1 - num2;

    if (actualAnswer === userAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
    getRequest();
  };

  async function getRequest() {
    const params = {
      access_key: "e319844a23823cad7cb8ff75c16b3da8",
      limit: 10,
    };

    const res = await axios.get(
      "http://api.marketstack.com/v1/tickers/aapl/eod",
      { params }
    );

    let responseObject: StockData = res.data.data;
    console.log(
      "Received data for stock " +
        responseObject.symbol +
        responseObject.eod.length
    );
    return responseObject.symbol;
  }

  return (
    <div className="App">
      <MathProblem num1={num1} num2={num2} />
      <UserInput onUserInput={inputHandler} />
      <div>Input {answer ? "Correct" : "Wrong"}</div>
    </div>
  );
}

export default App;
