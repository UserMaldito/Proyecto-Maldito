//----- Website Stats -----------------------------------------------------
/*
    RULE 1: Pls, copy ALL THE CODE and replace some parts with your data.
    RULE 2: Gimme credits and I'll be happy ^_^
    RULE 3: READ ALL THE EXPLANATION.
*/

//1. Place Here Your Neocities Username -> Example: "dapoyo" or "almondine" or "cinni" or "dawsomespace" or "goblin-heart" or "fauux" or "stargirlonline"
const username = "user-maldito";

//2. Views Type: (Normal[0], Better[1] or Best[2])
    /*
        Example: 
        views = 0; -> My views: 12345678 | 1234
        betterViews = 1 -> My views: 12 345 678 | 1 234
        bestViews = 2; -> My views: 12.3 M | 1.2 K
    */
const viewSelector = -1;
const separator = ' ';     //when viewSelector is 1 -> Recommended: "." & "," & " " & "\'"

//3. Date Type: IMPORTANT TO UNDERSTAND
    /*
        options ->  1. onlyDays | 2. onlyWeeks | 3. onlyMonths 
                    4. onlyYears | Other thing -> Full display
        Example: 
            option = 1 -> Last Update = 19 day(s) ago
            option = 2 -> Last Update = 2 week(s) ago
            option = 3 -> Last Update = Less than a month(s) ago
            option = 4 -> Last Update = 6 year(s) ago
            option = 5 or 0 or nothing -> Last Update = 3 year(s) and 7 month(s) aprox
        Real Example: 
                                |
                                v
            const createdType = 2;      Created: X week(s) ago
            const updatedType = 1;      Updated: X year(s) X month(s) aprox
                                ^
                                |
    */
const createdType = -1;
const updatedType = 3;

//If you wanna hide (not show) something, the value should be "-1" (like in line 38, createdType)
//----- Don't Touch Down ----------------------------------------------------

async function Search(){
    const siteInfo = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=";

    //Waiting the result of GetSiteInfo
    let theInfo = await GetSiteInfo(siteInfo, username);
    if (theInfo.success) {
        SetCounterInfo(theInfo);
    }
}

async function GetSiteInfo(urlSite, username){
    //Mould to Put The Data Later
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
            //Hey, I found you!
            return resp.json();
        }
        else{
            throw new Error("You have NOT been found :c");
        }
    })
    .then(data => {
        if (data.result == "success") {
            //Okay, I know you fr
            const separatorDate = "/";
            let created = new Date(data.info.created_at);
            let updated = new Date(data.info.last_updated);

            //Pouring the data into the mould to make a delicious counter
            yourWebsiteData.success = true;
            yourWebsiteData.name = data.info.sitename;
            yourWebsiteData.views = data.info.views;
            yourWebsiteData.hits = data.info.hits;
            yourWebsiteData.created = created;
            yourWebsiteData.updated = updated;
            yourWebsiteData.domain = data.info.domain;
            yourWebsiteData.tags = data.info.tags;

            let myExample = document.getElementById('example');
            myExample.innerHTML = data.info.tags;
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

    //Writing the stats in their HTML box
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

    //If is more than 1000 views (or more than 3 digits)
    if (stringViews.length > 3) {
        let arrayViews = [];

        //Grabbing the last 3 numbers and storing it. (1 234 567 it looks like this: 567 234 1)
        while (index < stringViews.length) {
            let startNumber = index + 3;
            let lastDigits = stringViews.substring(stringViews.length - startNumber, stringViews.length - index);

            arrayViews.push(lastDigits);

            index+=3;
        }

        //Turn it around and joining it with the separator 
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

    //? https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
    //? https://jsfiddle.net/JS69L/1/ (God Bless StackOverflow & That Stranger)

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

            /* Write */
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
Search();
//--------------------------------------------------------------------------