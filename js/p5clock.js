const DOM = {
    month: null,
    day: null,
    dayweek: null,
    daypart: null,
};

function GetPartOfTheDay(partDayListEng, hours){
    let thePart = "";

    console.log(hours);

    //So Much If :((
    let isMidNight = ((hours >= 0) & (hours < 4)) ? thePart = partDayListEng[0] : false; // ±4 hours
    let isEarlyMorning = ((hours >= 4) & (hours < 8)) ? thePart = partDayListEng[1] : false; // ±4 hours
    let isMorning = ((hours >= 8) & (hours < 10)) ? thePart = partDayListEng[2] : false; // ±2 hours
    let isMidMorning = ((hours >= 10) & (hours < 12)) ? thePart = partDayListEng[3] : false; // ±2 hours
    let isNoon = ((hours >= 12) & (hours < 13)) ? thePart = partDayListEng[4] : false; // ±1 hours
    let isAfternoon = ((hours >= 13) & (hours < 18)) ? thePart = partDayListEng[5] : false; // ±5 hours
    let isEvening = ((hours >= 18) & (hours < 20)) ? thePart = partDayListEng[6] : false; // ±2 hours
    let isLateNight = ((hours >= 20) & (hours < 22)) ? thePart = partDayListEng[7] : false; // ±2 hours
    let isNight = ((hours >= 22) & (hours < 24)) ? thePart = partDayListEng[8] : false; // ±2 hours

    // Old format (?)
    // for (let index = 0; index < timeDayList.length; index++) {
    //     const first = timeDayList[index];
    //     let second = "";

    //     //Verifico que NO es el final
    //     if (index < timeDayList.length - 1) {
    //         second = timeDayList[index + 1];

    //         if (Math.abs(first - hours) != 0) {
    //             const name = partDayListEng[index];
    //             thePart = name;

    //             console.log("La función dice que es: " + name);
    //         }
    //     }
    // }

    return thePart;
}

window.onload = () => {
    console.clear();
    //My criterium of "Parts of the Day"
    const partDayListEng = [
        "Mid Night",
        "Early Morning",
        "Morning",
        "Mid Morning",
        "Noon",
        "Afternoon",
        "Late Night",
        "Evening",
        "Night"
    ];

    /* Recollecting Info (of Date/Time) */
    let time = new Date(Date.now());
    console.log("Tu hora local (del PC) es: " + time.toString());

    //I just wanna the Date/Time
    let theTime = time.toString().split(" ").slice(0, 5);
    let hours = Number.parseInt(theTime[4].split(":")[0]);
    let month = time.getMonth();
    console.log(time.toUTCString())
    console.log(`Me interesa los datos: `);
    console.log(theTime);

    let partDay = GetPartOfTheDay(partDayListEng, hours);
    console.log(`Yo digo que es: ${partDay} :)`);

    WriteClock(theTime, partDay, month);
};

function WriteClock(theTime, partDay, month){
    DOM.month = document.querySelector("#month");
    DOM.day = document.querySelector("p#day");
    DOM.daypart = document.getElementById("daypart");
    DOM.dayweek = document.getElementById("dayweek");

    DOM.month.textContent = month; //theTime[1];
    DOM.day.textContent = theTime[2];
    DOM.dayweek.textContent = WriteCompleteDay(theTime[0]);
    DOM.daypart.textContent = partDay;
}

function WriteCompleteDay(theDay){
    let completeDay = "";

    switch (theDay) {
        case "Mon":
            completeDay = "Monday";
        break;
        case "Tue":
            completeDay = "Tuesday";
        break;
        case "Wed":
            completeDay = "Wednesday";
        break;
        case "Thu":
            completeDay = "Thursday";
        break;
        case "Fri":
            completeDay = "Friday";
        break;
        case "Sat":
            completeDay = "Saturday";
        break;
        case "Sun":
            completeDay = "Sunday";
        break;
    }

    return completeDay;
}

// Fetch Weather Data
// https://open-meteo.com/en/docs#latitude=28.1188&longitude=-16.576&current=temperature_2m,weather_code&timezone=auto&forecast_days=1