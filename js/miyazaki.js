window.onload = () => {
    alert("He's Watching Us");
    alert("He's Watching Us. Be carefull");
    alert("He's Watching Us. Be carefull. Comienza a Explorar");
}
//CSS THROUGH JS (too lazy to make a CSS right now ngl)
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.style.overflow = "hidden";

const audioURL = "/img/sfx/breath-loop-sfx.mp3";
var audio = new Audio(audioURL);
let startAdventure = document.getElementById("fullscreen_enabler");

startAdventure.style.margin = "50px";
startAdventure.addEventListener("click", () => {
    document.body.requestFullscreen();
    //First, the audio

    let isScriptMobile = (window.navigator.userAgent.indexOf("Mobile") != -1);
    if (isScriptMobile) {
        let getOldVideo = document.querySelector("video");
        if (!getOldVideo) {
            let videoPhone = document.createElement("video");

            videoPhone.src = audioURL;
            videoPhone.loop = true;
            videoPhone.autoplay = true;
            videoPhone.style.visibility = "hidden";

            document.body.appendChild(videoPhone);
        }

    } else {
        AutoplayAudio();
    }

    //Then, the weirdy letters
    startAdventure.style.position = "absolute";
    
    //Avoiding innecesary more css if the user likes to click/touch the "button"
    let allCss = document.querySelectorAll("link");
    if (allCss.length <= 2) {
        AddCSS("/css/experimental/miyazaki.css");
    }

    GetCrazy();
    // const interval = setInterval(CrazyTexts, document.querySelector("span"));
});

function AutoplayAudio() {
    // If the audio is playing and click to play again, you have now 2 audios
    if (audio.played.length >= 1){
        audio.pause();
    }
    
    audio.play();
    audio.loop = true;
}

function AddCSS(link) {
    let css = document.createElement('link');

    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = link;

    document.head.appendChild(css);
}

function GetCrazy() {
    let allSpan = document.querySelectorAll('span');
    allSpan.forEach(span => {
        const interval = setInterval(CrazyTexts, 350, span);
    });
}

function CrazyTexts(spanNode) {
    //https://mebious.neocities.org/Layer/GoWireless (reference and inspiration)
    spanNode.style.position = 'absolute';

    spanNode.style.top  = generateRandom.positionValue().toString() + '%';
    spanNode.style.left = generateRandom.positionValue().toString() + '%';

    spanNode.style.fontSize = generateRandom.fontValue().toString() + "px";

    spanNode.style.shadowValue = generateRandom.shadowValue().toString() + "px " +
                                generateRandom.shadowValue().toString() + "px " +
                                "4px " + " #7bb35d";

    spanNode.style.zIndex  = generateRandom.indexValue()  .toString();

    spanNode.style.opacity = generateRandom.opacityValue().toString();
    
    console.clear();//Clean Console :)
}

const generateRandom = {
    shadowValue: function(){
        let randomShadow = (Math.random() * 3) + (-3); //Random number between [1-99]
        randomShadow *= Math.trunc(Math.random() * 100) % 2 == 0 ? 1 : -1; //50% chance of negative value (if the random number is NOT even -> negative value)
        return randomShadow;
    },
    positionValue: function(){
        let randomPosition = (Math.random() * 99) + (-2);
        return randomPosition;
    },
    fontValue: function(){
        let randomFont = (Math.random() * 64) + (-5);
        return randomFont;
    },
    indexValue: function(){
        let randomIndex = (Math.random() * 100) + (1);
        return randomIndex;
    },
    opacityValue: function(){
        return Math.random();
    }
}





