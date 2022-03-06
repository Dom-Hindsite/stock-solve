type MathProblemProps = {
  num1: number;
  num2: number;
};

export const MathProblem = (props: MathProblemProps) => {
 

  return (
    <div>
      <label id="label-num1" >{props.num1} - </label>
      <label id="label-num2">{props.num2}</label>
    </div>
  );
};
