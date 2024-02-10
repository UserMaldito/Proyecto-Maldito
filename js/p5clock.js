const DOM = {
    webPartDay: null
};

function GetPartOfTheDay(partDayListEng, timeDayList, theTime){
    //My criterium of "Parts of the Day"
    const partDayListEng = [
        "Early Morning",
        "Morning",
        "Mid Morning",
        "Noon",
        "Afternoon",
        "Evening",
        "Night",
        "Mid Night",
    ];
    const timeDayList = [
        2,
        7,
        10,
        12,
        15,
        17,
        20,
        0,
    ];
    let thePart = "";

    let hours = Number.parseInt(theTime[4].split(":")[0]);

    for (let index = 0; index < timeDayList.length; index++) {
        const first = timeDayList[index];
        let second = "";

        //Verifico que NO es el final
        if (index < timeDayList.length - 1) {
            second = timeDayList[index + 1];

            if (Math.abs(first - hours) != 0) {
                const name = partDayListEng[index];
                thePart = name;

                console.log("La función dice que es: " + name);
            }
        }
    }

    return thePart;
}

window.onload = () => {
    /* Recollecting Info (of Date/Time) */
    let time = new Date(Date.now());
    console.log("Tu hora local (del PC) es: " + time.toString());

        //I just wanna the Date/Time
    let theTime = time.toString().split(" ").slice(0, 5);
    console.log(`Me interesa los datos: `);
    console.log(theTime);

        
    let partDay = GetPartOfTheDay(partDayListEng, timeDayList, theTime);
    console.log(`Y yo digo que es: ${partDay} :)`);

    DOM.webPartDay = document.querySelector("section").textContent;
    if (partDay != ""){
        DOM.webPartDay = partDay;
    }
};



// document.querySelector("section").textContent = theTime;