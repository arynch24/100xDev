import { useEffect, useState } from 'react'
import './App.css'
import Todos from './components/Todos';

function App() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      })
  }


  //Empty dependencing means it would only execute once when the component renders.
  useEffect(() => {
    fetchTodos();
  }, [])

  const handleButton = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: desc
      })
    }).then((res) => res.json())
      .then((data) => {
        console.log("Todo added:", data);
      })
      .catch((err) => console.error("Error:", err));

    fetchTodos();
    setDesc("");
    setTitle("");
  };

  return (
    <>
      <h1>Todo Application</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter title of todo...' />
      <br />
      <br />
      <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Enter desc of todo...' />
      <br></br>
      <br></br>
      <button onClick={handleButton}>Add Task</button>
      <Todos todos={todos} refreshTodos={fetchTodos}/>
    </>
  )
}

export default App
