import { phases, underPhase } from "./lists.js";

var url = "../Ciphered/";
window.history.replaceState(null, document.title, url);

var CipheredNFS = document.getElementById("GmtlivihNFS");

var typePhase = "Gmtlivih - Rshi Jsb Wxyhms";

var typeList = [
    typePhase,
];

var changeList = [];

localStorage.setItem("PageLoaded", "false");

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for(let i = 0; i < typePhase.length-1; i++) {
    typeList.push(typeList[0].substring(0, typePhase.length-[i+1]));
}

async function startupIntro() {
    for(let i = 0; i < underPhase.length; i++) {
        CipheredNFS.textContent = underPhase[i];
        await wait(500);
    }

    CipheredNFS.textContent = "";

    for(let i = 0; i < typePhase.length; i++) {
        CipheredNFS.textContent += typePhase[i] + "_";
        await wait(25);
        CipheredNFS.textContent = CipheredNFS.textContent.replace("_", "")

        if(CipheredNFS.textContent == typePhase) {
            CipheredNFS.textContent = `${typePhase}w`;
            changeList.push(CipheredNFS.textContent);
        }
    }

    for(let i = 0; i < phases.length; i++) {
        var q = phases[i].length;

        for(let x = 0; x < phases[i].length; x++) {
            q -= 1;
            
            if(changeList.length !== 0) {
                changeList.push(changeList[x].substring(0, q) + phases[i].substring(q, phases[i].length));
            }

            await wait(15);            
            CipheredNFS.textContent = changeList[x+1];
        }
        changeList = [CipheredNFS.textContent];
    }

    await wait(2125)
    location.replace("Gmtlivih.html");
}
startupIntro();