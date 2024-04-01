function setup () {
    createCanvas(500, 600);
}

    function draw () {
        background(100,149,237);
        textSize(45)
        text("Buna Ziua!", 50,80);
    
        // head
        fill(226, 168, 152);
        circle(250,275,250);
       
        // eyes
        strokeWeight(5);
        fill(255, 255, 255);
        ellipse(200,265,50,60);
        ellipse(295,265,50,60);
    
        // pupils
        fill(196, 146, 107);
        ellipse(208,262,30,40);
        ellipse(304,262,30,40);

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
        rect(190,190,20,20);

        fill(0);
        textSize(30);
        text("Maria Goman",270,550);
    
    
    }