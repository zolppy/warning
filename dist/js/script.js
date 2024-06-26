"use strict";
var button = document.querySelector(".app__btn");
var alertSound = new Audio("./dist/sound/alert.mp3");
alertSound.loop = true;
alertSound.autoplay = true;
document.addEventListener("DOMContentLoaded", function () {
    var mbEl = document.querySelector(".app__info span");
    var progressEl = document.querySelector(".app__progress");
    var percentEl = document.querySelector(".app__percent-value");
    var total = 16384;
    var un = total / 100;
    var value = 0;
    var percent = 0;
    button.click();
    mbEl.textContent = value.toFixed(2).toString();
    progressEl.style.animationPlayState = "running";
    var interval = setInterval(function () {
        value += un;
        percent = parseInt(String((value * 100) / total));
        mbEl.textContent = (value / 1024).toFixed(2);
        percentEl.textContent = percent.toString();
        if (value > 16384) {
            clearInterval(interval);
        }
    }, 1000);
});
button.addEventListener("click", function () {
    alertSound.play();
});
