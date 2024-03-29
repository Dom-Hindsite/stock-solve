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
    <div className="container mb-5">
      <div className="columns mt-2 is-centered">
        <div className="column is-3">
          <div className="control is-centered">
            <form onSubmit={submitHandler}>
              <div className="columns">
                <div className="control">
                  <input
                    className="input is-primary"
                    type="number"
                    step="0.1"
                    id="input-text"
                    placeholder="% 1 decimal place"
                    ref={textInputRef}
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
