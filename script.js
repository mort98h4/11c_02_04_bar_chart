"use strict";

window.addEventListener("DOMContentLoaded", start);

const model = [22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14, 22, 30, 2, 3, 14];

function start() {
    console.log("start");
    loop();
}

function loop() {
    console.log("loop");

    displayData();
    modifyModel();
    setTimeout(loop, 1000);
}

function getNumberOfCustomers() {
    console.log("getNumberOfCustomers");

    return Math.floor(Math.random()*32);  
}

function displayData() {
    console.log("displayData");

    document.querySelector("#container").innerHTML = "";

    for (let i = 0; i <= 39; i++) {
       //console.log(i);
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = model[i]/32*100 + "%";
        document.querySelector("#container").append(bar);
    } 

    
}

function modifyModel() {
    console.log("modifyModel");

    const queueSize = getNumberOfCustomers();
    model.shift();
    model.push(queueSize);
}