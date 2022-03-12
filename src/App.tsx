import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { MathProblem } from "./components/MathProblem";
import { UserInput } from "./components/UserInput";
import { StockData } from "./types/stocks";
import { GetRandomStockCodeUS } from "./util/StockCodes";

function App() {
  
  const [answer, setAnswer] = useState(false);
  const [num1, setNum1] = useState(6);
  const [num2, setNum2] = useState(3);
  const [companyName, setCompanyName] = useState('Apple');

  
  useEffect(() => {
    async function GetStockData() {
      const params = {
        access_key: process.env.REACT_APP_API_KEY,
        limit: 10,
      };
  
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
    GetStockData();
  }, []);
  
  const inputHandler = (userInput: string) => {
    const userAnswer = +userInput;
    const actualAnswer = num1 - num2;

    if (actualAnswer === userAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  

  return (
    <div className="App">
      <MathProblem num1={num1} num2={num2} companyName={companyName} />
      <UserInput onUserInput={inputHandler} />
      <div>Input {answer ? "Correct" : "Wrong"}</div>
    </div>
  );
}

export default App;
