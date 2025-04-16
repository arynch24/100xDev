import React, { use, useState, useContext } from 'react';
import { CounterContext } from './Context';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{ count, setCount }}>
        <Counter />
      </CounterContext.Provider>
    </>
  )
}

export default App


function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <div>Counter : {count}</div>
      <Increment />
      <Decrement />
    </div>
  )
}


function Increment() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increment</button>
    </>
  )
}

function Decrement() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrement</button>
    </>
  )
}