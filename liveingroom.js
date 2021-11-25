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
    img = loadImage('Hall.jpg');
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
text("Sofa", 100, 160); 
noFill();
stroke("#FF0000"); 
rect(0, 150, 600, 100 );

fill("#FF0000"); 
text("Table", 510, 400); 
noFill();
stroke("#FF0000"); 
rect(500, 300, 100, 100 );

fill("#FF0000"); 
text("Oteman", 210, 400); 
noFill();
stroke("#FF0000"); 
rect(200, 300, 100, 100 );
}
