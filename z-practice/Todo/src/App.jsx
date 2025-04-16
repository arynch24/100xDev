import React, { use, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [sum, setSum] = useState(0);

  const handleClickSum = () => {
    const sum = useMemo(() => {
      let sum = 0;
      for (let i = 1; i <= inputValue; i++) {
        sum += i;
      }
      return sum;
    }, [inputValue]);

    setSum(sum);
  }

  return (
    <>
      <input type="number" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
      <div>Sum from 1 to {inputValue} is: {sum} </div>

      <button onClick={() => {
        setCount(count + 1);
        handleClickSum();
      }}>Counter ({count})</button>
    </>
  )
}

export default App
