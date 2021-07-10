window.addEventListener('load', function () {
    setInterval(changeColors, 10000);

    initializeListeners();
});

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getRandomBetween(start, end) {
    return Math.floor(Math.random() * end) + start;
}

function changeColors() {
    var d = new Date();
    var n = d.getSeconds();

    var red = getRandomBetween(150, 255);
    var green = getRandomBetween(150, 255);
    var blue = getRandomBetween(150, 255);
    var bgcolor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.style.backgroundColor = bgcolor;

    var red = getRandomBetween(0, 200);
    var green = getRandomBetween(0, 200);
    var blue = getRandomBetween(0, 200);
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";

    document.body.style.color = color;

}

function initializeListeners(){
    //selectors
    var closeBtn = document.querySelector(".close-contact");
    var contactSection = document.querySelector("#contact");
    var showContactBtn = document.querySelector("#show-contact-btn");
    var contactForm = document.querySelector(".contact-form")


    showContactBtn.addEventListener("click", function(e){
        e.preventDefault();
        contactSection.classList.toggle("hidden");
    });
    closeBtn.addEventListener("click", function(e){
        e.preventDefault();
        contactSection.classList.toggle("hidden");
    });

    contactSection.addEventListener("submit",  function(e){
        e.preventDefault();

        const data = new FormData(e.target)
        const dataEntries = Array.from(data.entries());

        const body = {};

        dataEntries.forEach(entry => {
            body[entry[0]] = entry[1];
        });

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var config = { 
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: headers
        };

        const host = "http://jesusgm.ddns.net"

        var request = new Request(`${host}/jesusgm.github.io`, config);

        fetch(request)
            .then(res => res.json())
            .then(res=> {
                console.log(res);
                contactSection.classList.toggle("hidden");
            }).catch(error => {
                console.error(error);
                contactSection.classList.toggle("hidden");
            });
    })

}