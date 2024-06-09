//--Init all the code
function Index() {
    WriteWebsiteStats();
    WriteYear();
}

//----- Website Stats ----------------------------------------------------
const username = "user-maldito";
const viewSelector = -1;
const separator = ' ';
const createdType = 1;
const updatedType = 0;

async function WriteWebsiteStats(){
    const siteInfo = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=";
    let theInfo = await GetSiteInfo(siteInfo, username);

    if (theInfo.success) {
        SetCounterInfo(theInfo);
    }
}

async function GetSiteInfo(urlSite, username){
    let yourWebsiteData = {
        success: false,
        views: 0,
        hits: 0,
        created: "",
        updated: "",
        domain: "",
        tags: [],
    }

    await fetch(urlSite + username.trim())
    .then(resp => {
        if (resp.ok) {
            return resp.json();
        }
        else{
            throw new Error("You have NOT been found :c");
        }
    })
    .then(data => {
        if (data.result == "success") {
            const separatorDate = "/";
            let created = new Date(data.info.created_at);
            let updated = new Date(data.info.last_updated);


            yourWebsiteData.success = true;
            yourWebsiteData.name = data.info.sitename;
            yourWebsiteData.views = data.info.views;
            yourWebsiteData.hits = data.info.hits;
            yourWebsiteData.created = created;
            yourWebsiteData.updated = updated;
            yourWebsiteData.domain = data.info.domain;
            yourWebsiteData.tags = data.info.tags;
        }
    })
    .catch(error => console.error(error));

    return yourWebsiteData;
}

function SetCounterInfo(webData){
    let viewBox = document.querySelector("#views");
    let createdBox = document.querySelector("#created");
    let updatedBox = document.querySelector("#updated");

    let views = webData.views;
    switch (viewSelector) {
        case 1:
            views = BetterViewsInfo(webData.views);
        break;
        case 2:
            views = BestViewInfo(webData.views);
        break;
        case -1:
            views = "";
        break;
    }

    let betterCreatedDate = "";
    let betterUpdatedDate = "";

    if (createdType != -1) {
        betterCreatedDate = BetterDateInfo(webData.created, createdType);
    }
    if (updatedType != -1) {
        betterUpdatedDate = BetterDateInfo(webData.updated, updatedType);
    }

    if (viewSelector > 0) {
        viewBox.innerText ="My views: " + views;
    }
    else{
        DeleteStatNode(viewBox);
    }
    if (createdType >= 0) {
        createdBox.innerText = 'Created: ' + betterCreatedDate;
    }
    else{
        DeleteStatNode(createdBox);
    }
    if (updatedType >= 0) {
        updatedBox.innerText = `Updated: ${betterUpdatedDate}`;
    }
    else{
        DeleteStatNode(updatedBox);
    }
}

function BetterViewsInfo(views){
    let betterInfo = "";

    let stringViews = views.toString();
    let index = 0;

    if (stringViews.length > 3) {
        let arrayViews = [];

        while (index < stringViews.length) {
            let startNumber = index + 3;
            let lastDigits = stringViews.substring(stringViews.length - startNumber, stringViews.length - index);

            arrayViews.push(lastDigits);

            index+=3;
        }

        betterInfo = arrayViews.reverse().join(separator);
        console.log(betterInfo);
    }
    else{
        betterInfo = views;
    }

    return betterInfo;
}
function BestViewInfo(views){
    let bestInfo = "";

    let stringViews = views.toString();
    let letter = " K";
    let divider = 100;

    if (stringViews.length >= 7) {
        letter = " M";
        divider = 100*1000;
    }

    let decimalNumber = Math.trunc(views / divider);
    let lastNumber = decimalNumber.toString()[decimalNumber.toString().length - 1];
    decimalNumber = Math.trunc(views / (divider*10));

    if (Number.parseInt(lastNumber) == 0) {
        bestInfo = decimalNumber.toString() + letter;
    }
    else{
        bestInfo = decimalNumber.toString() + "." + lastNumber + letter;
    }

    return bestInfo;
}
function BetterDateInfo(date, options) {
    let betterDate = "";

    const getDaysCalc = 1000 * 3600 * 24;
    const averageMonth = 365/12;
    let dateNow = new Date(Date.now());
    let isLeapYear = (dateNow.getFullYear() % 4) == 0 ? 1 : 0; //1 = true | 0 = false
    let timeDifference = Math.abs(dateNow.getTime() - date.getTime());
    let allDays = Math.ceil(timeDifference / getDaysCalc);
    let betterMonths = Math.floor(allDays / averageMonth);
    let betterYears = Math.floor(allDays / (365 + isLeapYear));
    
    switch (options) {
        case 1:
            if (allDays == 0) {
                betterDate = "Less than a day ago";
            }
            else{
                betterDate = allDays + " day(s) ago";
            }
        break;

        case 2:
            if (allDays < 7) {
                betterDate = "Less than a week ago";
            }
            else{
                betterDate = Math.floor(allDays / 7) + " week(s) ago";
            }
        break;

        case 3:
            if (betterMonths < 1) {
                betterDate =  "Less than a month ago";
            } else {
                betterDate = betterMonths + " month(s) ago";
            }
        break;

        case 4:
            if (allDays <= (365 + isLeapYear)) {
                betterDate =  "Less than a year ago";
            } else {
                betterDate = betterYears + " year(s) ago";
            }
        break;

        default:
            while (betterMonths >= 12) {
                betterMonths = betterMonths - 12;
                betterYears++;
            }
            betterYears--;
            let betterDays = 0;
            if (allDays > 28) {
                Math.floor((allDays) / averageMonth);
            } else {
                betterDays = allDays;
            }

            if (betterYears > 0) {
                betterDate += betterYears + " year(s) ";
            }
            if (betterMonths > 0) {
                betterDate += betterMonths + " month(s) ";
            }
            if (betterDays > 0) {
                betterDate += betterDays + " day(s)";
            }
            if (allDays == 0) {
                betterDate += "Less than a day";
            }
            betterDate += " aprox";
        break;
    }

    return betterDate;
}

function DeleteStatNode(node) {
    let statBox = document.querySelector("#stats");
    statBox.removeChild(node);
}
//-------------------------------------------------------------------------

//----- Copy to Clipboard (Event) -----------------------------------------
let mySvg = document.querySelector("#my-button-section svg");

const myButtonString = `
<a title="User Whispers: Come To This Page And Learn The Hidden Truth Of User" href="https://user-maldito.neocities.org/" target="_blank" rel="noreferrer"><img src="/static/data/img/buttons/peoples_buttons/user's-button-in-paint.gif" alt="User's Button"></a>
`;

if (mySvg) {
    mySvg.addEventListener("click", function(e){
        let successSvg = `<path style="color:var(--color-letter-info)" fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
        <path style="color:var(--color-letter-secondary)" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path style="color:var(--color-letter-secondary)" d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>`;
        let normalSvg = `<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>`;
    
        navigator.clipboard.writeText(myButtonString);
        
        setTimeout(ChangeSVG, 0, successSvg);
        setTimeout(ChangeSVG, 5000, normalSvg);
    });
}

function ChangeSVG(pathSvg){
    mySvg.innerHTML = pathSvg;
}
//---------------------------------------------------------------------------

//----- Get and Set The Actual Year -----------------------------------------
function WriteYear() {
    let dateBox = document.getElementById("year");
    if (dateBox != null) {
        let year = new Date().getFullYear();
        dateBox.innerHTML = "&copy;" + year.toString();
    }
}
//---------------------------------------------------------------------------

//----- Change a Photo in Profile (Event) -----------------------------------
let img = document.querySelector("#profile-user");
if (img) {
    img.addEventListener("click", function(e) {
        ChangePhoto(img);
    });

}

function ChangePhoto(imgNode){
    const arrayPhotos = [
        "/static/data/img/about/him/user-0.png",
        "/static/data/img/about/him/user-1.jpeg",
        "/static/data/img/about/him/user-2.jpeg",
        "/static/data/img/about/him/user-3.jpeg"
    ];
    let actualNumber = 0;

    let index = 0;
    while (index < arrayPhotos.length) {
        if (imgNode.src.includes(arrayPhotos[index])) {
            index++;
            actualNumber = index;

            index = arrayPhotos.length; //to break the loop
        }

        index++;
    }

    if (actualNumber >= arrayPhotos.length) {
        actualNumber = 0;
    }

    imgNode.src = arrayPhotos[actualNumber];
}
//---------------------------------------------------------------------------

<<<<<<< HEAD
=======
//----- Mobile Version Script (Event) ---------------------------------------
var deltaTouch; //Important
let abreviationList = document.querySelectorAll("[title]");

let isScriptMobile = (window.navigator.userAgent.indexOf("Mobile") != -1);
if (isScriptMobile) {
    abreviationList.forEach(abbr => {
        abbr.addEventListener("touchstart", function(e){
            let doubleTap = isDoubleTap(e);
            if (doubleTap) {
                e.preventDefault();
                ShowAbbreviation(abbr);
            }
        })
    });

    let hiddenList = document.querySelector("#hidden-list");
    if (hiddenList) {
        hiddenList.style.display = "initial";
        hiddenList.setAttribute("style", "list-style-type: none");
    }
}

function isDoubleTap(e) {
    const maxTime = 700;
    let doubleTapDetected = false;
    let touch = e.touches.length;

    if (touch === 1) {
        if (!deltaTouch) {
            deltaTouch = e.timeStamp + maxTime;
        }
        else{
            let isNotExpired = (e.timeStamp <= deltaTouch);
            if (isNotExpired) {
                e.preventDefault();
                deltaTouch = null;
                console.log("Double Tap detected!");
                doubleTapDetected = true;
            }
            else{
                deltaTouch = e.timeStamp + maxTime;
            }
        }
    }

    return doubleTapDetected;
}

function ShowAbbreviation(abbr){
    alert(abbr.title);
}



//---------------------------------------------------------------------------
>>>>>>> Mayor_Changes

Index();