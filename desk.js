img="";
status="";
function setup()
{
canvas = createCanvas(640, 420);
canvas.center();

objectDetector = ml5.objectDetector('cocossd', modelLoded);
document.getElementById("status").innerHTML = ": Detecting Objects";
}
function preload()
{
    img = loadImage('Desk.jpg');
}
function modelLoded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}
function draw()
{
image(img, 0, 0, 640, 420); 
fill("#FF0000"); 
text("Table", 100, 160); 
noFill();
stroke("#FF0000"); 
rect(100, 75, 500, 800 );

fill("#FF0000"); 
text("PC", 160, 110); 
noFill();
stroke("#FF0000"); 
rect(150, 85, 350, 210 );
}
