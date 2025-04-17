import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(3000, () => {
    console.log("Server is Running...");
})

function generateUniqueRandomIntegers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(rand);
    }
    return Array.from(numbers);
}

app.get("/notifications", (req, res) => {
    const [network, jobs, messaging, notification] = generateUniqueRandomIntegers(4, 1, 10);
    res.json({
        "network": network,
        "jobs": jobs,
        "messaging": messaging,
        "notification": notification
    })
})