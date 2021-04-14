require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', function(req, res) {
    res.json('Hello World')
});


app.get('/usuario', function(req, res) {
    res.json('Hello usuarios')
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        })
    }

    res.json({
        usuario: body
    })
});

app.put('/usuario/:id', function(req, res) {

    let id_usuario = req.params.id;

    res.json({
        id_usuario
    });
});

app.delete('/usuario', function(req, res) {
    res.json('Hello delete usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', 3000);
});