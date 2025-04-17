import { RecoilRoot } from 'recoil';
import Nav from './components/Nav';
function App() {

  return (
    <>
      <RecoilRoot>
       <Nav/>
      </RecoilRoot>
    </>
  )
}

export default App


// function Counter() {
//   //only the component in which state changes will re -render
//   const count = useRecoilValue(countAtom);

//   return (
//     <div>
//       <div>Counter : {count}</div>
//       <EvenValue />
//       <Increment />
//       <Decrement />
//     </div>
//   )
// }

// function EvenValue() {
//   const isEven = useRecoilValue(isEvenSelector)
//   return <>
//     {isEven ? "It's a Even Number" : null}
//   </>
// }

// function Increment() {
//   const setCount = useSetRecoilState(countAtom);
//   return (
//     <>
//       <button onClick={() => {
//         setCount(c => c + 1);
//       }}>Increment</button>
//     </>
//   )
// }

// function Decrement() {
//   const [count, setCount] = useRecoilState(countAtom);
//   return (
//     <>
//       <button onClick={() => {
//         setCount(count - 1);
//       }}>Decrement</button>
//     </>
//   )
// }

