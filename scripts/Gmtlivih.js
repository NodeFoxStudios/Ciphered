import { encodeList, decodeList } from "./lists.js";

var url = "../Ciphered/Gmtlivih";
window.history.replaceState(null, document.title, url);

var PageLoaded = localStorage.getItem("PageLoaded");
localStorage.setItem("PageLoaded", "true");

if(PageLoaded == "true") {
    location.replace("../");
}

var portraitIndicator = document.getElementById("portraitIndicator");

var ecodebox = document.getElementById("ecodebox");
var dcodebox = document.getElementById("dcodebox");

var TabRGB = document.getElementById("TabRGB");
var TabCaesar = document.getElementById("TabCaesar");

ecodebox.addEventListener("keyup", function() {
    var input = ecodebox.innerHTML;
    var repECODE = input.toLowerCase().replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|.|,/gi, function(x) {
        return encodeList[x];
    })

    dcodebox.innerHTML = repECODE;
})

dcodebox.addEventListener("keyup", function() {
    var input = dcodebox.innerHTML;
    var repECODE = input.toLowerCase().replace(/#ffffff|#0000b4|#af0d66|#92f846|#ffc82f|#ff4e28|#ff8000|#b9b9b9|#ebebde|#646464|#ffff00|#371370|#ffff96|#ca3e5e|#cd913f|#0c4b64|#ff0000|#af9b32|#1f9b32|#254619|#994619|#792187|#538cd0|#5332ff|#009a25|#b2dccd|#ff00e5|#e500e5|#e5ffe5|#e5ffff|#e5ff00|#00ff00|#00e500|#00e5e5|#00e5ff|#ffe5ff|#0f0f0f|#e5e5e5|#000000|#320000|#003200|#000032|#8b0cdc|#14056b|#cbef30|#5a5dd2|#a0310a/gi, function(x) {
        return decodeList[x];
    })

    ecodebox.innerHTML = repECODE;

    const hasLower = (e) => /[a-z]/.test(e);

    if(ecodebox.innerHTML.includes("DIV")) {
        ecodebox.innerHTML = ecodebox.innerHTML.replaceAll("DIV", "<br>");
        dcodebox.innerHTML = dcodebox.innerHTML.replaceAll("#92f846#ebebde#792187", "<br>");
    }
    if(dcodebox.innerHTML.includes("<br><br>")) {
        dcodebox.innerHTML = dcodebox.innerHTML.replaceAll("<br><br>", "<br>");
    }
    if(dcodebox.innerHTML.includes("#0000b4#af9b32")) {
        dcodebox.innerHTML = dcodebox.innerHTML.replaceAll("#0000b4#af9b32", "&nbsp;");
    }
})

TabCaesar.addEventListener("click", function() {
    ecodebox.style.display = "none";
    dcodebox.style.display = "none";

    TabRGB.style.background = "black";
    TabRGB.style.color = "white";
    TabRGB.style.marginTop = "95px";

    TabCaesar.style.background = "white";
    TabCaesar.style.color = "black";
})
TabCaesar.addEventListener("mouseover", function() {

    TabCaesar.style.cursor = "pointer";

    if(TabCaesar.style.background == "white") {
        return;
    } else {
        TabCaesar.style.background = "white";
        TabCaesar.style.color = "black";
        TabCaesar.style.marginTop = "85px";
    }
})
TabCaesar.addEventListener("mouseout", function() {
    if(ecodebox.style.display == "none") {
        return;
    } else {
        TabCaesar.style.background = "black";
        TabCaesar.style.color = "white";
        TabCaesar.style.marginTop = "95px";
    }
})

TabRGB.addEventListener("click", function() {
    ecodebox.style.display = "inline";
    dcodebox.style.display = "inline";

    TabCaesar.style.background = "black";
    TabCaesar.style.color = "white";
    TabCaesar.style.marginTop = "95px";

    TabRGB.style.background = "white";
    TabRGB.style.color = "black";
})
TabRGB.addEventListener("mouseover", function() {

    TabRGB.style.cursor = "pointer";

    if(TabRGB.style.background == "white") {
        return;
    } else {
        TabRGB.style.background = "white";
        TabRGB.style.color = "black";
        TabRGB.style.marginTop = "85px";
    }
})
TabRGB.addEventListener("mouseout", function() {
    if(ecodebox.style.display == "inline") {
        return;
    }
    else
    if(ecodebox.style.display == "none") {
        TabRGB.style.background = "black";
        TabRGB.style.color = "white";
        TabRGB.style.marginTop = "95px";
    }
})