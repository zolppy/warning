"use strict";
var log = console.log;
document.addEventListener("DOMContentLoaded", function () {
    var mbEl = document.querySelector(".app__info span");
    var progressEl = document.querySelector(".app__progress");
    var percentEl = document.querySelector(".app__percent-value");
    var sound = new Audio("/dist/sound/beep-02.wav");
    var total = 16384;
    var un = total / 100;
    var value = 0;
    var percent = 0;
    mbEl.textContent = value.toFixed(2).toString();
    progressEl.style.animationPlayState = "running";
    var interval = setInterval(function () {
        value += un;
        percent = parseInt(String((value * 100) / total));
        // mbEl.textContent = value.toFixed(2).toString();
        mbEl.textContent = (value / 1024).toFixed(2);
        percentEl.textContent = percent.toString();
        sound.play();
        if (value > 16384) {
            clearInterval(interval);
        }
    }, 1000);
});
