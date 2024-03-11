const DOM = {
    layoutSelect: null,
    allLinksCss: null
}

function ChangeGalleryLayout(){
    let selectedTheme = DOM.layoutSelect.options[DOM.layoutSelect.selectedIndex].value;
    let layoutName = VerifingGalleryLayout(selectedTheme);

    localStorage.setItem("layoutGalleryName", layoutName);
}

function VerifingGalleryLayout(galleryLayout){
    DOM.allLinksCss = document.querySelectorAll("link");
    let newLayoutName = "";

    switch (galleryLayout) {
        case "css_hater":
            NoCSS();
            console.log("Why? I mean... Why?");
            newLayoutName = "css_hater";
            break;

        case "gallery_retro":
            NoCSS();
            BootstrapCSS();
            HackerGalleryCSS();
            console.log("STOP HACKING ME! I'M SCARED!! PLS, I'LL DO ANYTHING!!!");
            newLayoutName = "gallery_retro";
            break;

        case "BootStrap_Only":
            NoCSS();
            BootstrapCSS();
            console.log("The Simpler, The Better");
            newLayoutName = "BootStrap_Only";
            break;
    }

    return newLayoutName;
}

function NoCSS() {
    //Remove All The Links (CSS Tags)
    DOM.allLinksCss.forEach((cssLink) => {
        cssLink.remove();
    });
}

function HackerGalleryCSS() {
    let link_1 = document.createElement("link");
    let link_2 = document.createElement("link");
    let link_3 = document.createElement("link");
    let link_4 = document.createElement("link");
    let link_5 = document.createElement("link");
    let link_6 = document.createElement("link");


    link_1.setAttribute("rel", "stylesheet");
    link_2.setAttribute("rel", "stylesheet");
    link_3.setAttribute("rel", "stylesheet");
    link_4.setAttribute("rel", "stylesheet");
    link_5.setAttribute("rel", "stylesheet");
    link_6.setAttribute("rel", "stylesheet");


    link_1.setAttribute("href", "/css/retro/retro.css");
    link_2.setAttribute("href", "/css/retro/font/font.css");
    link_3.setAttribute("href", "/css/retro/header/header.css");
    link_4.setAttribute("href", "/css/retro/footer/footer.css");
    link_5.setAttribute("href", "/css/retro/cursor/cursor.css");
    link_6.setAttribute("href", "/css/retro/gallery/gallery.css");

    document.head.appendChild(link_1);
    document.head.appendChild(link_2);
    document.head.appendChild(link_3);
    document.head.appendChild(link_4);
    document.head.appendChild(link_5);
    document.head.appendChild(link_6);
}

function BootstrapCSS(){
    let link_1 = document.createElement("link");
    let link_2 = document.createElement("link");

    link_1.setAttribute("rel", "stylesheet");
    link_2.setAttribute("rel", "stylesheet");

    //Bootstrap Link 
    link_1.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
    link_1.setAttribute("integrity", "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN");
    link_1.setAttribute("crossorigin", "anonymous");
    link_2.setAttribute("href", "/css/retro/gallery/gallery.css");

    document.head.appendChild(link_1);
    document.head.appendChild(link_2);

}

window.onload = () => {
    //Definition of all the Elements of the Web
    DOM.layoutSelect = document.getElementById("galleryLayout");
    DOM.allLinksCss = document.querySelectorAll("link");

    //Listening Events
    DOM.layoutSelect.addEventListener("change", ChangeGalleryLayout);

    //Set items
    let localLayout = localStorage.getItem("layoutGalleryName");
    if ((localLayout == null) || (localLayout == "")) {
        VerifingGalleryLayout("gallery_retro");
        localStorage.setItem("layoutGalleryName", "gallery_retro");
    }
    else{
        VerifingGalleryLayout(localLayout);
    }
};