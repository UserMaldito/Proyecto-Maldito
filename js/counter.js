//Thanks sadgrl/goblin-heart for the tutorial. I was lost hehe 
//Link of the tutorial: (https://goblin-heart.net/sadgrl/learn/articles/last-update-visitors)

Search();

async function Search(){
    const siteInfo = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=";
    const username = "user-maldito";//Place Here Your Neocities Username

    let theInfo = await GetSiteInfo(siteInfo, username);
    if (theInfo.length > 0) {
        
    }
}


async function GetSiteInfo(siteInfo, username){
    let info = [];
    //Searching site info in "https://weirdscifi.ratiosemper.com/neocities.php?sitename=" + "Your Pretty Website"
    let mysearch = await fetch(siteInfo + username)
    //My 1st then will tell you if you have been found or not
    .then(resp => {
        let message = "I can't see you :c";
        if(resp.ok){    //if successful (do funky stuff)
            message = "He he, I Found U!";
            return resp.json();
        }
        //Not found :c
        console.log(message);
    })
    //The 2nd then (i you have been found) reveal the stats
    .then(data => {
        //If Not found, show nothing
        if (data != undefined) {
            //Demo of the data in the console
            console.log("Your Data: \n");
            console.log(data);
            console.log("Specific Data Example: \n");
            console.log("Total views: " + data.info.views);
            console.log("Total hits: " + data.info.hits);
            console.log("Last Time Updated: " + data.info.last_updated);
            let date = new Date(data.info.last_updated);
            console.log("Last Updated: " + date.getMonth() + " / " +  + date.getDate() + " / " + date.getFullYear());
            //-- Collecting Data And Storing :D
            let isFound = false;
            if (data.result == "success") {
                isFound = true;
            }

            info.push("found", isFound);
            info.push("sitename", data.info.sitename);
            info.push("views", data.info.views);
            info.push("hits", data.info.hits);
            info.push("born", new Date(data.info.created_at));
            info.push("updated", new Date(data.info.last_updated));
            info.push("domain", data.info.domain);
            info.push("tags", data.tags);
        }
    })
    //Terrible Error During Something (Ctrl + Z x20 and is probably fixed)
    .catch(error => console.log(`${error}`));

    return info;
}

function PrettyCounter(){
    
}