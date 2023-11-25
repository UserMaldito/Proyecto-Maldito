document.ready(JsonToPage());

async function JsonToPage() {
    const storiesRoutes = "../data/stories.json";

    let explosiveJson = JSON.parse(localStorage.getItem("stories"));
    if (explosiveJson == null) {
        await GetAndSetJsonFromLocal(storiesRoutes);
        explosiveJson = JSON.parse(localStorage.getItem("stories"));
    }
    console.log(explosiveJson);

    JsonToHtml(explosiveJson);
}

async function GetAndSetJsonFromLocal(linkJson) {
    //Fetch del JSON
    console.log("Buscando Link: \"" + linkJson + "\" ...");

    await fetch(linkJson)
    .then(resp => {
            if (resp.ok) {
                console.log("Encontrado! C:");
                return resp.json();
            }
            console.log("No Encontrado... :C");
        })
    .then(data => {
        console.log("¡Segunda Parte!");
        console.log(data);
        localStorage.setItem("stories", JSON.stringify(data));
    })
    .catch(error => console.log("Error: " + error + " ...")
    );

}

function JsonToHtml(storyCollection) {
    // let storyCollection = {
    //     "stories": [
    //         {
    //             "title": "Posibles Notas Muertas 1",
    //             "p": [
    //                     {"p1": "Esto es una prueba del párrafo 1"}                        ,
    //                     {"p2": "Esto es una prueba del párrafo 2"},
    //                     {"p3": "Esto es una prueba del párrafo 3"}
    //             ]
    //         },
    //         {
    //             "title": "Posibles Notas Muertas 2",
    //             "p": [
    //                     {"p1": "Esto es una prueba del párrafo 1"},
    //                     {"p2": "Esto es una prueba del párrafo 2"}
    //             ]
    //         },
    //         {
    //             "title": "Posibles Notas Muertas 3",
    //             "p": [
                    
    //                     {"p1": "Esto es una prueba del párrafo 1"},
    //                     {"p2": "Esto es una prueba del párrafo 2"},
    //                     {"p3": "Esto es una prueba del párrafo 3"},
    //                     {"p4": "Esto es una prueba del párrafo 4"},
    //                     {"p5": "Esto es una prueba del párrafo 5"}
                    
    //             ]
    //         }
    //     ]
    // }
    
    //Targeting Section and Append, After, the Article
    let section = document.querySelector("section");

    for (const story of storyCollection.stories) {

        //Container Article
        let appendStory = document.createElement("article");

        //Title of the Story
        let newTitle = document.createElement("h3");
        newTitle.textContent = story.title;
        appendStory.append(newTitle);

        //Line(s) of the Story
        for (let index = 0; index < story.p.length; index++) {
            if (((story.p[index] != undefined)) || (story.p[index] != null)){
                let paragraph = document.createElement("p");
                let part = "p" + (index + 1);
                paragraph.textContent = story.p[index][part];
                appendStory.append(paragraph);
            }
        }

        section.append(appendStory);
    }
}



// document.onload = (ev) => {
//     localStorage.clear();
//     JsonToPage();
// }
