const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the home page baby.')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is running att port 8080>>>>`)
})