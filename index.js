const express = require('express');
const bodyParser = require('body-parser');
const port = '2000';

const app = express();

//Endpont
app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname })
})

app.post('/addprod', (req, res) => {
    res.send("Producto enviado correctamente");
})

app.listen(port, () => console.log(`Server in http://localhost:${port}`))