import React, { useState } from "react";
import "./App.css";
import { UserInput } from "./components/UserInput";
import { UserOutput } from "./components/UserOutput";

function App() {

  const num1 = Math.floor(Math.random() * (100 - 1) + 1);
  const num2 = Math.floor(Math.random() * (num1 - 1) + 1);

  console.log(num1 + ' ' + num2);

  const [userMsg, setUserMsg] = useState('Hello');

  const inputHandler = (text: string) => {
   setUserMsg(text);    
  };
 
  return (
    <div className="App">
      <UserInput onUserInput={inputHandler} />
      {/* <UserOutput userResponse={"Can remove this prop"} /> */}
      <div>Hello {userMsg}</div>
    </div>
  );
}

export default App;
