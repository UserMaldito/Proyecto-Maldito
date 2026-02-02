const paginas = {
    0:   { path: "/3.0/C/User-Maldito/index.html", titulo: "Pág. Principal"},
    100: { path: "/3.0/C/User-Maldito/personal/index.html", titulo: "Personal / Pág. Principal"},
    101: { path: "/3.0/C/User-Maldito/personal/acerca_de.html", titulo: "Personal / Acerca De"},
    102: { path: "/3.0/C/User-Maldito/personal/diario.html", titulo: "Personal / Diario de User"},
    103: { path: "/3.0/C/User-Maldito/personal/galeria.html", titulo: "Personal / Galería"},
    104: { path: "/3.0/C/User-Maldito/personal/templo.html", titulo: "Personal / Dedicatorias"},
    200: { path: "/3.0/C/User-Maldito/arte/index.html", titulo: "Arte / Pág. Principal"},
    201: { path: "/3.0/C/User-Maldito/arte/lirica.html", titulo: "Arte / Lírica" }
};

// Ir a Pagina
const inputPagina = document.getElementById("ir-a-página-por-número");
inputPagina.addEventListener("input", () => {
    if ((inputPagina.value.length === 3)) {
        let valor = inputPagina.value;
        if (inputPagina.value === "000"){
            valor = 0;
        }
        if (paginas[valor]) {
            inputPagina.style.backgroundColor = "darkgreen";
            inputPagina.style.color = "lightgreen";
            setTimeout(() => {
                RestablecerFondoPaginaNumero();
                window.location.href = paginas[valor].path;
            }, 1250);
        } else {
            console.error("Error: Página no Encontrada...");
            inputPagina.style.backgroundColor = "darkred";
            inputPagina.style.color = "yellow";
            setTimeout(() => {
                RestablecerFondoPaginaNumero();
                inputPagina.focus();
            }, 1250);
        }
    }
});

function RestablecerFondoPaginaNumero(){
    inputPagina.value = "";
    inputPagina.style.color = "cyan";
    inputPagina.style.backgroundColor = "transparent";
}


//3.0/Camino de Migas -> Caminito

function ObtenerInfoPaginaActual() {
    const rutaActual = window.location.pathname;
    let rutaInfo = null;

    for (const numero in paginas) {
        if (paginas[numero].path === rutaActual) {
            rutaInfo = { numero, titulo: paginas[numero].titulo };
        }
    }

    return rutaInfo
}


const paginaInfo = document.getElementById("página-actual");
const caminoPagina = document.getElementById("página-migas-de-pan");
const paginaActualInfo = ObtenerInfoPaginaActual();

if (paginaActualInfo) {
    paginaInfo.textContent = `Página ${paginaActualInfo.numero}`;
    caminoPagina.textContent = `C:/ ${paginaActualInfo.titulo}`;
}


