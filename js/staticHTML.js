const DOM_Static = {
    asidePart: null,
    formPart: null
};

const create_link_list = () => {
    //List of my Things 
    let abbrList = [
        "Gain Experience and Learn Something New/Interesting Here",
        "My Schizophrenia With Few Restrictions",
        "Time + Thoughts + Work",
        "aaaaaaaaAAAAAAAAAAªªªªªªªªª",
        "This Is Just... My Homework",
        "Photos & Videos of Myself and My Surronding (Memes are Includes, Maybe)"
    ];
    let linkList = [
        "",
        "/Online/Stories/index.html",
        "/Online/Proyects/index.html",
        "",
        "/Online/Homework/index.html",
        "/Online/Gallery/index.html"
    ];
    let textList = [
        "Tutorials (Not Tested / Done)",
        "Stories",
        "Proyects (Not Tested / Done)",
        "About Me (Not Tested / Done)",
        "My (Home)Work (Not Tested / Done)",
        "Gallery"
    ];

    //HTML Tags
    let theList = document.createElement("ul");

    //HTML Tags
    let theReusedListItem = document.createElement("li");
    let theReusedLink = document.createElement("a");
    let theReusedAbbrebiation = document.createElement("abbr");
    let theReusedText = document.createTextNode("");

    for (let index = 0; index < linkList.length; index++) {
        theReusedAbbrebiation.setAttribute("title", abbrList[index]);
        theReusedText.data = textList[index];
        theReusedLink.href = linkList[index];

        //¡Matrioska Time!
        theReusedAbbrebiation.appendChild(theReusedText);
        theReusedLink.append(theReusedAbbrebiation);
        theReusedListItem.appendChild(theReusedLink);
        theList.appendChild(theReusedListItem);
    }

    DOM_Static.asidePart.insertBefore(theList, DOM_Static.formPart);
};

window.onload = () => {
    console.clear();
    
    DOM_Static.asidePart = document.querySelector("aside>nav");
    DOM_Static.formPart = document.querySelector("aside>nav>form")

    create_link_list();
};