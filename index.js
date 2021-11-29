// FUNCTIONS FOR THE WEBSITE

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


// LOREM IPSUM TEXT USED FOR DEBUG PURPOSES
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae, suscipit dolorem officia laborum harum! Suscipit dignissimos molestias veritatis natus quos necessitatibus cupiditate, accusantium id vel blanditiis animi ut nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae, suscipit dolorem officia laborum harum! Suscipit dignissimos molestias veritatis natus quos necessitatibus cupiditate, accusantium id vel blanditiis animi ut nobis.";

const QUOTE_TEXT = document.getElementsByClassName("main-quote").item(0);
const JOURN_QUOTES = [
    "Our liberty depends on the freedom of the press, and that cannot be limited without being lost.",
    "Freedom of the press is a precious privilege that no country can forego.",
    "Freedom of the Press, if it means anything at all, means the freedom to criticize and oppose.",
    "The only security of all is in a free press.",
    "A free press can, of course, be good or bad, but most certainly, without freedom, the press will never be anything but bad."
]

let part = 0;
let partIndex = 0;
let valInterval;


valInterval = setInterval(Type, 100);