async function Search(){
    const siteInfo = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=";
    const username = "user-maldito";//Place Here Your Neocities Username

    console.log("Initializing Search");
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
        last_update: "",
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
        //console.log(data);
        if (data.result == "success") {
            const separatorDate = "/";
            let created = new Date(data.info.created_at);
            let updated = new Date(data.info.last_updated);

            yourWebsiteData.success = true;
            yourWebsiteData.name = data.info.sitename;
            yourWebsiteData.views = data.info.views;
            yourWebsiteData.hits = data.info.hits;
            //   [dd/MM/YYYY] 24/11/2014 --- 12:36:58 (example)
            yourWebsiteData.created = created.getDate() + separatorDate + created.getMonth() + separatorDate + created.getFullYear() + " - " + created.getHours() + ":" + created.getMinutes() + ":"  + created.getSeconds();
            yourWebsiteData.last_update = updated.getDate() + separatorDate + updated.getMonth() + separatorDate + updated.getFullYear() + " - " + updated.getHours() + ":" + updated.getMinutes() + ":" + updated.getSeconds();
            
            yourWebsiteData.domain = data.info.domain;
            yourWebsiteData.tags = data.info.tags;

            console.log("Your website data:");
            console.log(yourWebsiteData);
        }
    })
    .catch(error => console.error(error));

    return yourWebsiteData;
}

function SetCounterInfo(webData){
    let viewBox = document.querySelector("#views");
    let createdBox = document.querySelector("#created");
    let updatedBox = document.querySelector("#updated");

    viewBox.innerText ="My views: " + webData.views;
    createdBox.innerText = 'Created: ' + webData.created;
    updatedBox.innerText = `Updated: ${webData.last_update}`;

    console.log("Write it down");
}

Search();