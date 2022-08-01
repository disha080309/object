Status = "";
Bulb_image = "";

function preload(){
    Bulb_image = loadImage("Bulb.jpg");
}

function setup(){
    canvas = createCanvas(440,450);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(Bulb_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Bulb_image,0,0,440,450);
}