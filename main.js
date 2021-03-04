video="";
status="";


function preload(){
video=createVideo("video.mp4");
video.hide();
video.size(500,500);

}

function setup(){
canvas=createCanvas(500,500);
canvas.center();

}

function draw(){
image(video,0,0,500,500);
}

function play(){
objectdetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="Status:Detecting objects!! :D"
}

function modelloaded(){
console.log("modelloaded");
video.loop();
video.speed(1);
video.volume(0.5);
status=true;

}