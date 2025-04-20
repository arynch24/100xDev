import { useState, useEffect } from 'react';

function App() {

  // const [render, setRender] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRender(true);
  //   }, 5000);
  // }, []);
 
  return (
    <>
      {/* {render ? <MyComponent /> : <p>Unmounted</p>} */}
      <MyComponent />
    </>
  )
}

export default App


function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count changed:', count);
    return () => {
      console.log('Component unmounted or count changed:', count);
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
