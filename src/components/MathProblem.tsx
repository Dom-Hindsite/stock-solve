type MathProblemProps = {
  num1: number;
  num2: number;
  companyName: string;
};

export const MathProblem = (props: MathProblemProps) => {
 

  return (
    <div>
      <h3 id="header-company">{props.companyName}</h3>
      <label id="label-num1" >${props.num1} - </label>
      <label id="label-num2">${props.num2}</label>
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">My Todo List</h1>
          </div>
          <div className="column">
            <h1 className="title">My Todo List</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
