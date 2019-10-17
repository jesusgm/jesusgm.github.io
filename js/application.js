window.addEventListener('load', function () {
    setInterval(changeColors, 3000)
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