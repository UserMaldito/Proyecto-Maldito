const limit = "10";
const method = "user.getrecenttracks";
const user = "User-Maldito";
const format = "json";
const apiKey = "d64ae0b5425a312f561abc480aea7ba0";
const listening = "true";
const link = `http://ws.audioscrobbler.com/2.0/?limit=${limit}&method=${method}&user=${user}&api_key=${apiKey}&format=${format}`;

let dataBuilder = (data) => {
    let recentTracksWrite = document.querySelector(".recent-tracks");

    let subtitle = document.createElement("h3");
    subtitle.innerHTML = "Recent Tracks";
    subtitle.title = "What User Is Listening";
    subtitle.id = "recent-tracks";
    recentTracksWrite.append(subtitle);

    let trackList = document.createElement("ul");

    data.recenttracks.track.forEach(element => {

        //Inicio del Section (donde volcamos el contenido de las canciones)
        let trackWrite = document.createElement("li");
        trackWrite.className = "track";
        trackWrite.style.display = "flex";
        trackWrite.style.flexDirection = "row";
        trackWrite.style.justifyContent = "space-evenly";
        trackWrite.style.alignItems = "center";
        

        //Song Details
        let songDetails = document.createElement("article");
        songDetails.style.display = "flex";
        songDetails.style.flexDirection = "column";
        songDetails.style.justifyContent = "center";

        //Inside that attribute, there is a Boolean that define if the song is currently playing
        if (element["@attr"]) {
            let nowPlaying = document.createElement("p");
            nowPlaying.style.fontStyle = "italic";
            nowPlaying.textContent = "Now playing";
            songDetails.append(nowPlaying);
        }

        //Title of the song
        let titleWrite = document.createElement("span");
        titleWrite.textContent = element.name;
        songDetails.append(titleWrite);

        //Artist
        let artistWrite = document.createElement("span");
        artistWrite.textContent = element.artist["#text"];
        songDetails.append(artistWrite);

        //Cover Art
        let imageWrite = document.createElement("img");
        imageWrite.src = element.image[2]["#text"];
        imageWrite.alt = element.name + " " + element.album["#text"];
        imageWrite.height = 200;
        imageWrite.width = 200;

        trackWrite.append(imageWrite, songDetails);

        //Let's stuff the track
        trackList.appendChild(trackWrite);
    });

    recentTracksWrite.appendChild(trackList);

    recentTracksWrite.style.border = "1px solid white";
    recentTracksWrite.style.height = "500px";
    recentTracksWrite.style.overflow = "scroll";
};

let fetchRequest = async (link) => {
    await fetch(link)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        dataBuilder(data);
    });
};



fetchRequest(link);