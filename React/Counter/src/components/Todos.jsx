const Todos = ({ todos,refreshTodos }) => {
    function handleCompleteTask(id) {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        })
        .then(() => {
            console.log(`Task Id Completed: ${id}`);
            refreshTodos();
        })
        .catch((err) => {
            console.error("Failed to mark as completed", err);
        });
    }

    return (
        <div>
            {todos?.map((todo, index) => (
                <div key={index}>
                    <p>{todo.title}</p>
                    <p>{todo.description}</p>
                    <button onClick={() => handleCompleteTask(todo._id)}>
                        {todo.completed ? "Done" : "Mark as Done"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Todos;
