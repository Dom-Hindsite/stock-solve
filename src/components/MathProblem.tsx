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
    </div>
  );
};
