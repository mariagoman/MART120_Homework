
//character
var characterX = 100;
var characterY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//first obstable
var shapeX = 20;
var shapeY = 200;
var shapeXSpeed;
var shapeYSpeed;

//second obstacle
var enemyX = 300;
var enemyY = 50;
var enemyXSpeed;
var enemyYSpeed;

//mouse
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    enemyXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    enemyYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(50,50);
}

function draw()
{
    background(227,185,255);
    stroke(0);
    fill(0);

    createBorders(5);

    textSize(16);
    text("EXIT", width-50,height-50);

    drawCharacter();
    characterMovement;

    //obstacle 1
    fill(16,82,186);
    circle(shapeX, shapeY, 10);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    //obstacle 2
    fill(252,127,3);
    rect(enemyX, enemyY, 50, 50);

    enemyXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    enemyYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    enemyX += enemyXSpeed;
    enemyY += enemyYSpeed;

    //when character goes thru exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }

    //when obstacle goes out of border
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

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

    //for second obstacle
    enemyX += enemyXSpeed;
    enemyY += enemyYSpeed;

    if(enemyX > width)
    {
        enemyX = 0;
    }
    if(enemyX < 0)
    {
        enemyX = width;
    }
    if(enemyY > height)
    {
        enemyY = 0;
    }
    if(enemyY < 0)
    {
        enemyY = height;
    }
    
    //mouse details
    fill(152,68,158);
    circle(mouseShapeX, mouseShapeY, 20);
}

function characterMovement()
{
    // keys for character
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(255,253,108);
    circle(characterX,characterY,30);
}

function createBorders(thickness)
{
    fill(60,0,100)
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
