import { IsNumber, isNumber } from "class-validator";
import React, { useRef } from "react";

type UserInputProps = {
  onUserInput: (userText: string) => void;
};

export const UserInput = (props: UserInputProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onUserInput(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="input-text">What is the answer? </label>
        <input type="text" id="input-text" ref={textInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
