var songPreview1 = document.getElementById("songPreview1"); 
var songCover1 = document.getElementById("songCover1");
songPreview1.volume = 0.4; 
songCover1.addEventListener("mouseover",playAudio1);
songCover1.addEventListener("mouseout",pauseAudio1);

var songPreview2 = document.getElementById("songPreview2"); 
var songCover2 = document.getElementById("songCover2");
songPreview2.volume = 0.4; 
songCover2.addEventListener("mouseover",playAudio2);
songCover2.addEventListener("mouseout",pauseAudio2);

var songPreview3 = document.getElementById("songPreview3"); 
var songCover3 = document.getElementById("songCover3");
songPreview3.volume = 0.4; 
songCover3.addEventListener("mouseover",playAudio3);
songCover3.addEventListener("mouseout",pauseAudio3);

function playAudio1() {
    songPreview1.play();
} 

function pauseAudio1() { 
    songPreview1.pause(); 
} 

function playAudio2() {
    songPreview2.play();
} 

function pauseAudio2() { 
    songPreview2.pause(); 
} 

function playAudio3() {
    songPreview3.play();
} 

function pauseAudio3() { 
    songPreview3.pause(); 
} 
