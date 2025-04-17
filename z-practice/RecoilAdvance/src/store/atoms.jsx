import { atomFamily } from 'recoil';
import { todos } from '../components/todos';

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id =>{
        return todos.find((todo)=>todo.id===id);
    }
})