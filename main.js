function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(700,150);
    canvas=createCanvas(550,550);
    canvas.position(50,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.group('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
    }
}