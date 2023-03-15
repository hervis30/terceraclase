const express = require('express');
const bodyParser = require('body-parser');
const port = '2000';

const app = express();

// analizar la aplicación/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extendido: false }))

//Endpont -Rutas
app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname })
})

//desestructurar el objeto del req.body

app.post('/addprod', (req, res) => {
    const { ref, desc } = req.body
    res.send(`Producto enviado correctamente con descrupcion: ${desc} y referencia: ${ref}`)

})

app.listen(port, () => console.log(`Server in http://localhost:${port}`));