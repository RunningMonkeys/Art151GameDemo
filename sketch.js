var intro;
var drink;
var large;
var swimming;
//0-3 states of intro-swimming
var state = 0;

function preload()
{
	intro = loadImage('image/0-intro.jpg');
	drink = loadImage('image/1-drink.jpg');
	large = loadImage('large/2-large.jpg');
	swimming = loadImage('swimming/3-swimming.jpg');
}


function setup()
{
	createCanvas(1024, 768);
}

function draw()
{
	background(255);
	switch(state)
	{
		case 0:
			image(intro, 200,0);
			break;
		case 1:
			image(drink, 200,0);
			break;
		case 2:
			image(large, 200,0);
			break;
		case 3:
			image(swimming, 200,0);
			break;
		default:
	}
}

	