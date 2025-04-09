const express = require('express');
const app = express();

app.use(express.json());

function userAuthenticationMiddleware(req, res, next) {
    if (req.body.name === "Aryan") {
        next();
    } else {
        res.send("Invalid User Get Away.");
    }
}

app.post("/health-checkup", userAuthenticationMiddleware, (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your kidney length is " + kidneyLength);
});

app.listen(3000, () => {
    console.log("Server is Running...");
});
