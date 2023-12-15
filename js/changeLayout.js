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
            DefaultCSS();
            console.log("Thanks for Returning to the Original :)");
            newLayoutName = "default";
            break;

        case "css_hater":
            NoCSS();
            console.log("CSS Hater Spotted");
            newLayoutName = "css_hater";
            break;

        case "retro":
            NoCSS();
            HackerCSS();
            console.log("Please, don't hack me. I'll do anything, but don't hurt me TnT");
            newLayoutName = "retro";
            break;


        default:
            newLayoutName = "trolling"; //do the barrel roll? idk
            console.log("So funny touching the code I made, right? C:");
            break;
    }

    return newLayoutName;
}

//Optimize the *CSS functions with the layout name in the parameter => [HackerCSS(layout = "retro" -> href="{layout}.css")]

function NoCSS() {
    //Remove All The Links (CSS Tags)
    DOM.allLinksCss.forEach((cssLink) => {
        cssLink.remove();
    });
}

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

function HackerCSS() {
    //I Create The Element Link and Attach them with a the Relative Path 
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
    link_4.setAttribute("href", "/css/retro/main/main.css");
    link_5.setAttribute("href", "/css/retro/footer/footer.css");
    link_6.setAttribute("href", "/css/retro/cursor/cursor.css");

    document.head.appendChild(link_1);
    document.head.appendChild(link_2);
    document.head.appendChild(link_3);
    document.head.appendChild(link_4);
    document.head.appendChild(link_5);
    document.head.appendChild(link_6);
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
        localStorage.setItem("layoutName", "default");
    }
    else{
        VerifingNewLayout(localLayout);
    }


};