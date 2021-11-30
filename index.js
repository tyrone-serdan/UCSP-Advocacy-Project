const QUOTE_TEXT = document.getElementsByClassName("main-quote").item(0);
const JOURN_QUOTES = [
    "Our liberty depends on the freedom of the press, and that cannot be limited without being lost.",
    "Freedom of the press is a precious privilege that no country can forego.",
    "Freedom of the Press, if it means anything at all, means the freedom to criticize and oppose.",
    "The only security of all is in a free press.",
    "A free press can, of course, be good or bad, but most certainly, without freedom, the press will never be anything but bad."
]

const CARD_TEXT = [
    {
        short: "We advocate for the safety of journalists, most importantly in areas with heavy conflict.",
        long: " Ensuring safety of the journalists allows them to spread information in areas where information may be heavily monitored, or prevented. We actively prevent the silence of the brave journalists that want to spread the truth, and tell the general public the truth about the recent happenings."
    },
    {
        short: "We aim to limit the frequency of how information gathered by media professionals is censored or thrown aside.",
        long: " We also aim to promote media transparency towards both all types of media outlets to ensure a healthy relationship between the nation and the journalists."
    },
    {
        short: "You can help us through spreading the word of our advocacy, the more people that know about the advocacy, the better.",
        long: " Spreading our advocacy allows our vision to succeed. Not only that, we may receive more aid by the large amount of people that sees what we aim to do to with journalism in The Philippines."
    },
]


let part = 0;
let partIndex = 0;
let valInterval;

// FUNCTIONS FOR THE WEBSITE

/**
 * 
 * @param {Element} link 
 * @param {Element} card
 * @param {Number} num 
 */
function changeCardText(link, card, num) {
    if (link.innerHTML == "Read Less") {
        link.innerHTML = "Read More";
        card.innerHTML = CARD_TEXT[num]["short"] + "..";
    } else {
        card.innerHTML = CARD_TEXT[num]["short"] + CARD_TEXT[num]["long"];
        link.innerHTML = "Read Less"
    }
}

/**
 * 
 * @param {String} card 
 */
function cardClick(card) {
    const NUM = new Number(card - 1);
    const CARD = document.querySelector(`#card-${card} .card-text`);
    const LINK = document.querySelector(`#card-${card} a`);

    changeCardText(LINK, CARD, NUM);
}

function warnUser() {
    const reqResponse = "This is a UCSP Project";
    let response = prompt("The website seen is made solely for a UCSP project, if you have read this, please type: " + reqResponse);

    if (response === null) warnUser();

    if (response.toLowerCase() != reqResponse.toLowerCase()) {
        warnUser();
    } else {
        return;
    }
}

function Type() { 
    var text = JOURN_QUOTES[part].substring(0, partIndex + 1);
    QUOTE_TEXT.innerHTML = text + '<span class="main-quote-effect">|</span>';
    partIndex++;

    if(text === JOURN_QUOTES[part]) {

        clearInterval(valInterval);
        setTimeout(function() {
            valInterval = setInterval(Delete, 50);
        }, 1000);
    }
}

function Delete() {

    var text =  JOURN_QUOTES[part].substring(0, partIndex - 1);
    QUOTE_TEXT.innerHTML = text + '<span class="main-quote-effect">|</span>';
    partIndex--;


    if(text === '') {
        clearInterval(valInterval);

        if(part == (JOURN_QUOTES.length - 1))
            part = 0;
        else
            part++;
        
        partIndex = 0;

        setTimeout(function() {
            valInterval = setInterval(Type, 100);
        }, 200);
    }
}


valInterval = setInterval(Type, 100);

// setTimeout(() => {
//     warnUser();
// }, 1000);