function preload() {}

function setup() {
    canvas = createCanvas(650, 550);
    canvas.position(250, 250);
    video = createCapture(VIDEO);
    video.hide();


}

function draw() {
    image(video, 200, 150, 250, 250);
    fill(255, 105, 60);
    stroke(200, 115, 80);
    circle(50, 50, 100);
    circle(600, 50, 100);
    circle(50, 500, 100);
    circle(600, 500, 100);
    fill(205, 100, 50);
    stroke(150, 110, 60);
    ellipse(325, 50, 65, 50);
    ellipse(325, 500, 65, 50);

}

function take_snapshot() {
    save("siyona.png");

}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;

}