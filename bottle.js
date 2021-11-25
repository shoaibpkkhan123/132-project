img="";
status="";
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
function preload()
{
    img = loadImage('Bottes.jpg');
}
function draw()
{
image(img, 0, 0, 640, 420); 
fill("#FF0000"); 
text("Bottles", 100, 160); 
noFill();
stroke("#FF0000"); 
rect(30, 75, 600, 800 );

}