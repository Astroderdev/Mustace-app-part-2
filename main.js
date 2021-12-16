noseX = 0;
noseY = 0;
function preload(){

}
function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on("pose", GotPoses());
}

function modelLoaded(){
    console.log("Posenet is initialized!");
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function save_img(){
    save("Mustache funny image with mustace.png");
}

function GotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}