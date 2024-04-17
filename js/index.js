console.log("i");
Search();

function Search(){
    const siteInfo = "https://neocities.org/site/";
    const username = "user-maldito";//Place Here Your Neocities Username

    console.log("Initializing Search");
    let theInfo = GetSiteInfo(siteInfo, username);
    if (theInfo.length > 0) {
        
    }
}

function GetSiteInfo(siteInfo, username){
    let info = [];
    
    const neoWeb = async () => {
        //Initiate puppeteer (scrapping)
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });
    
        //Open a new Page
        const newPage = await browser.newPage();
        await newPage.goto(siteInfo + username , 
            {
                waitUntil: "domcontentloaded"
            }
        );
    
        //Get Data
        const getData = await newPage.evaluate(() => {
            let yourWebsiteData = {
                views: "",
                followers: "",
                updates: "",
                created: "",
                last_update: "",
            }
    
            const stadistic = document.querySelectorAll(".stat");
            for (let index = 0; index < stadistic.length; index++) {
                const stat = stadistic.item(index);
                const data = stat.children.item(0).textContent;
                yourWebsiteData[index] = data;
            }
    
            return yourWebsiteData; 
        });
    
        //Display the Info
        console.log(getData);
    
        //Close the browser
        await browser.close();
    }

    neoWeb();

    return info;
}

function PrettyCounter(){
    
}
