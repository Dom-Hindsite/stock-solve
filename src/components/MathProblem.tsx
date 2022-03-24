type MathProblemProps = {
  firstVal: number;
  eodDate: string;
  lastEodVal: number;
  companyName: string;
};

export const MathProblem = (props: MathProblemProps) => {
  return (
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is--tablet" id="Left Group">
          <div className="columns is-centered">${props.firstVal}</div>
          <div className="columns is-centered">{props.eodDate}</div>
        </div>
        <div className="column is-4-tablet">
          <div className="columns is-centered">to</div>
        </div>
        <div className="column is-4-tablet" id="Right Group">
          <div className="columns is-centered">${props.lastEodVal}</div>
          <div className="columns is-centered">Last EOD</div>
        </div>
      </div>
    </div>
  );
};
