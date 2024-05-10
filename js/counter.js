//You'll need to change just 4 things (line 7, line 16 & 17, line 37 & 38)
//and the counter is for you :3 Give me credits and I'll be happy :)))
//
//                                                         ~ User Trasnochador

//1. Place Here Your Neocities Username -> Example: "almondine" or "cinni" or "dawsomespace" or "goblin-heart"
const username = "user-maldito";

//2. Views Type: (Normal[0], Better[1] or Best[2])
    /*
        Example: 
        views = 0; -> My views: 12345678 | 1234
        betterViews = 1 -> My views: 12 345 678 | 1 234
        bestViews = 2; -> My views: 12.3 M | 1.2 K
    */
const viewSelector = 2;
const separator = '.';     //Recommended: "." & "," & " "

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
const createdType = 3;
const updatedType = 1;


//--------------------------------------------------------------------------------------------------------------


async function Search(){
    const siteInfo = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=";

    // console.log("Initializing Search");
    let theInfo = await GetSiteInfo(siteInfo, username);
    if (theInfo.success) {
        SetCounterInfo(theInfo);
    }
}

async function GetSiteInfo(urlSite, username){
    // console.log("Let's Get This Site's Data/Info");
    let yourWebsiteData = {
        success: false,
        views: 0,
        hits: 0,
        created: "",
        updated: "",
        domain: "",
        tags: [],
    }

    await fetch(urlSite + username)
    .then(resp => {
        if (resp.ok) {
            // console.log("Yey, I found you!");
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

            console.log("I have your website data, jiji");
            // console.log(yourWebsiteData);
        }
    })
    .catch(error => console.error(error));

    return yourWebsiteData;
}

function SetCounterInfo(webData){ // Your views = 6331 (example) | Last Update = 14/12/2018
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
    }

    let betterCreatedDate = BetterDateInfo(webData.created, createdType);
    let betterUpdatedDate = BetterDateInfo(webData.updated, updatedType);

    viewBox.innerText ="My views: " + views;
    createdBox.innerText = 'Created: ' + betterCreatedDate;
    updatedBox.innerText = `Updated: ${betterUpdatedDate}`;

    // console.log("Write it down");
}

function BetterViewsInfo(views){
    let betterInfo ="";

    let stringViews = views.toString();

    let index = stringViews.length; 
    while (index >= 0) {
        let auxViews = "";
        
        if (index >= 3) {
            auxViews = stringViews.substring(index, index - 3);
            betterInfo = separator + auxViews +  betterInfo;
        } else {
            auxViews = stringViews.substring(0, index);
            betterInfo = auxViews +  betterInfo;
        }

        index-=3;
    }

    if ((betterInfo.length == 4) || (betterInfo.length == 7) || (betterInfo.length == 16)) {
        betterInfo = betterInfo.slice(1, betterInfo.length);
    }

    return betterInfo;
}
function BestViewInfo(views){
    let bestInfo = "";
    let stringViews = views.toString();

    switch (true) {
        case ((stringViews.length >= 4) && (stringViews.length < 7)):
            bestInfo = stringViews[0] + separator + stringViews[1] + " K";
        break;

        case (stringViews.length >= 7):
            bestInfo = stringViews[0] + separator + stringViews[1] + " M";
        break;
    
        default:
            bestInfo = stringViews;
        break;
    }

    return bestInfo;
}
function BetterDateInfo(date, options) {
    //? https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
    //? https://jsfiddle.net/JS69L/1/ (God Bless StackOverflow & That Stranger)

    let betterDate = "";
    let dateNow = new Date(Date.now());
    const getDaysCalc = 1000 * 3600 * 24;
    const averageMonth = 365/12;

    let isLeapYear = (dateNow.getFullYear() % 4) == 0 ? 1 : 0; //1 = true | 0 = false
    
    let timeDifference = Math.abs(dateNow.getTime() - date.getTime());
    let allDays = Math.ceil(timeDifference / getDaysCalc);
    
    let betterYears = Math.trunc(allDays / (365 + isLeapYear));
    let betterMonths = Math.floor(allDays / averageMonth);

    switch (options) {
        case 1:
            if (allDays == 0) {
                //betterDate = "Right Now";
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
            if (allDays <= 365) {
                betterDate =  "Less than a year ago";
            } else {
                let theBestYear = Math.floor(allDays / 365);
                betterDate = theBestYear + " year(s) ago";
            }
        break;
        default:
            /* Maths */
            if (betterMonths >= 12) {
                betterYears++;
            }
            while (betterMonths >= 12) {
                betterMonths = betterMonths - 12;
            }
            let betterDays = 0;
            if (allDays > 28) {
                Math.floor(( allDays) / averageMonth);
            } else {
                betterDays = allDays;
            }

            /* Write */
            if (betterYears > 0) {
                betterDate = betterYears + " year(s) ";
            }
            if (betterMonths > 0) {
                betterDate += betterMonths + " month(s) ";
            }
            if (betterDays > 0) {
                betterDate += betterDays + " day(s)";
            }
            if (allDays == 0) {
                //betterDate = "Right Now";
                betterDate = "Less than a day";
            }
            betterDate += " aprox";
        break;
    }

    return betterDate ;
}

Search();