import React, { useState, useEffect } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500ms debounce

  useEffect(() => {
    if (debouncedValue) {
      console.log('API call with:', debouncedValue); // Simulate API call
    }
  }, [debouncedValue]);
  
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default App;

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};


// function useOnline(){
//   const [online,setOnline] =useState(window.navigator.onLine);

//   useEffect(()=>{
//     window.addEventListener('online',()=>setOnline(true));
//     window.addEventListener('offline',()=>setOnline(false));
//   },[])

//   return online;
// }


// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Component mounted or count changed:', count);
//     return () => {
//       console.log('Component unmounted or count changed:', count);
//     };
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
