import React, { useState } from "react";
import "./App.css";
import { MathProblem } from "./components/MathProblem";
import { UserInput } from "./components/UserInput";

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
  };

  return (
    <div className="App">
      <MathProblem num1={num1} num2={num2} />
      <UserInput onUserInput={inputHandler} />
      <div>Input {answer ? "Correct" : "Wrong"}</div>
    </div>
  );
}

export default App;
