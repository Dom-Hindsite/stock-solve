import React from "react";
import "./App.css"; 
import { UserInput } from "./components/UserInput";
import { UserOutput } from "./components/UserOutput";

function App() {
  const inputHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App"> 
      <UserInput onUserInput={inputHandler} />
      <UserOutput />
    </div>
  );
}

export default App;
