/* Searching an Svg tag within an Element with the id "my-button-section"  */
let mySvg = document.querySelector("#my-button-section svg");

/* My button inside those: `` */
const myButtonString = `<a title="User Whispers: Come To This Page And Learn The Hidden Truth Of User" href="https://user-maldito.neocities.org/" target="_blank" rel="noreferrer">
<img src="/static/data/img/buttons/peoples_buttons/user's-button-in-paint.gif" alt="User's Button"></a>`;

mySvg.addEventListener("click", function(e){
    /* Secret Success "design" */
    let successSvg = `<path style="color:var(--color-letter-info)" fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
    <path style="color:var(--color-letter-secondary)" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
    <path style="color:var(--color-letter-secondary)" d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>`;
    let normalSvg = `<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>`;

    /* This is the actual code */
    navigator.clipboard.writeText(myButtonString);
    
    /* This is for change the "design"*/
    setTimeout(ChangeSVG, 0, successSvg);   /* Change inmediately the design */
    setTimeout(ChangeSVG, 5000, normalSvg); /* In 5 sec [after the click], it'll have the initial one  */
});

function ChangeSVG(pathSvg){
    mySvg.innerHTML = pathSvg;
}