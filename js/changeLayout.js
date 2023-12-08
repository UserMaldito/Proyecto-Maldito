const DOM = {
    layoutSelect: null,
    // selectedOption: document.getElementById("changingLayout"),
    allLinksCss: null,


}
function ChangeLayout(){
    let selectedTheme = DOM.layoutSelect.options[DOM.layoutSelect.selectedIndex].value;
    VerifingNewLayout(selectedTheme)
}

function VerifingNewLayout(newLayout){
    let urlLink = "";

    switch (newLayout) {
        case "nothing":
            
            break;

        case "default":
            DefaultCSS();
            console.log("Thanks for Returning to the Original :)");
            break;

        case "css_hater":
            NoCSS();
            console.log("CSS Hater Spotted");
            break;

        default:
            urlLink = "trolling" //do the barrel roll? idk
            console.log("So funny touching the code I made, right? C:");
            break;
    }

    return urlLink;
}


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
    let link_3 = document.createElement("link");
    let link_4 = document.createElement("link");
    let link_5 = document.createElement("link");

    link_1.setAttribute("rel", "stylesheet");
    link_2.setAttribute("rel", "stylesheet");
    link_3.setAttribute("rel", "stylesheet");
    link_4.setAttribute("rel", "stylesheet");
    link_5.setAttribute("rel", "stylesheet");

    link_1.setAttribute("href", "/css/generic/generic.css");
    link_2.setAttribute("href", "/css/generic/header/header.css");
    link_3.setAttribute("href", "/css/generic/fonts/font.css");
    link_4.setAttribute("href", "/css/generic/main/main.css");
    link_5.setAttribute("href", "/css/generic/cursor/cursor.css");

    document.head.appendChild(link_1);
    document.head.appendChild(link_2);
    document.head.appendChild(link_3);
    document.head.appendChild(link_4);
    document.head.appendChild(link_5);
}


window.onload = () => {
    //Definition of all the Elements of the Web
    DOM.layoutSelect = document.getElementById("changingLayout");
    DOM.allLinksCss = document.querySelectorAll("link");

    //Listening Events
    DOM.layoutSelect.addEventListener("change", ChangeLayout);


};