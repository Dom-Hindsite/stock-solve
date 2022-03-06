import React, { useState } from "react";
import "./App.css";
import { MathProblem } from "./components/MathProblem";
import { UserInput } from "./components/UserInput";
import { UserOutput } from "./components/UserOutput";

function App() {
  const [userMsg, setUserMsg] = useState("Hello");
  const [answer, setAnswer] = useState(false);

  const num1 = Math.floor(Math.random() * (100 - 1) + 1);
  const num2 = Math.floor(Math.random() * (num1 - 1) + 1);

  const inputHandler = (text: string) => {
    setUserMsg(text);

    //If num 1 - num2 = 'text' then update answer to true

    //Else set to false

    setAnswer(true);
  };

  return (
    <div className="App">
      <MathProblem num1={num1} num2={num2} />
      <UserInput onUserInput={inputHandler} />
      {/* <UserOutput userResponse={"Can remove this prop"} /> */}
      <div>Input {answer ? "Correct" : "Wrong"}</div>
    </div>
  );
}

export default App;
