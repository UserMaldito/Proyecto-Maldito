const DOM = {
    layoutSelect: null,
    // selectedOption: document.getElementById("changingLayout"),
    allLinksCss: null,


}

function ChangeLayout(){
    let selectedTheme = DOM.layoutSelect.options[DOM.layoutSelect.selectedIndex].value;
    let layoutName = VerifingNewLayout(selectedTheme);
    localStorage.setItem("layoutName", layoutName);
}

function VerifingNewLayout(newLayout){
    //Refreshing the definition (of all the links) [necessary]
    DOM.allLinksCss = document.querySelectorAll("link");

    let newLayoutName = "";

    switch (newLayout) {
        case "nothing":
            newLayoutName = "nothing";            
            break;

        case "default":
            NoCSS();
            BootstrapCSS();
            console.log("Default Default Default Default Default :)");
            newLayoutName = "default";
            break;

        case "css_hater":
            NoCSS();
            console.log("CSS Hater Spotted");
            newLayoutName = "css_hater";
            break;

        case "retro":
            NoCSS();
            let message = "Please, don't hack me. I'll do anything, but don't hurt me TnT";
            let isCSSMobile = (window.navigator.userAgent.indexOf("Mobile") != -1);

            if (isCSSMobile) {
                message = "Oh, I see...";
                //Music
                let musicPlayer = document.querySelector("iframe");
                // musicPlayer.width = "90%";
                musicPlayer.height= "152px";
            }
            HackerCSS("hacker");

            console.log(message);
            newLayoutName = "retro";
            break;

        //Gallery Layout

        case "gallery_retro":
            NoCSS();
            BootstrapCSS();
            HackerGalleryCSS();
            console.log("STOP HACKING ME! I'M SCARED!! PLS, I'LL DO ANYTHING!!!");
            newLayoutName = "gallery_retro";
            break;


        default:
            newLayoutName = "trolling"; //do the barrel roll? idk
            console.log("So funny touching the code I made, right? C:");
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

//Not Done
function DefaultCSS() {
    //I Create The Element Link and Attach them the Relative Path 
    let link_1 = document.createElement("link");
    let link_2 = document.createElement("link");
    // let link_3 = document.createElement("link");
    let link_4 = document.createElement("link");
    let link_5 = document.createElement("link");

    link_1.setAttribute("rel", "stylesheet");
    link_2.setAttribute("rel", "stylesheet");
    // link_3.setAttribute("rel", "stylesheet");
    link_4.setAttribute("rel", "stylesheet");
    link_5.setAttribute("rel", "stylesheet");

    link_1.setAttribute("href", "/css/generic/generic.css");
    link_2.setAttribute("href", "/css/generic/header/header.css");
    // link_3.setAttribute("href", "/css/generic/fonts/Yulong.css");
    link_4.setAttribute("href", "/css/generic/main/main.css");
    link_5.setAttribute("href", "/css/generic/cursor/cursor.css");

    document.head.appendChild(link_1);
    document.head.appendChild(link_2);
    // document.head.appendChild(link_3);
    document.head.appendChild(link_4);
    document.head.appendChild(link_5);
}

function HackerCSS(folder) {
    //I Create The Element Link and Attach them with a the Relative Path 
    let link_1 = document.createElement("link");
    let link_2 = document.createElement("link");
    let link_3 = document.createElement("link");
    let link_4 = document.createElement("link");
    let link_5 = document.createElement("link");
    let link_6 = document.createElement("link");
    let link_7 = document.createElement("link");
    let link_8 = document.createElement("link");
    let link_9 = document.createElement("link");

    link_1.setAttribute("rel", "stylesheet");
    link_2.setAttribute("rel", "stylesheet");
    link_3.setAttribute("rel", "stylesheet");
    link_4.setAttribute("rel", "stylesheet");
    link_5.setAttribute("rel", "stylesheet");
    link_6.setAttribute("rel", "stylesheet");
    link_7.setAttribute("rel", "stylesheet");
    link_8.setAttribute("rel", "stylesheet");
    link_9.setAttribute("rel", "stylesheet");

    link_1.setAttribute("href", "/css/"+folder + "//"+ folder +".css");
    link_2.setAttribute("href", "/css/"+folder+"/font/font.css");
    link_3.setAttribute("href", "/css/"+folder+"/header/header.css");
    link_4.setAttribute("href", "/css/"+folder+"/main/main.css");
    link_5.setAttribute("href", "/css/"+folder+"/footer/footer.css");
    link_6.setAttribute("href", "/css/"+folder+"/cursor/cursor.css");
    link_7.setAttribute("href", "/css/"+folder+"/images.css");
    link_8.setAttribute("href", "/css/"+folder+"/main/aside/aside.css");
    link_9.setAttribute("href", "/css/"+folder+"/main/section/section.css");

    document.head.appendChild(link_1);
    document.head.appendChild(link_2);
    document.head.appendChild(link_3);
    document.head.appendChild(link_4);
    document.head.appendChild(link_5);
    document.head.appendChild(link_6);
    document.head.appendChild(link_7);
    document.head.appendChild(link_8);
    document.head.appendChild(link_9);
}

function BootstrapCSS(){
    let link_1 = document.createElement("link");

    link_1.setAttribute("rel", "stylesheet");

    //Bootstrap Link 
    link_1.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
    link_1.setAttribute("integrity", "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN");
    link_1.setAttribute("crossorigin", "anonymous");

    document.head.appendChild(link_1);

}

window.onload = () => {
    //Definition of all the Elements of the Web
    DOM.layoutSelect = document.getElementById("changingLayout");
    DOM.allLinksCss = document.querySelectorAll("link");

    //Listening Events
    DOM.layoutSelect.addEventListener("change", ChangeLayout);

    //Set items
    let localLayout = localStorage.getItem("layoutName");
    if ((localLayout == null) || (localLayout == "")) {
        VerifingNewLayout("retro");
        localStorage.setItem("layoutName", "retro");
    }
    else{
        localStorage.setItem("layoutName", "retro");
        // VerifingNewLayout(localLayout);
    }
};