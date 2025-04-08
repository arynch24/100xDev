const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server is running...");
})

const users = [{
    name: "Aryan Chauhan",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.get("/", (req, res) => {
    const numberKidneys = users[0].kidneys.length;
    const allKidneys = users[0].kidneys;

    const healthyKidneys = allKidneys.filter(k => k.healthy);
    const numberHealthyKidneys = healthyKidneys.length;

    res.json({
        numberKidneys,
        allKidneys,
        numberHealthyKidneys
    })
});

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use(express.json());

app.post("/", (req, res) => {
    users[0].kidneys.push({ healthy: req.body.health });

    const kidneyHealth = users[0].kidneys;

    res.json({
        kidneyHealth
    })
})

app.put("/", (req, res) => {

    const allKidneys = users[0].kidneys;
    allKidneys.forEach((kid) => {
        kid.healthy = true;
    })

    res.json({
        allKidneys
    })
})

app.delete("/", (req, res) => {
    const allKidneys = users[0].kidneys;
    const newKidneys = [];
    let unhealthyKidneys = 0;

    allKidneys.forEach((kid) => {
        if (kid.healthy) {
            newKidneys.push({
                healthy: true
            })
        }
        else {
            unhealthyKidneys++;
        }

    })

    users[0].kidneys = newKidneys;

    if (unhealthyKidneys<=0) {
        res.status(411).json({
            msg: "You have no bad kidneys."
        })
    }
    else {
        res.json({
            newKidneys
        })
    }
})

console.log(users[0]);