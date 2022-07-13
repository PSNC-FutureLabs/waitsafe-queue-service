//const { isInterfaceDeclaration } = require("typescript");


window.setTimeout( function() {
    window.location.reload();
}, 30000);



window.onload = function() {
    init();
    startCounter();
}



function init(){

}



function startCounter()
{
    var target = document.getElementById("person-counter");

    var len = document.getElementById("card-list").getElementsByTagName("li").length

    counterVariationBCaseUpdate(target, len);

    var link = document.getElementById("waitsafe-link").innerHTML;

    new QRCode(document.getElementById("qrcode"), link);
}

function counterVariationBCaseUpdate(target, len) 
{
    if(len === 1) {
        target.innerHTML = len + '<font class="blue-navy"> osoba</font>';
    }
    else if(len >= 2 && len < 10) {
        target.innerHTML = len + '<font class="blue-navy"> osoby</font>';
    }
    else{
        target.innerHTML = len + '<font class="blue-navy"> osób</font>';
    }
}

/*
document.onreadystatechange = function () {
    if (document.readyState === "interactive") {

        document.body.innerHTML = '<h4><code>ul</code> with <i>ul_o</i> has '+document.getElementById("ul_o").getElementsByTagName("li").length +' <code>li</code> Tags</h4>';
    }
}*/

/*
const my_element1 = document.querySelector('.main-content');

const element = 
    "<element class='queue-element'><div class='queue-name'><div>Nazwa kolejki #</div></div><div class='queue-length'><div class='vl'></div><div>##</div></div><div class='queue-duration'><div class='vl'></div><div>##</div></div><div class='queue-open'><div class='queue-info'>&#x1F6C8;</div><button>OTWÓRZ</button></div></element>";

for(var i = 0; i< 20; ++i){    
    my_element1.insertAdjacentHTML('beforeend',element);
}*/

