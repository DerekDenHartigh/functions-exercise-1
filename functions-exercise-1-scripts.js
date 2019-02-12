"use strict";
/*
FUNCTIONS EXERCISE 1
Skills: Functions
● Write a function named getAreaOfCircle. It takes a radius parameter. It calculates and
returns the area of a circle with that radius.
● Write a function named getCircumferenceOfCircle. It takes a radius parameter. It
calculates and returns the circumference of a circle with that radius.
● Write a function named getAreaOfSquare. It takes a side parameter. It calculates and
returns the area of a square with that side length.
● Write a function named getAreaOfTriangle. It takes two parameters: base and height.
It calculates and returns the area of a triangle with that base and height.
Call each of these functions and log the result to the console. (NOTE: None of these functions
should use console.log within them. Instead, they must return the calculated value.)
*/

// parseInt(string, radix); - radix = 10 for decimal system

function getAreaOfCircle(){
    let radius = parseInt(prompt("What's your radius?"), 10);
    if ((radius==="" || isNaN(radius)===true)) {console.log("ERRROR")}
    else {
        let area = (3.14*radius*radius);
        console.log(`Your circle has an area of ${area} unspecified units squared.`);
    }
}

function getCircumferenceOfCircle(){
    let radius = parseInt(prompt("What's your radius?"), 10);
    if ((radius==="" || isNaN(radius)===true)) {console.log("ERRROR")}
    else{
        let circumference = (3.14*2*radius);
        console.log(`Your circle has a circumference of ${circumference} unspecified units.`);
    }
}

function getAreaOfSquare(){
    let sideLength = parseInt(prompt("What's the length of one side?"), 10);
    if ((sideLength==="" || isNaN(sideLength)===true)) {console.log("ERRROR")}
    else {
        let area = (sideLength*sideLength)
        console.log(`Your square has an area of ${area} unspecified units squared.`);
    }
}

function getAreaOfTriangle(){
    let base = parseInt(prompt("What's your base length?"), 10);
        if ((base==="" || isNaN(base)===true)) {console.log("ERRROR")}
    let height = parseInt(prompt("What's your height?"), 10);
        if ((height==="" || isNaN(height)===true)) {console.log("ERRROR")}
    else {
        let area = (height*base/2);
        console.log(`Your triangle has an area of ${area} unspecified units squared.`)
    }
} 

function getAreaOfTriangle2(){
    let side1 = parseInt(prompt("What's your first length?"), 10);
    if ((side1==="" || isNaN(side1)===true)) {console.log("ERRROR")}
    let side2 = parseInt(prompt("What's your second length?"), 10);
    if ((side2==="" || isNaN(side2)===true)) {console.log("ERRROR")}
    let side3 = parseInt(prompt("What's your third length?"), 10);
    if ((side3==="" || isNaN(side3)===true)) {console.log("ERRROR")}
    let triangleSideArray = [side1,side2,side3];
    triangleSideArray.sort();
    let base = triangleSideArray.pop();
    if ((base==="" || isNaN(base)===true)) {console.log("ERRROR")}
let height = parseInt(prompt("What's your height?"), 10);
    if ((height==="" || isNaN(height)===true)) {console.log("ERRROR")}
else {
    let area = (height*base/2);
    console.log(`Your triangle has an area of ${area} unspecified units squared.`)
}
}
/*
    made this so all one needs to do is input all side lengths of triangle without knowing what a base is, maybe will add more to calculate height for them based on side lengths?
    just realized this is dumb, any side can be the 'base' and the height changes accordingly...  what would make it useful, maybe,
    would be to have it calculate the angle based off 2 of the sides (soh cah toa style), then figure out the height from that by breaking the
    triangle in 2 and solving for the height that way.. but meh, I don't feel like doing a trigonometry recap atm.
*/