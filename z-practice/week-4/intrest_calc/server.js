const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Allow all origins (for dev only)

// OR to allow specific origin
// app.use(cors({ origin: 'http://localhost:5500' }));

app.listen(3000, () => {
    console.log("Server is Running...");
})

app.get('/interest', (req, res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.json({
        interest: interest,
        total: total
    });
});