const express = require('express');
const cors = require('cors');
const misFunciones = require('./scripts/utils');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/prestamo', (req, res) => {

    const nombre = req.body.nombre;
    const prestamo = req.body.prestamo;
    const meses = req.body.meses;
    const interes = req.body.interes;

    const cuota = misFunciones.calcularCuota(
        prestamo,
        meses,
        interes
    );

    const resultado = {
        nombre: nombre,
        cuota: cuota,
        prestamo: prestamo,
        meses: meses,
        interes: interes
    };

    console.log(resultado);

    res.json(resultado);
});

app.listen(port, () => {
    console.log('Estoy ejecutandome en http://localhost:' + port);
});