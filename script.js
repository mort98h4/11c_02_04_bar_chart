"use strict";

window.addEventListener("DOMContentLoaded", start);

const model = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

function start() {
    console.log("start");
    loop();
}

function loop() {
    console.log("loop");
    
    model.forEach((obj) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = obj/32*100 + "%";
        document.querySelector("#container").append(bar);
    });

    //setTimeout(loop, 1000);
}

function getNumberOfCustomers() {
    console.log("getNumberOfCustomers");
}

function displayData() {
    console.log("displayData");
}

function modifyModel() {
    console.log("modifyModel");
}