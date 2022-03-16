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
      <div className="columns">
        <div className="column">
          <label htmlFor="input-text">What is the answer? </label>
          <input
            className="input is-primary"
            type="text"
            id="input-text"
            ref={textInputRef}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
