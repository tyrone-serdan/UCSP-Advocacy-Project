let bool = new Boolean();

function warnUser() {
    bool = confirm("WARNING! THIS WEBSITE IS A SCHOOL PROJECT AND NOT A GENUINE ADVOCACY CAMPAIGN. PLEASE PRESS OK IF YOU HAVE READ THIS MESSAGE.");
}

setInterval(warnUser(), 3000);