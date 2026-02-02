/* Cajita de Fotos*/
const cajita = document.getElementById("fotos");

imagesLoaded(cajita, () =>{
    new Masonry(cajita, {
        itemSelector: "img",
        columnWidth: 8,
        gutter: 6,
        fitWidth: true,
        transitionDuration: "0.4s"
    });
});