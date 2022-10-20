"use strict";

function newLink(){
    let link = "https://ebird.org/checklist/S"
    let end = Math.floor(Math.random() * (90000000 - 10000000)) + 10000000;
    let final = link + end
    window.open(final);
}