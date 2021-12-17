function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('maroon');
}

function modelLoaded() {
    console.log('!...PoseNet is initialized!...!');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
    }
}