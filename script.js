"use strict";

window.addEventListener("DOMContentLoaded", start);

const model = [22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14];

function start() {
    console.log("start");
    loop();
}

function loop() {
    console.log("loop");

    //displayData();
    setTimeout(displayData, 1000);
}

function getNumberOfCustomers() {
    console.log("getNumberOfCustomers");

    return Math.floor(Math.random()*32);  
}

function displayData() {
    console.log("displayData");
    const bar = document.createElement("div");

    for (let i = 0; i <= 40; i++) {
        console.log(i);
        bar.classList.add("bar");
        bar.style.height = model[i]/32*100 + "%";
        document.querySelector("#container").append(bar);
    }

    // model.forEach((obj) => {
    //     const bar = document.createElement("div");
    //     bar.classList.add("bar");
    //     bar.style.height = obj/32*100 + "%";
    //     document.querySelector("#container").append(bar);
    // });
    modifyModel();
}

function modifyModel() {
    console.log("modifyModel");

    const queueSize = getNumberOfCustomers();
    // model.push(queueSize);
    model.splice(39, 1, queueSize);
    loop();
}