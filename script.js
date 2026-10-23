const ahora = new Date();
const hora = ahora.getHours();
const dia = ahora.getDay();
const estado = document.getElementById("estado");

if (dia !== 0 && hora >= 18 && hora < 22) {
    estado.textContent = "Estamos abiertos";
} else {
    estado.textContent = "Estamos cerrados";
}