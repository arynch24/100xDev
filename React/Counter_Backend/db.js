const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://arynch24:acuPBrkfuQK3BgPe@cluster-100xdev.6ifyamk.mongodb.net/todoApp');

const todoSchema =mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports ={
    todo
}