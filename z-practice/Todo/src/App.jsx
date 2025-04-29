import React, { use, useState, useContext, useEffect } from 'react';
import { CounterContext } from './Context';

function App() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState("kuch nhi hai");
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("http://localhost:3000/user", {
        method: "GET",
        credentials: "include", // <-- Correct place to put withCredentials
      });
      const data = await res.json(); // <-- await this
      setUser(data.id); // assuming your API returns { id: ... }
    };

    fetchUser();
  }, []);

  return (
    <>
      {/* <CounterContext.Provider value={{ count, setCount }}>
        <Counter />
      </CounterContext.Provider> */}
      <div>
        User ID: {user}
      </div>

      <a href="http://localhost:5173/user">Link to users</a>

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