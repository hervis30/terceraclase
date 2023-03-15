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
    //res.send(`Producto enviado correctamente con descrupcion: ${desc} y referencia: ${ref}`)
    res.json(req.body)
})

app.get('/login/:username', (req, res, next) => {
    if (req.params.username == "pcana") {
        res.send(`Bienvenido ${req.params.username}`)
        next();
    }
    else {
        next(new Error("Usuario Invalido..."))
    }
})

app.listen(port, () => console.log(`Server in http://localhost:${port}`));