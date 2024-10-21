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
        "Oh, hello there! You have reach successfully the User's home page. Take a seat and enjoy his awesome old school website."
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
        "curl https://iamuser.fun/Offline/txt/thoughts.txt > ideas.txt",
        "Here you can read some of his stories, learn something about programming and know him better."
    ];

    let randomNumber = parseInt(Math.random() * (messages.length));
    let theDescriptionMessage = messages[randomNumber];
    messageDOM.description.innerHTML = theDescriptionMessage;
};
let changelogMessage = () =>{
    const messages = [
        "It's just a changelog...",
        "Changelog Message Test",
        "What changes? Everything is new.",
        "Take a look what changed while you aren't here."
    ];

    let randomNumber = parseInt(Math.random() * (messages.length));
    let theChangelogMessage = messages[randomNumber];
    messageDOM.changelog.innerHTML = theChangelogMessage;
};

welcomeMessage();
descriptionMessage();
changelogMessage();
