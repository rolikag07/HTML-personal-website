const express  = require('express');
const path = require('path')

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/static/Index.html"));
});

app.get('/hobbies', (req, res) => {
    res.sendFile(path.join(__dirname + "/static/hobbies.html"));
});

app.get('/ContactMe', (req, res) => {
    res.sendFile(path.join(__dirname + "/static/ContactMe.html"));
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});