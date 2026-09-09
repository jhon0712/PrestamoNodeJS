function calcularCuota(prestamo, meses, interes) {

    const cuota = prestamo * (
        (Math.pow(1 + interes, meses) * interes) /
        (Math.pow(1 + interes, meses) - 1)
    );

    return cuota;
}

module.exports = {
    calcularCuota
};