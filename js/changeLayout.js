const DOM = {
    layoutSelect: document.getElementById("changingLayout"),
    // selectedOption: document.getElementById("changingLayout"),
    linkCSS: document.querySelectorAll("link")[1].attributes["href"]


}

let layoutEvent = DOM.layoutSelect.addEventListener("change", ChangeLayout);

function ChangeLayout(){
    let selectedTheme = DOM.layoutSelect.options[DOM.layoutSelect.selectedIndex].value;

}



function NoCSS() {
    document.querySelectorAll("link").forEach((cssLink) => {
        cssLink.remove();
    });
}



// function ChangeLayout(){
//     let selectedTheme = DOM.layoutSelect.options[DOM.layoutSelect.selectedIndex].value;
//     let changeHref = VerifingNewLayout(selectedTheme).replace("´", "");
//     let consoleMsg = "Layout Change Successfully!";

//     if (changeHref != "trolling") {
//         DOM.linkCSS.value = changeHref;
//     }
//     else{
//         consoleMsg = "Fuck You x:D";
//     }

//     console.log(consoleMsg);
// }
function VerifingNewLayout(newLayout){
    let urlLink = "";

    switch (newLayout) {
        case "nothing":
            break;

        case "default":
            
            break;

        case "css_hater":
            NoCSS();
            break;

        default:
            urlLink = "trolling" //do the barrel roll?
            break;
    }

    return urlLink;
}