const horaApertura = 18;
const horaCierre = 22;
const diaCerrado = 0;

const ahora = new Date();
const hora = ahora.getHours();
const dia = ahora.getDay();
const estado = document.getElementById("estado");

if (dia !== diaCerrado && hora >= horaApertura && hora < horaCierre) {
    estado.textContent = "Estamos abiertos";
} else {
    estado.textContent = "Estamos cerrados";
}