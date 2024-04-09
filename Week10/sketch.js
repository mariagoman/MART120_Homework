var headX = 208;
var headY = 262;
var headDirection = 1;

var firstpupilX= 200;
var firstpupilY= 265;
var firstpupilDirection = 1;

var secondpupilX= 304;
var secondpupilY= 262;
var secondpupilDirection = 1;

var hairclipX = 190;
var hairclipY = 190;
var hairclipDirection = 1;

var size = 45;
var count = 0;
var sizeDirection = 2;

var movement;

function setup () {
    createCanvas(500, 600);
    movement = floor(random() * 10) + 1;
}

    function draw () {
        background(100,149,237);

        // title
        textSize(size)
        size+= sizeDirection;
        count++;
        if(count > 5)
        {
            sizeDirection *=-1;
            count = 0;
        }
        text("Buna Ziua!", 50,80);
    
        // head
        fill(226, 168, 152);
        circle(headX,headY,250);
        headX+=headDirection;
        if(headX >= 375 || headX <= 125)
        {
            headDirection *= -1;
            movement *= -1;
        } 

       
        // firsteye
        strokeWeight(5);
        fill(255, 255, 255);
        ellipse(200,265,50,60);
       
        //secondeye
        strokeWeight(5);
        fill(255, 255, 255);
        ellipse(295,265,50,60);
    
        // firstpupil
        fill(196, 146, 107);
        ellipse(firstpupilX,firstpupilY,30,40);
        firstpupilY+=firstpupilDirection;
        if(firstpupilY >= 580 || firstpupilY <= 20)
        {
            firstpupilDirection *= -1;
        }

        // secondpupil
        fill(196, 146, 107);
        ellipse(secondpupilX,secondpupilY,30,40);
        secondpupilY+=secondpupilDirection;
        if(secondpupilY >= 580 || secondpupilY <= 20)
        {
            secondpupilDirection *= -1;
        }

        // nose
        triangle(240, 300, 250, 280, 260, 300);
        
        // mouth
        fill(204, 65, 0);
        triangle(245,335,215,320,275,320)

        // hair
        fill(127, 67, 41);
        triangle(120, 250, 140, 145, 280, 150);
        triangle(380, 250, 250, 150, 360, 150);
        triangle(130, 200, 100, 380, 200, 500);
        triangle(120, 250, 250, 150, 360, 150);
        triangle(300, 500, 370, 200, 400, 380);

        // accessories
        fill(255, 127, 0);
        line(200, 200, 180, 180);

        //hairclip
        fill(255, 127, 0);
        rect(hairclipX,hairclipY,20,20);
        hairclipX+=hairclipDirection;
        if(hairclipX >= 480 || hairclipX <= 2)
        {
            hairclipDirection *= -1;
        }

        fill(0);
        textSize(30);
        text("Maria Goman",270,550);
    
    
    }