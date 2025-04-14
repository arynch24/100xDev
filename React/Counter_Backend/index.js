const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const { todo } = require('./db')

app.use(express.json());

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Invalid todo body"
        })
    }
    else {
        todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
            .then(() => {
                res.json({
                    msg: "Todo created successfully."
                })
            })
    }
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    console.log(todos)
    res.json({
        todos
    })
})

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Invalid todo body"
        })
    }
    else {
        todo.updateOne({
         _id:req.body.id
        },{
           completed:true
        })
        .then(()=>{
            res.json({
                message:"Todo marked as completed."
            })
        })
    }
})

app.listen(3000,()=>{
    console.log("Server is Running...")
})