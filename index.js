// index.js
const http = require('http');
const url = require('url');
const Prestamo = require('./prestamo');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    let resultadoSalida = "";

    if (pathname === '/calcular' && query.nombre) {
        const miPrestamo = new Prestamo(query.nombre, query.prestamo, query.meses, query.interes);
        resultadoSalida = miPrestamo.obtenerResultadoFormateado();
    }

    res.writeHead(200);
    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Cálculo de Préstamo - POO</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; }
                input, button { margin-bottom: 10px; padding: 5px; }
                textarea { font-family: monospace; }
            </style>
        </head>
        <body>
            <h2>Cálculo de Cuota Mensual de Préstamo</h2>
            <form action="/calcular" method="GET">
                <label>Nombre del solicitante:</label><br>
                <input type="text" name="nombre" value="${query.nombre || ''}" required><br>
            
                <label>Monto del préstamo ($):</label><br>
                <input type="number" step="any" name="prestamo" value="${query.prestamo || ''}" required><br>

                <label>Número de meses (n):</label><br>
                <input type="number" name="meses" value="${query.meses || ''}" required><br>

                <label>Tasa de interés i (ej. 0.15):</label><br>
                <input type="number" step="any" name="interes" value="${query.interes || ''}" required><br><br>

                <button type="submit">Calcular Cuota</button>
            </form>

            <br>
            <label><strong>Resultado:</strong></label><br>
            <textarea rows="4" cols="70" readonly>${resultadoSalida}</textarea>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});