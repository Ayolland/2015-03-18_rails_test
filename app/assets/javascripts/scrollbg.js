
// Initializes the animated elements. Sets the background postions, and creates three duck prototypes using the duck images off-screen. Click listeners are added to each duck, and doItAll is the function that animates all four elements.

window.onload = function() {
  bgPosition = 0;
  duck1Img = document.getElementById("purple_duck");
  duck1 = new duck(duck1Img,'blueduckalive.gif','blueduckdead.gif');
  duck1Img.addEventListener("click",function(){killDuck(duck1)});
  initDuck(duck1);
  duck2Img = document.getElementById("brown_duck");
  duck2 = new duck(duck2Img,'redduckalive.gif','redduckdead.gif');
  duck2Img.addEventListener("click",function(){killDuck(duck2)});
  initDuck(duck2);
  duck3Img = document.getElementById("black_duck");
  duck3 = new duck(duck3Img,'greenduckalive.gif','greenduckdead.gif');
  duck3Img.addEventListener("click",function(){killDuck(duck3)});
  initDuck(duck3)
  window.setInterval(doItAll, 30);
};

// Moves the background, and moves each duck if the window size is larger than (theoretically) mobile devices that would balk at the extra processing cost.

function doItAll() {
  moveBg();
  if(window.innerWidth >= 800 && window.innerHeight >= 600) {
    moveDuck(duck1);
    moveDuck(duck2);
    moveDuck(duck3);
  }
};

//Sets a duck to be hidden to the top left of the screen.

function initDuck(duck){
  duck.img.style.position = "fixed";
  duck.img.style.top = "-34px"
  duck.img.style.left = "-34px"
};

//Checks if a duck is on-screen, then moves that duck if they are.

function moveDuck(duck){
  if (duck.outOfBounds()){
    duck.reset();
  } else {
    duck.move();
  };
};

// Kills a duck. There's probably a way to call the prototype's function directly from the event listener without this extra step...

function killDuck(duck){
  duck.die();
};

// A function I stole that returns a random integer between two values.

function randIntBtwn(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};

// Randomly returns -1 or 1.

function coinToss(){
  coin = Math.random();
  if (coin >= 0.5){ return -1; };
  if (coin < 0.5){ return 1; };
};

// defining a duck prototype. Looking at this now, I think I fudged my capitalization convention.

function duck(htmlElement,rSrc,dSrc) {
  this.img = htmlElement;
  this.rSrc = rSrc;
  this.dSrc = dSrc;
  //Checks if the duck is visible (with a 66px grace period)
  this.outOfBounds = function(){
    if (this.xPos < -66 || this.xPos > window.innerWidth + 66){
      return true 
    };
    if (this.yPos < -66 || this.yPos > window.innerHeight + 66){
      return true 
    };
    return false
  }
  //Sets the duck to have a random height, speed, and matching direction and starting side.
  this.reset = function(){
    this.dir = coinToss();
    if ( this.dir == 1 ){ this.xPos = -66; };
    if ( this.dir == -1 ){ this.xPos = window.innerWidth + 66; };
    this.yPos = randIntBtwn(5,window.innerHeight-60);
    this.xVel = Math.random() * 1.7 * this.dir + 0.3;
    this.yVel = Math.random() * coinToss() * 0.5;
    this.yAcc = 0;
    this.xAcc = Math.random() * 0.02 *this.dir;
    this.img.src = "/assets/" + this.rSrc;
    this.img.style.zIndex = randIntBtwn(0,8);
    this.img.style.transform = this.transformStr();
  }
  //returns the string for the value of the ducks css 'transform' property.
  this.transformStr = function(){
    return "translate(" + this.xPos + "px," + this.yPos +"px) scaleX("+ this.dir + ")";
  }
  //Changes the duck's position, using it's speed and accel. Random the duck may change directions.
  this.move = function(){
    if (randIntBtwn(0,1500) == 0){ this.flip();}
    this.xPos += this.xVel;
    this.xVel += this.xAcc;
    this.yPos += this.yVel;
    this.yVel += this.yAcc;
    this.img.style.transform = this.transformStr();
  }
  // Kills the duck. Removes x-velocity, adds gravity. Not sure why x-accel seems to not matter, though. May not visually register.
  this.die = function(){
    this.xVel = 0;
    this.yAcc = 1;
    this.img.src = "/assets/" + this.dSrc;
  }
  // Changes the duck's direction, reduces speed, changes y-velocity randomly.
  this.flip = function(){
    this.dir = this.dir * -1;
    this.xAcc = this.xAcc * -1;
    this.xVel = this.xVel * 0.1;
    this.yVel = Math.random() * coinToss() * 0.5;
  };
  // resets the duck for the first time.
  this.reset();
};

// Constantly moves the background, snapping it back original position as it moves all the way to the edges, giving a look of smooth, infinite scroll. y-scroll is modified by the user scrolling the page.

function moveBg() {
  bgPosition++;
  if (bgPosition > 190){ bgPosition = 0 };
  var yFiddled = bgPosition + (window.scrollY * 0.5);
  document.body.style.backgroundPosition = bgPosition + "px -" + yFiddled + "px";
};
