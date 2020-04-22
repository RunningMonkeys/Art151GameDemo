let intro;
let drink;
let large;
let swimming;

let state = 0;
let nextState = 0;
let counter = 0;
let typed = "";
let story = "";
let hasCried = false;

function preload() {
  intro = loadImage('assets/0-intro.jpg');
  drink = loadImage('assets/1-drink.jpg');
  large = loadImage('assets/2-large.jpg');
  swimming = loadImage('assets/3-swimming.jpg');
}

function setup() {
  createCanvas(1024, 768);
  textFont("Helvetica");
  textSize(22);
}

function draw() {
  background(255);

  text("ALICE FOLLOWS THE RABBIT", 0, 0, 200, 200);
  text("COMMANDS = begin, drink, eat, cry", 0, 100, 200, 200);

  if (state == nextState) {
    if (state == 0) {
      image(intro, 200, 0);
    } else if (state == 1) {
      image(drink, 200, 0);
    } else if (state == 2) {
      image(large, 200, 0);
    } else if (state == 3) {
      image(swimming, 200, 0);
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
      image(intro, 200, 0);
    } else if (nextState == 1) {
      image(drink, 200, 0);
    } else if (nextState == 2) {
      image(large, 200, 0);
    } else if (nextState == 3) {
      image(swimming, 200, 0);
    }

    tint(255, 255 - a);
    if (state == 0) {
      image(intro, 200, 0);
    } else if (state == 1) {
      image(drink, 200, 0);
    } else if (state == 2) {
      image(large, 200, 0);
    } else if (state == 3) {
      image(swimming, 200, 0);
    }
  }

  text(typed, 0, 650, width, 30);

  text(story, 0, 600, width, 30);
}

function keyPressed() {
  if (keyCode == BACKSPACE) {
    typed = '';
  }
}

function keyTyped() {
  if (key == '0') {
    nextState = 0;
  } else if (key == '1') {
    nextState = 1;
  } else if (key == '2') {
    nextState = 2;
  } else if (key == '3') {
    nextState = 3;

  } else if (keyCode == RETURN) {

    if (typed == 'drink') {
      typed = '';

      if (hasCried) {
        nextState = 3;
        story = "Alice is small, and her tears are now an ocean that threatens to sweep her away."
      } else {
        nextState = 1;
        story = "Alice drinks. She starts to shrink!"
      }

    } else if (typed == 'eat') {
      nextState = 2;
      typed = '';
      story = "Alice eats the biscuit, and she grows very large - too large for the room!"

    } else if (typed == 'begin') {
      nextState = 0;
      typed = '';
      story = "Alice arrives at a room with a table. A bottle says DRINK ME. A biscuit says EAT ME."

    } else if (typed == 'cry' && state == 2) {
      hasCried = true;
      typed = '';

    }

  } else {
    typed += key;
  }
}
