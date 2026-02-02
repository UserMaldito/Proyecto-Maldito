//No creo que tenga que explicar esta funcion
function AgregarCeros(numero){
    let nuevoNumero = "0";
    if (numero < 9) {
        nuevoNumero += numero;
        return nuevoNumero;
    }
    
    return numero;
}

//Espero que esta tampoco necesite explicación o.0
function ObtenerTiempo(){
    let tiempo = "";

    //Lista con todos los meses -> Listas: empiezan en 0 -> el Data.getMonth() empieza (el mes de Enero) en 0
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    let fechaLargaActual = new Date();  //-> el Date().now te devuelve milésimas de segundos... Mejor no usarlo por ahora...
    let fechaActual = `${AgregarCeros(fechaLargaActual.getDate())}/${meses[fechaLargaActual.getMonth()]}/${fechaLargaActual.getFullYear()}`;
    let horaActual = `${AgregarCeros(fechaLargaActual.getHours())} : ${AgregarCeros(fechaLargaActual.getMinutes())}`;
    tiempo = fechaActual + " - " + horaActual;

    return tiempo;
}

//Localizo y pongo los datos
let zonaHoraria = document.getElementById("fecha-hora");
zonaHoraria.textContent = `${ObtenerTiempo()}`;

//Cada 30 segundos
setInterval(() => zonaHoraria.textContent = `${ObtenerTiempo()}`, 30000);

