import { RecoilRoot, useRecoilValue } from "recoil"
import { todosAtomFamily } from "./store/atoms";
function App() {
  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={3} />
        <Todo id={2} />
      </RecoilRoot>
    </>
  )
}
export default App


function Todo({ id }) {
  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      <div>{todo.title}</div>
    </>
  )
}