//character x and y
var characterX = 100;
var characterY = 100;
// key codes for letters
var w = 87;
var s = 83;
var d = 68;
var a = 65;
// shape x and y
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
// mouse click shape
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500,600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    createCharacter(200,350);
}

function draw()
{
    background(30,145,200);
    stroke(0);
    fill(0);
//createBorders function
createBorders(10);
//exit message
textSize(16);
text("Exit!", width-50, height-50)
//createCharacter(200,350);
drawCharacter();
fill(0,100,100);
circle(shapeX,shapeY,20)
characterMovement();
//enemy
fill(200,33,34);
circle(shapeX,shapeY, 10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
//move shape
shapeX += shapeXSpeed;
shapeY += shapeYSpeed;
// out of bounds
if(shapeX > width)
{
    shapeX = 0;
}
if(shapeX < 0)
{
    shapeX = width;
}
if(shapeY > height)
{
    shapeY = 0;
}
if(shapeY < 0)
{
    shapeY = height;
}
//exit check
if(characterX > width && characterY > width-50)
{
    fill(0);
    stroke(5);
    textSize(26);
    text("You win!", width/2-50, height/2-50);
}
//mouse click shape
fill(100,100,100);
circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
//key movement
{
    if(keyIsDown(w))
    { characterY -= 10;}
    if(keyIsDown(s))
    { characterY += 10;}
    if(keyIsDown(a))
    { characterX -= 10;
    console.log("movement:" + characterX);}
    if(keyIsDown(d))
    { characterX += 10;}
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(13,22,26)
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    //left
    rect(0,0,thickness,height);
    //top
    rect(0,0,width,thickness);
    //right
    rect(width-thickness,0,thickness,height-50);
    //bottom
    rect(0, height-thickness,width, thickness);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY; 
}
    /*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */