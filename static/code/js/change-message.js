const messageDOM = {
    welcome: document.querySelector("#main-article #greeting .welcome-message"),
    description: document.querySelector("#main-article #description+article .welcome-message"),
    changelog: document.querySelector("#main-article #changelog+article .welcome-message"),
    thoughts: document.querySelector("#main-article #thoughts+article header h3"),
};

let welcomeMessage = () =>{
    const messages = [
        "Hi! Welcome to User's website! Read his frenzy entry.",
        "Hi! Welcome to User's Weird Website!",
        "Why are you spying on this website? Beware of the owner: User",
        "What's up, internet. User's webpage is online.",
        "Remember to stay Up-To-Date (and hydratated).",
        "alert('https://iamuser.fun says: Remember to stalk him on IG.');",
        "I hope to see you soon :D *virtual hug*",
        "User says: How do get in here?",
        "Welcome Message Test",
        "Hi! Hi! Hi! ^_^",
        "return Ok('The Usual?');",
        "Oh, hello there! You have reach successfully the User's home page. Take a seat and enjoy his awesome old school website.",
        "Aww, hello there! I hope you are having a great day!",
        "The usual, pal?",
        "Yo solía ser un aventurero como tú. Hasta que recibí una flecha en la rodilla...",
        "Now that I have your attention, let me tell you a secret: I am User!",
        "..................................................... Sorry, I'm shy",
        "................................................ Sorry, I'm just a little bit shy",
        "........................................ Sorry, I just don't know what to say",
        "................................"
    ];

    let randomNumber = parseInt(Math.random() * (messages.length));
    let theWelcomeMessage = messages[randomNumber];
    messageDOM.welcome.innerHTML = theWelcomeMessage;
};
let descriptionMessage = () =>{
    const messages = [
        "User's madness is being write it right here (Maybe even right now?). Read it (if you can)",
        "Silly website made by (You guessed it) User. Please, enjoy!",
        "User says: If you're bored, read something I made. Let's stay bored together",
        "If you're interested in Programming, keep looking!!",
        "Description Message Test",
        "Enjoy this tiny disaster webpage :3",
        "What are you doing in my WebPage?!",
        "Oh, still reading..? Hmmm... Say Cheese! And... and... And do a backflip! And... Oh my god, stop reading already! I dont't know what I can say now.. -_-!",
        "................................",
        "A website called 'iamuser.fun'. -20 boredom, +10 creativity, +15 fun, -5 Internet, +0.1% all damage",
        "curl https://iamuser.fun/Offline/txt/thoughts.txt > ideas.txt",
        "Here you can read some of his stories, learn something about programming and know him better.",
        "Free Content! (But not free of bugs)",
        "I think we still have some space for you, so... get confy and enjoy the ride!",
        "I hope you find something uninteresting here! (If you find something interesting, please let me know, is a bug!)",
        "Maybe my web have some bugs because I like butterflies..."
    ];

    let randomNumber = parseInt(Math.random() * (messages.length));
    let theDescriptionMessage = messages[randomNumber];
    messageDOM.description.innerHTML = theDescriptionMessage;
};
let changelogMessage = () =>{
    const messages = [
        "It's just a changelog...",
        "Changelog Message Test",
        "................................",
        "What changes? Everything is new.",
        "Take a look what changed while you aren't here.",
        "Life is changing, why not this too?",
        "The webpage just leveled up! See the stats here",
        "Wanna see the past and the present? Down here is the change and remember that you write your future ^^",
        "The world is changing, why not this too?",
        "The changelog is here!",
        "Whoops! I forgot to update the changelog...",
        "I don't know what to say... I just wanted to say 'Hello :3'.",
    ];

    let randomNumber = parseInt(Math.random() * (messages.length));
    let theChangelogMessage = messages[randomNumber];
    messageDOM.changelog.innerHTML = theChangelogMessage;
};

welcomeMessage();
descriptionMessage();
changelogMessage();
