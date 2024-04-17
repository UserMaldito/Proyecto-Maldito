console.log("Init Script");
Search();

function Search(){
    const siteInfo = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=";
    const username = "user-maldito";//Place Here Your Neocities Username

    console.log("Initializing Search");
    let theInfo = GetSiteInfo(siteInfo, username);
    if (theInfo.success) {
        
    }
}

function GetSiteInfo(urlSite, username){
    let yourWebsiteData = {
        success: false,
        views: 0,
        hits: 0,
        created: "",
        last_update: "",
        domain: "",
        tags: [],
    }

    fetch(urlSite + username)
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
            //   [dd/MM/YYYY] 24/11/2014 (example)
            yourWebsiteData.created = created.getDate() + separatorDate + created.getMonth() + separatorDate + created.getFullYear();
            yourWebsiteData.last_update = updated.getDate() + separatorDate + updated.getMonth() + separatorDate + updated.getFullYear();
            
            yourWebsiteData.domain = data.info.domain;
            yourWebsiteData.tags = data.info.tags;

            console.log("Your website data:");
            console.log(yourWebsiteData);
        }
    })
    .catch(error => console.error(error));

    return yourWebsiteData;
}

function PrettyCounter(){
    const stadistic = document.querySelectorAll(".stat");
    for (let index = 0; index < stadistic.length; index++) {
        const stat = stadistic.item(index);
        const data = stat.children.item(0).textContent;
        yourWebsiteData[index] = data;
    }
}