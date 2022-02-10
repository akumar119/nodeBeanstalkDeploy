const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the home page baby.')
})

app.listen(8080, () => {
    console.log(`server is running att port 8080>>>>`)
})