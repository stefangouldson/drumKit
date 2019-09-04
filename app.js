//play by mouse click
    //define sounds in js
let xb=document.getElementById("boomsound")
let xc=document.getElementById("clapsound")
let xh=document.getElementById("hihatsound")
let xk=document.getElementById("kicksound")
let xo=document.getElementById("openhatsound")
let xr=document.getElementById("ridesound")
let xs=document.getElementById("snaresound")
let xti=document.getElementById("tinksound")
let xto=document.getElementById("tomsound")

//function which plays specific sounds
function playboom(){xb.play();}
function playclap(){xc.play();}
function playhihat(){xh.play();}
function playkick(){xk.play();}
function playopen(){xo.play();}
function playride(){xr.play();}
function playsnare(){xs.play();}
function playtink(){xti.play();}
function playtom(){xto.play();}

//play by keyboard press

window.addEventListener("keydown",checkKeyPressed);

//object contain keycodes tied to sounds
const sound={
81:"./sounds/boom.wav",
87:"./sounds/clap.wav",
69:"./sounds/hihat.wav",
82:"./sounds/kick.wav",
65:"./sounds/openhat.wav",
83:"./sounds/ride.wav",
68:"./sounds/snare.wav",
70:"./sounds/tink.wav",
90:"./sounds/tom.wav",
}


function checkKeyPressed(i){
    i.preventDefault;                           //stops default action when a is pressed
    let keyCode=i.which;                        //keycode of whats pressed
    let theSound= new Audio(sound[keyCode]);    //passes keycode and uses it to id which sound
    theSound.play();                            //play sound
    action[keyCode]();                          //set/return the value
};
