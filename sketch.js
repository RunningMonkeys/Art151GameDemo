var intro;
var drink;
var large;
var swimming;
//0-3 states of intro-swimming
var state = 0;

function preload()
{
	intro = loadImage('test.png');
}


function setup()
{
	createCanvas(1024, 768);
}

function draw()
{
	background(255);
	image(intro, 200,0)
	
}

	