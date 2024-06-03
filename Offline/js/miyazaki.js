window.onload = () => {
    alert("He's Watching Us");
    alert("He's Watching Us. Be carefull");
    alert("He's Watching Us. Be carefull. Comienza a Explorar");
}
const goodPassword = (textBox) => {
    textBox.style.backgroundColor = "lightgreen";
    textBox.style.color = "green";
    textBox.style.borderBlockColor = "blue";
};
const badPassword = (textBox) => {
    textBox.style.backgroundColor = "pink";
    textBox.style.color = "red";
    textBox.style.borderBlockColor = "red";
};
const deafultTextBox = (textBox) => {
    textBox.style.backgroundColor = "grey";
    textBox.style.color = "white";
    textBox.style.borderBlockColor = "black";
    textBox.hidden = false;
};
const generateRandom = {
    //Thanks to https://mebious.neocities.org/Layer/GoWireless (reference and inspiration)
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
};
const fullScreenMode = () => {
    document.body.requestFullscreen();
};

//First define the Variables, then change the Attributes
let firstBox = document.getElementById('secret');
let secondBox = document.getElementById('prueba');

//CSS THROUGH JS (too lazy to make a CSS right now ngl)
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

//Reseting the password the 1st time
if (firstBox) {
    const audioURL = "/img/sfx/breath-loop-sfx.mp3";
    var audio = new Audio(audioURL);
    let startAdventure = document.getElementById("fullscreen_enabler");
    
    firstBox.value = "";
    audio.loop = true;

    FirstPart(startAdventure);
}
if (secondBox) {
    secondBox.value = "";
    SecondPart();
}


//
function FirstPart(startAdventure) {
    startAdventure.style.margin = "50px";
    startAdventure.addEventListener("click", () => {
        //Define is the 1st of the 1st and the 2nd of the 1st is: use it
        const autoplayAudio = () => {
            // If the audio is playing and click to play again, you have now 2 audios
            //We need to correct that bug
            let isScriptMobile = (window.navigator.userAgent.indexOf("Mobile") != -1);
            if (isScriptMobile) {
                //First, Fullscreen (to have more inmertional effect / Mobile Only)
                fullScreenMode();
                
                //If there is another audio, don't put another (mobile)
                let getOldVideo = document.querySelector("video");
                if (!getOldVideo) {
                    let videoPhone = document.createElement("video");
                    
                    videoPhone.src = audioURL;
                    videoPhone.loop = true;
                    videoPhone.autoplay = true;
                    videoPhone.style.visibility = "hidden";
                    
                    document.body.appendChild(videoPhone);
                }
            }
            else {
                //If there is another audio, don't put another (PC)
                if (audio.played.length >= 1){
                    audio.pause();
                }
                
                audio.play();
            }
        }
        const crazyTexts = (spanNode) => {
            //https://mebious.neocities.org/Layer/GoWireless (reference and inspiration) x2
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
        const getCrazy = () => {
            let allSpan = document.querySelectorAll('span');
            allSpan.forEach(span => {
                const interval = setInterval(crazyTexts, 350, span);
            });
        }
        const addCSS = (link) => {
            let css = document.createElement('link');
            
            css.rel = 'stylesheet';
            css.type = 'text/css';
            css.href = link;
            
            document.head.appendChild(css);
        }
        const firstPassword = () => {
            let password = document.getElementById("secret").value.trim().toLowerCase();
            
            //CSS through JavaScript (para fardar un poco lol)
            document.body.style.overflow = "hidden"; //Hate those lateral scrollers
            deafultTextBox(firstBox);
            firstBox.style.position = "absolute";
            firstBox.style.top = "95%";
            firstBox.style.left = "80%";
            
            switch (password) {
                case "diamante":
                goodPassword(firstBox);
                window.open("https://labibliotecadellaberinto.com", "_self");
                break;
                case "camaleon":
                goodPassword(firstBox);
                window.open("/Online/experimental/hezan.html", "_self");
                break;
                default:
                badPassword(firstBox);
                break;
            }
        }
        
        //First, the audio (mobile or PC)
        autoplayAudio();
        
        //Then, the weirdy letters
        startAdventure.style.position = "absolute";
        getCrazy();
        
        //Avoiding innecesary more css if the user likes to click/touch the "button"
        let allCss = document.querySelectorAll("link");
        if (allCss.length <= 2) {
            addCSS("/css/experimental/miyazaki.css");
        }
        
        //Finally, where're we goin'?
        firstPassword();
        firstBox.addEventListener("change", firstPassword);
    });
}
function SecondPart(){
    const SecondPassword = (password) => {    
        //CSS through JavaScript (para fardar un poco lol)
        deafultTextBox(secondBox);
        
        switch (password) {
            case "lacey":
            goodPassword(secondBox);
            window.open("/Online/experimental/lacey.html", "_self");
            break;
    
            default:
            badPassword(secondBox);
            break;
        }
    }
    document.forms.item(0).onsubmit = (e) => {
        //Block the request of the form (GET, POST, PUT, ...)
        e.preventDefault();
        let secondPassword = document.getElementById("prueba").value.trim().toLowerCase();
        SecondPassword(secondPassword);
    };
}


function FirstClue(){
    window.open("/Online/experimental/first_clue.txt.html", "_self");
    let ex = ";";
}
function SecondClue(){
    window.open("/Online/experimental/secret-2.txt.html", "_self");
}