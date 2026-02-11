const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


let events = [];


app.get('/', (req, res) => {
    res.send("Welcome to ACM-W Event API");
});

app.get('/events', (req, res) => {
    res.json(events);
});

app.post('/events', (req, res) => {
    const event = req.body;
    if (!event || !event.name) {
        return res.status(400).json({ message: "Event must have a name" });
    }
    events.push(event);
    res.json({ message: "Event added successfully", event });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

