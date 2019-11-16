const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('hello')
});

app.get('/login/:name', (req, res) => {
    return res.send(`Welcome, ${req.params.name}`);
})

app.get('/login', (req, res) => {
    return res.send(`Welcome, ${req.query.name  }`);
})

app.listen(3000)
