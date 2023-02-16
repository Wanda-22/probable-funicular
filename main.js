lipx=0;
lipy=0;

function preload() {
   x=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png'); 
}

function setup() {
    canvas=createCanvas(500,500);
    canvas.center();    
    s=createCapture(VIDEO);
    s.size(500,500);
    s.hide();

    p=ml5.poseNet(s,loaded);
    p.on('pose',ans);
}

function loaded() {
    console.log('posenet is loaded');   
}

function ans(result) {
    if(result.length>0) {
        console.log(result);
        lipx=result[0].pose.nose.x-25;
        lipy=result[0].pose.nose.y+15;
    }
}

function draw() {
    image(s,0,0,500,500);
    image(x,lipx,lipy,90,50);
}

function snap() {
    save('pic.png');    
}