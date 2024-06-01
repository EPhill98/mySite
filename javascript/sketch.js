let canvas;
let xlst = [];
let ylst = [];
let stepXLst = [];
let stepYLst = [];
let rlst = [];
let glst = [];
let blst = [];
let count = 0;

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.id('p5-canvas'); // Assign an ID to the canvas
    canvas.position(0, 0);
    background(240);
}

function draw() {
    background(240); // Clear the previous frame
    fill(0);
    
    

    let f = frameCount;
    if (f % 10 == 0) {
        addNewCircle();
    }

    for (let i = 0; i < ylst.length; i++) {
        ylst[i] = ylst[i] + (5*stepYLst[i]);
        xlst[i] = xlst[i] + stepXLst[i];

        fill(rlst[i], glst[i], blst[i]); // Set fill color before drawing the ellipse
        ellipse(xlst[i], ylst[i], 20, 20);

        if (ylst[i] > windowHeight - 10 || ylst[i] < 10) {
            stepYLst[i] *= -1;
        }
        if (xlst[i] > windowWidth - 10 || xlst[i] < 10) {
            stepXLst[i] *= -1;
        }
    }
}

function addNewCircle() {
    if (xlst.length < 50) {
        xlst[count] = random(15, width); // Random x-coordinate within canvas width
        ylst[count] = 20;
        stepYLst[count] = random(-1, 1); // Give some variation in vertical movement
        stepXLst[count] = random(-1, 1); // Random horizontal step
        rlst[count] = random(255);
        glst[count] = random(255);
        blst[count] = random(255);
        count++;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(240); // Ensure background is reset after resizing
    xlst = [];
    ylst = [];
    stepXLst = [];
    stepYLst = [];
    rlst = [];
    glst = [];
    blst = [];
    count = 0;
}
