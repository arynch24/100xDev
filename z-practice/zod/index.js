const express =require('express');
const app =express();

app.listen(3000,()=>{
    console.log("Server is Running...");
})

const zod= require('zod');
const schema =zod.object(
    {
        email:zod.string(),
        password:zod.string(),
        country:zod.literal("IN"),
        kidneys:zod.array(zod.number())
    }
)

app.use(express.json());

app.post("/",(req,res)=>{
    const reqBody = req.body;
    const response = schema.safeParse(reqBody);

    if(!response.success){
        res.status(411).send("Input body is invalid");
    }

    res.send({
        response
    })
})
