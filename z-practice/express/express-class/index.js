const express =require('express');

const app =express();

app.listen(3000,()=>{
    console.log("Server is running..");
})

function square(n){
    return n*n;
}

app.get("/",(req,res)=>{
    const r = square(req.query.n);
    res.send(r);
})