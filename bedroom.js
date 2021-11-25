img="";
status="";
function preload()
{
    img = loadImage('Bedroom.jpg');
}
function setup()
{
canvas = createCanvas(640, 420);
canvas.center();

objectDetector = ml5.objectDetector('cocossd', modelLoded);
document.getElementById("status").innerHTML = ": Detecting Objects";
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
text("Bed", 45, 355); 
noFill();
stroke("#FF0000"); 
rect(0, 250, 1000, 150 );

fill("#FF0000"); 
text("Lamp", 500, 100); 
noFill();
stroke("#FF0000"); 
rect(450, 0, 150, 150 );

fill("#FF0000"); 
text("AC", 250, 100); 
noFill();
stroke("#FF0000"); 
rect(150, 0, 150, 150 );
}
