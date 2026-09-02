// Prestamo.js
class Prestamo {
    constructor(nombre, prestamo, meses, interes) {
        this.nombre = nombre;
        this.prestamo = parseFloat(prestamo);
        this.meses = parseInt(meses);
        this.interes = parseFloat(interes);
    }

    
    calcularCuota() {
        const p = this.prestamo;
        const n = this.meses;
        const i = this.interes;

        // Fórmula: C = (P * i * (1 + i)^n) / ((1 + i)^n - 1)
        const factor = Math.pow(1 + i, n);
        const cuota = (p * i * factor) / (factor - 1);
        return cuota;
    }

    
    obtenerResultadoFormateado() {
        const cuota = this.calcularCuota().toFixed(2);
        const prestamoFormat = this.prestamo.toFixed(2);
        const porcentajeInteres = (this.interes * 100).toFixed(2);

        return `${this.nombre} – $ ${cuota} -- $ ${prestamoFormat} -- ${this.meses} meses -- interés ${porcentajeInteres}%`;
    }
}

module.exports = Prestamo; 