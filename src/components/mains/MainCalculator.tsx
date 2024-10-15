import useCalculator from "./UseCalculator.tsx";
import InputField from "./interfaces/Input.tsx";
import ResultDisplay from "./interfaces/Output.tsx";
import OperationButtons from "./interfaces/Operations.tsx";

import styled from 'styled-components';

const CalcContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #FED8B1;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MainCalculator() {
    const {
        firstInput,
        secondInput,
        result,
        holdFirstInput,
        holdSecondInput,
        add,
        subtract,
        multiply,
        divide,
        power,
        clear,
    } = useCalculator();
    return (
        <CalcContainer>
            <InputField label="Enter first number:" value={firstInput} onChange={holdFirstInput}/>
            <InputField label="Enter second number:" value={secondInput} onChange={holdSecondInput}/>
            <OperationButtons onAdd={add}
                              onSubtract={subtract}
                              onMultiply={multiply}
                              onDivide={divide}
                              onPower={power}
                              onClear={clear}/>
            <ResultDisplay result={result}/>
        </CalcContainer>
    )
}