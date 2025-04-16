import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(1);
    const [valueToCalculate, setValueToCalculate] = useState(1);

    console.log("Component rendered");

    const expensiveValue = useMemo(() => {
        console.log("Calculating expensive value...");
        let fact = 1;
        for (let i = valueToCalculate; i > 1; i--) {
            fact *= i;
        }
        return fact;
    }, [valueToCalculate]);

    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <button onClick={() => setValueToCalculate(input)}>
                Calculate
            </button>
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}
