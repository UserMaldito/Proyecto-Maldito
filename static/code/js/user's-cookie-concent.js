//----- Show a Cookie Consent Box (Event) -----------------------------------
function CookieBox() {
    //Creating HTML Elements
    let cookieBox = document.createElement("div");
    let textCookieBox = document.createElement("p");
    let yesButton = document.createElement("button");
    let noButton = document.createElement("button");

    //Creating Text node to change the texts (alt version)
    let nodeText = document.createTextNode("User hates e-cookies. Do you hate e-cookies?");
    textCookieBox.appendChild(nodeText);

    //Modifying and Appending the HTML Elements
    yesButton.textContent = "Yes, I'm a e-cookies hater."
    noButton.textContent = "No, I love e-cookies. Gimme more!!";

    //Putting everything together (in a same "box")
    cookieBox.appendChild(textCookieBox);
    cookieBox.appendChild(yesButton);
    cookieBox.appendChild(noButton);

    //CSS through JS
    cookieBox.setAttribute("class", "e-cookies-box"); /* PS: never put the class "cookie-banner" with an cookie banner blocker hehe */
    cookieBox.style.textAlign = "center";
    cookieBox.style.overflow = "hidden";
    cookieBox.style.height = "0";
    cookieBox.style.transition = "all 2s"; /* Magic */
    cookieBox.style.position = "fixed";
    cookieBox.style.top = "50%";
    cookieBox.style.left = "35%";
    
    yesButton.style.margin = "20px";
    noButton.style.margin = "20px";


    //Adding an Event to the buttons (to hide the box)
    yesButton.addEventListener("click", function(){
        EventCookieBox(cookieBox, true);
        localStorage.setItem("User says", "Say no to e-cookies");
        console.log("Say no to e-cookies");
    });
    noButton .addEventListener("click", function(){
        EventCookieBox(cookieBox, true);
    });

    document.body.appendChild(cookieBox);

    let randomSeconds = Math.random() * 10000;
    console.log("Cookie ads in: " + randomSeconds.toString()[0] + " seconds");

    //Start Animation
    setTimeout(EventCookieBox, randomSeconds, cookieBox, false);
    console.log("Those 'cookies' options have no effects on the browser, it's just a miniprank");
}
function EventCookieBox(cookieBox, hide) {
    if (!hide) {
        cookieBox.style.backgroundColor = "var(--color-background-secondary)";
        cookieBox.style.border = "3px solid var(--color-background-light)";
        cookieBox.style.textAlign = "center";
        cookieBox.style.overflow = "hidden";
        cookieBox.style.height = "130px";
        cookieBox.style.padding = "20px";
    }
    else{
        cookieBox.style.height = "0";
        cookieBox.style.backgroundColor = "";
        cookieBox.style.padding = "0";
        cookieBox.style.border = "0";
    }
}
//---------------------------------------------------------------------------
let wannaCookies = localStorage.getItem("User says");
if (wannaCookies == undefined) {
    CookieBox();
}
else{
    console.log("Do you miss User's e-cookies? Write 'EraseCookies()' and hit enter");
}
function EraseCookies() {
    localStorage.removeItem("User says");
    console.log("In the very next refresh, you'll have it ^_^");
    return "Press F5 to refresh";
}
