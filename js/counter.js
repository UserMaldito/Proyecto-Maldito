//Put your Neocities Website Here. PS: You can comment (put before //) or erase all the console.log()
async function Search(){
    const siteInfo = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=";
    const username = "user-maldito";  //Place Here Your Neocities Username -> Example: "cinni" or "dawsomespace"

    console.log("Initializing Search");
    let theInfo = await GetSiteInfo(siteInfo, username);
    if (theInfo.success) {
        SetCounterInfo(theInfo);
    }
}

async function GetSiteInfo(urlSite, username){
    console.log("Let's Get This Site's Data/Info");
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
            console.log("Yey, I found you!");
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

            console.log("Your website data:");
            console.log(yourWebsiteData);
        }
    })
    .catch(error => console.error(error));

    return yourWebsiteData;
}

function SetCounterInfo(webData){ // Your views = 6331 (example) | Last Update = 14/12/2018
    let viewBox = document.querySelector("#views");
    let createdBox = document.querySelector("#created");
    let updatedBox = document.querySelector("#updated");

    //let betterViews = BetterViewsInfo(webData.views); // Your Better views = 6.331
    let bestViews = BestViewInfo(webData.views); // Your Best views = 6.3 K or 6.3 M

    let betterCreatedDate = BetterDateInfo(webData.created);
    let betterUpdatedDate = BetterDateInfo(webData.updated, 2); 

    viewBox.innerText ="My views: " + bestViews;
    createdBox.innerText = 'Created: ' + betterCreatedDate;
    updatedBox.innerText = `Updated: ${betterUpdatedDate}`;

    console.log("Write it down");
}

function BetterViewsInfo(views){
    let betterInfo ="";

    let stringViews = views.toString();

    if (views.toString().length >= 4){
        betterInfo = stringViews[0] + "." + stringViews.substring(1, stringViews.length);
    }
    if (views.toString().length >= 7){
        betterInfo = stringViews[0] + "." + stringViews.substring(1, stringViews.length - 4) + "." + stringViews.substring(stringViews.length - 3, stringViews.length);
    }
    if (views.toString().length < 4) {
        betterInfo = views;
    }

    return betterInfo;
}
function BestViewInfo(views){
    let bestInfo = "";
    let stringViews = views.toString();

    switch (true) {
        case ((stringViews.length >= 4) && (stringViews.length < 7)):
            bestInfo = stringViews[0] + "." + stringViews[1] + " K";
        break;

        case (stringViews.length >= 7):
            bestInfo = stringViews[0] + "." + stringViews[1] + " M";
        break;
    
        default:
            bestInfo = stringViews;
        break;
    }

    return bestInfo;
}

//IMPORTANT TO UNDERSTAND
/*
    options -> 1. onlyDays  2. onlyWeeks  3. onlyMonths other thing. Full display
    Example: 
        option = 1 -> Last Update = 19 day(s) ago
        option = 2 -> Last Update = 2 week(s) ago
        option = 3 -> Last Update = Less than a month(s) ago
        option = 4 or 0 or nothing -> Last Update = 2 weeks and 2 day(s) ago
*/
function BetterDateInfo(date, options) {
    let betterDate = "";
    
    let dateNow = new Date(Date.now());
    let betterDays = Math.abs(dateNow.getDate() - date.getDate());
    let betterMonths = Math.abs(dateNow.getMonth() - date.getMonth());
    let betterYears = Math.abs(dateNow.getFullYear() - date.getFullYear());

    let allDays = Math.floor((betterYears / 365) + (betterMonths * 30) + betterDays);
    console.log(allDays);

    switch (options) {
        case 1:
            if (allDays == 0) {
                //betterDate = "Right Now";
                betterDate = "Less than a day";
            }
            else{
                betterDate = allDays + " day(s)";
            }
        break;
        case 2:
            if (allDays < 7) {
                betterDate = "Less than a week";
            }
            else{
                betterDate = Math.floor(allDays / 7) + " week(s)";
            }
        break;
        case 3:
            if (betterMonths < 1) {
                betterDate =  "Less than a month";
            } else {
                betterDate = betterMonths + " month(s)";
            }
        break;
        case 4:
            if (allDays <= 365) {
                betterDate =  "Less than a year";
            } else {
                let theBestYear = Math.floor(allDays / 365);
                betterDate = theBestYear + " year(s)";
            }
        break;
        default:
            if (betterMonths > 12) {
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
        break;
    }


    return betterDate + " ago";
}


Search();