 song ="";

 leftWristX ="";
 leftWristY ="";

 rightWristX ="";
 rightWristY ="";


 function preload(){
 song = loadSound('music.mp3');
 }

 function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);

    posenet.on('Pose', gotPoses);

}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);

        leftWristX =results[0].pose.leftWrist.x;
        leftWristY =results[0].pose.leftWrist.y;
        console.log("left Wrist X ="+leftWristX+"left Wrist Y ="+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist X ="+rightWristX+"right wrist Y ="+rightWristY);

    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function modelLoaded(){
    console.log('Posenet is Initailized');
}