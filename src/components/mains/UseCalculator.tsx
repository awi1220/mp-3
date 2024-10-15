import {useState} from "react";

const useCalculator = () => {
    const [firstInput, setFirstInput] = useState<string>('');
    const [secondInput, setSecondInput] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const holdFirstInput = (value: string) => setFirstInput(value);
    const holdSecondInput = (value: string) => setSecondInput(value);

    const add = () => setResult(Number(firstInput) + Number(secondInput));
    const subtract = () => setResult(Number(firstInput) - Number(secondInput));
    const multiply = () => setResult(Number(firstInput) * Number(secondInput));
    const divide = () => setResult(Number(firstInput) / Number(secondInput));
    const power = () => setResult(Number(firstInput) ** Number(secondInput));

    const clear = () => {
        setFirstInput('');
        setSecondInput('');
        setResult(null);
    };
    return {
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
    }
};
export default useCalculator;