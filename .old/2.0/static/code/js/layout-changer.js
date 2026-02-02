let layoutChanger = document.getElementById("layoutChanger");
layoutChanger.style.position = "absolute";
layoutChanger.style.left = 0;
layoutChanger.style.top = 0;

Persistance();
layoutChanger.addEventListener("change", ChangeLayout);

function ChangeLayout() {
    //Primero limpia el estilo, luego se cambia el diseño
    switch (layoutChanger.value) {
        case "hacker":
            NoCSS();
            layoutChanger.addEventListener("change", HackerLayout());
            console.log("Hack the Matrix with this theme");
            layoutName = "hacker";
        break;
        case "bootstrap":
            NoCSS();
            layoutChanger.addEventListener("change", BootstrapLayout());
            console.log("The simple, the better, right?");
            layoutName = "bootstrap";
        break;
        case "css-hater":
            NoCSS();
            console.log("Why do you hate CSS, you monster? :<");
            layoutName = "css-hater";
        break;
        default:
            layoutName = "default";
            console.log("Ehmmm... ??????????????");
            break;
    }
    
    //Por último, recuerda el nombre del layout 
    localStorage.setItem("layoutName", layoutName);
}

function Persistance() {
    let layoutName = localStorage.getItem("layoutName");

    // -- Default Theme: Hacker Style --
    if (layoutName == "" || layoutName == null || layoutName == undefined) {
        layoutName = "hacker";
    }

    ChangeLayout();
}

function HackerLayout() {
    let style = "hacker";
    
    let link_1 = document.createElement("link");
    let link_2 = document.createElement("link");
    let link_3 = document.createElement("link");
    let link_4 = document.createElement("link");
    let link_5 = document.createElement("link");
    let link_6 = document.createElement("link");
    let link_7 = document.createElement("link");
    
    link_1.setAttribute("rel", "stylesheet");
    link_2.setAttribute("rel", "stylesheet");
    link_3.setAttribute("rel", "stylesheet");
    link_4.setAttribute("rel", "stylesheet");
    link_5.setAttribute("rel", "stylesheet");
    link_6.setAttribute("rel", "stylesheet");
    link_7.setAttribute("rel", "stylesheet");
    
    link_1.setAttribute("href", "/static/code/css/style/"+style+"/"+style+".css");
    link_2.setAttribute("href", "/static/code/css/style/"+style+"/cursors.css");
    link_3.setAttribute("href", "/static/code/css/style/"+style+"/header/header.css");
    link_4.setAttribute("href", "/static/code/css/style/"+style+"/main/main.css");
    link_5.setAttribute("href", "/static/code/css/style/"+style+"/main/section/section.css");
    link_6.setAttribute("href", "/static/code/css/style/"+style+"/main/aside/aside.css");
    link_7.setAttribute("href", "/static/code/css/style/"+style+"/footer/footer.css");
    
    document.head.appendChild(link_1);
    document.head.appendChild(link_2);
    document.head.appendChild(link_3);
    document.head.appendChild(link_4);
    document.head.appendChild(link_5);
    document.head.appendChild(link_6);
    document.head.appendChild(link_7);
}

function BootstrapLayout() {
    let link_1 = document.createElement("link");
    
    link_1.setAttribute("rel", "stylesheet");
    
    //Bootstrap Link 
    link_1.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
    link_1.setAttribute("integrity", "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH");
    link_1.setAttribute("crossorigin", "anonymous");
    
    document.head.appendChild(link_1);
    
    if (window.location.pathname.match("/Offline/Online/Gallery/My-Camera-Roll/index.html")){
        let link_2 = document.createElement("link");
        link_2.setAttribute("rel", "stylesheet");
        link_2.setAttribute("href", "/static/code/css/style/hacker/specific/gallery/gallery.css");
        document.head.appendChild(link_2);
    }
    
}

function NoCSS() {
    //Remove All The Links (CSS Tags)
    document.querySelectorAll("link").forEach((cssLink) => {
        cssLink.remove();
    });
}