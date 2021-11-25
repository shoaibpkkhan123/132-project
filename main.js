img="";
status = "";
function preload()
{
    img = loadImage('dog_cat.jpg');
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