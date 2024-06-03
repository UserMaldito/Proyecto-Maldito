let img = document.querySelector("#profile-user");
if (img) {
    img.addEventListener("click", function(e) {
        ChangePhoto(img);
    });

}

function ChangePhoto(imgNode){
    const arrayPhotos = [
        "/static/data/img/about/him/user-0.png",
        "/static/data/img/about/him/user-1.jpeg",
        "/static/data/img/about/him/user-2.jpeg",
        "/static/data/img/about/him/user-3.jpeg"
    ];
    let actualNumber = 0;

    let index = 0;
    while (index < arrayPhotos.length) {
        if (imgNode.src.includes(arrayPhotos[index])) {
            index++;
            actualNumber = index;

            index = arrayPhotos.length; //to break the loop
        }

        index++;
    }

    if (actualNumber >= arrayPhotos.length) {
        actualNumber = 0;
    }

    imgNode.src = arrayPhotos[actualNumber];
}