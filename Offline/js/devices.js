var deltaTouch; //Important :C
let abreviationList = document.querySelectorAll(".title");

let isScriptMobile = (window.navigator.userAgent.indexOf("Mobile") != -1);
    if (isScriptMobile) {
        abreviationList.forEach(abbr => {
            //Evento de Escucha Al Hacer Presionar 2 veces --> Ayuda de StackOverflow (lo tenía redificil x2000 lpm, maldita sea el día que pensé en incluir el dichoso y maldito "DoubleTap")
            //https://stackoverflow.com/questions/28940676/how-to-make-ondblclick-event-works-on-phone
            
            abbr.addEventListener("touchstart", function(e){
                //Función anónima para obtener el evento y pasarlo
                let doubleTap = isDoubleTap(e);
                if (doubleTap) {
                    e.preventDefault();
                    ShowAbbreviation(abbr);
                }
            })
        });
    }

function isDoubleTap(e) {
    const maxTime = 700; //Tiempo entre pulsaciones
    let doubleTapDetected = false;
    let touch = e.touches.length;

    if (touch === 1) {
        if (!deltaTouch) {
            //Time given between taps
            deltaTouch = e.timeStamp + maxTime;
        }
        else{
            let isNotExpired = (e.timeStamp <= deltaTouch);
            if (isNotExpired) {
                e.preventDefault();
                deltaTouch = null; //why null and not 0 (?)
                console.log("Double Tap detected!");
                doubleTapDetected = true;
            }
            else{
                //Reset timer for the Double Tap/Touch
                deltaTouch = e.timeStamp + maxTime;
            }
        }
    }

    return doubleTapDetected;
}

function ShowAbbreviation(abbr){
    alert(abbr.title);
}