/*
	Zeke Thornburgh Art 151 Creative coding
	Non linear game & Final
	Non linear game was basic narative and final is fixing issues with the game.
*/

let river;
let owl;
let forest;
let deer;
let dam;
let secretDam;


//State 0 river
//state 1 first forest with owl
//state 2 empty forest
//state 3 majestic deer
//state 4 Built Home
//state 5 deer happy
let state = 0;
let nextState = 0;
let counter = 0;
let typed = "";
let story = "";
let groundedTrees = 0;
let talkedToOwl = false;

function preload() {
	river = loadImage('assets/0.jpg');
	owl= loadImage('assets/1.jpg');
	forest = loadImage('assets/2.jpg');
	deer= loadImage('assets/3.png');
	dam= loadImage('assets/4.jpg');
	secretDam= loadImage('assets/5.jpg'); 
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	river.resize(0,height-200);
	owl.resize(0,height-200);
	forest.resize(0,height-200);
	deer.resize(0,height-200);
	dam.resize(0,height-200);
	secretDam.resize(0,height-200);
	
	textFont("Helvetica");
	textSize(22);
}

function draw() {
  background(255);

  text("BEAVER BUILDS A DAM", 0, 0, 200, 200);
  text("COMMANDS = chop, explore, talk, begin, build", 0, 100, 200, 200);

  if (state == nextState) {
    if (state == 0) {
      image(river, 200, 0);
    } else if (state == 1) {
      image(owl, 200, 0);
    } else if (state == 2) {
      image(forest, 200, 0);
    } else if (state == 3) {
      image(deer, 200, 0);
    } 
	else if (state == 4)
	{
		image(dam, 200,0);
	}
	else if (state == 5)
	{
		image(secretDam, 200,0);
	}
  } else {
    counter++;
    if (counter == 30) {
      state = nextState;
      counter = 0;
    }

    let a = map(counter, 0, 30, 0, 255);
    tint(255, a);
    if (nextState == 0) {
      image(river, 200, 0);
    } else if (nextState == 1) {
      image(owl, 200, 0);
    } else if (nextState == 2) {
      image(forest, 200, 0);
    } else if (nextState == 3) {
      image(deer, 200, 0);
    } 
	else if (nextState == 4)
	{
		image(dam, 200,0);
	}
	else if (nextState == 5)
	{
		image(secretDam, 200,0);
	}

    tint(255, 255 - a);
    if (state == 0) {
      image(river, 200, 0);
    } else if (state == 1) {
      image(owl, 200, 0);
    } else if (state == 2) {
      image(forest, 200, 0);
    } else if (state == 3) {
      image(deer, 200, 0);
    } 
	else if (state == 4)
	{
		image(dam, 200,0);
	}
	else if (state == 5)
	{
		image(secretDam, 200,0);
	}
  }

  text(typed, 0, height-40, width, height);

  text(story, 0, height-90, width, height-41);
}

function keyPressed() {
  if (keyCode == BACKSPACE) {
    typed = '';
  }
}

function keyTyped() {
  if (keyCode == RETURN) 
  {
    if (typed == 'chop') 
	{
      typed = '';
	  
	  if(groundedTrees<20)
	  {
		  groundedTrees++;
		  story = "Crash!! There are now "+ groundedTrees + " trees on the ground";
	  }
	  else
	  {
		  story = "I think I have enough trees to build now.";
	  }
    } 
	else if (typed == 'build') 
	{
		typed = '';
		if(groundedTrees<5)
		{
			groundedTrees = 0;
			story = "Oh no the logs washed away!";
		}
		else{
			nextState = 4;
			story = "You have built yourself a home congrats!!"
		}
    } 
	else if (typed == 'begin')
	{
      nextState = 0;
      typed = '';
      story = "You arrive back at the stream you started at. There is a forest around a tiny stream.\nYou can cut trees for wood or explore the forest."

    } 
	else if (typed == 'talk') 
	{
      typed = '';
	  if(state == 0)
	  {
		  story = "There is no one to talk to";
	  }
	  else if(state == 1)
	  {
		  story = "There is a legend that farther on in the woods there exists a magical deer that grants wishes.";
		  talkedToOwl = true;
	  }
	  else if(state == 2)
	  {
		  story = "There is no one here maybe that owl was lying";
	  }
	  else if (state == 3)
	  {
		  if (groundedTrees >= 10)
		  {
			  story = "Here is your new home!";
			  nextState = 5;
		  }
		  else{
			  story = "So the Owl told you of my location I see. If you bring me 10 trees I can build you the best home you have ever seen.";
		  }
	  }
    }
	else if(typed == 'explore')
	{
		typed = "";
		if(state == 0)
		{
			story = "You explore the forest and find an owl in the trees";
			nextState = 1;
		}
		else if(state == 1 || (state == 2 && !talkedToOwl))
		{
			story = "You continue to explore the forest. There doesn't seem to be anything here but trees.";
			nextState = 2;
		}
		else if(state == 2 && talkedToOwl)
		{
			nextState = 3;
			story = "You come across a clearing in the forest and a deer standing in the middle of it."
		}
		else{
			story = "I don't know where else to explore if I want to go home i should type begin";
		}
	}
  }
  else 
  {
    typed += key;
  }
}
