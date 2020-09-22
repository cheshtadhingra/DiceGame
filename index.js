function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var tempVariable = getRandomInt(1 , 6);
var lf = document.getElementsByClassName("img1");
console.log(lf);console.log("hello");