const DOM = {
    layoutSelect: document.getElementById("changingLayout"),
    // selectedOption: document.getElementById("changingLayout"),
    linkCSS: document.querySelector("link").attributes["href"]


}

let layoutEvent = DOM.layoutSelect.addEventListener("change", ChangeLayout);

function ChangeLayout(){
    let selectedTheme = DOM.layoutSelect.options[DOM.layoutSelect.selectedIndex].value;
    let changeHref = VerifingNewLayout(selectedTheme).replace("´", "");
    let consoleMsg = "Layout Change Successfully!";

    if (changeHref != "trolling") {
        DOM.linkCSS.value = changeHref;
    }
    else{
        consoleMsg = "Fuck You x:D";
    }

    console.log(consoleMsg);
}




function VerifingNewLayout(newLayout){
    let urlLink = "";

    switch (newLayout) {
        case "clean":
            break;

        case "old":
            urlLink = `./css/${newLayout}.css`;
            break;

        case "retro":
            urlLink =`./css/${newLayout}.css`;
            break;

        case "simple":
            urlLink = `./css/${newLayout}.css`;
            break;
    
        case "modern":
            urlLink = `./css/${newLayout}.css`;
            break;
    
        case "futuristic":
            urlLink = `./css/${newLayout}.css`;
            break;

        default:
            urlLink = "trolling" //do the barrel roll?
            break;
    }

    return urlLink;
}