let intro;
let drink;
let large;
let swimming;
//0-3 states of intro-swimming
let state = 0;

let typed = "";
let hasCried = false;

function preload()
{
	intro = loadImage('images/0-intro.jpg');
	drink = loadImage('images/1-drink.jpg');
	large = loadImage('images/2-large.jpg');
	swimming = loadImage('images/3-swimming.jpg');
}


function setup()
{
	createCanvas(1024, 768);
	textFont("Helvetica");
	textSize(22);
	textAlign(CENTER);
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
	
	text(typed,0,650,width,10);
	
}


function keyPressed()
{
	if(keyCode == BACKSPACE)
	{
		typed = "";
	}
	
}


function keyTyped(){
	
	switch(key)
	{
		case '0':
			state = 0;
			break;
		case '1':
			state = 1;
			break;
		case '2':
			state = '2';
			break;
		case '3':
			state = 3;
			break;
		default:
			typed += key;
	}
	
	
	if(typed == 'drink')
	{
		typed = "";
		if(hasCried)
		{
			state = 3;
		}
		else{
			state = 1;
		}
	}
	else if(typed == 'eat')
	{
		state = 2;
		typed = "";
	}else if(typed == 'intro')
	{
		state = 0;
		typed = "";
	}
	else if(typed == 'cry' && state == 2)
	{
		hasCried = true;
		typed = "";
	}
}

	