const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname });
});

app.post('/', (req, res) => {
    console.log(req);
    res.send('Hey there');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
