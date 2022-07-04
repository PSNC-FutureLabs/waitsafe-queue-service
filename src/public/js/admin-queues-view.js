const my_element1 = document.querySelector('.main-content');

const element = 
    "<element class='queue-element'><div class='queue-name'><div>Nazwa kolejki #</div></div><div class='queue-length'><div class='vl'></div><div>##</div></div><div class='queue-duration'><div class='vl'></div><div>##</div></div><div class='queue-open'><div class='queue-info'>&#x1F6C8;</div><button>OTWÓRZ</button></div></element>";

for(var i = 0; i< 20; ++i){    
    my_element1.insertAdjacentHTML('beforeend',element);
}