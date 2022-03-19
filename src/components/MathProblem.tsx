type MathProblemProps = {
  num1: number;
  num2: number;
  companyName: string;
};

export const MathProblem = (props: MathProblemProps) => {
  return (
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is--tablet" id="Left Group">
          <div className="columns is-centered">${props.num1}</div>
          <div className="columns is-centered">18 Mar 2022 EOD</div>
        </div>
        <div className="column is-4-tablet">
          <div className="columns is-centered">to</div>
        </div>
        <div className="column is-4-tablet" id="Right Group">
          <div className="columns is-centered">${props.num2}</div>
          <div className="columns is-centered">Last EOD</div>
        </div>
      </div>
    </div>
  );
};
