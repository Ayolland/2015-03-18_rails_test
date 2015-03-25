
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

function doItAll() {
  moveBg();
  if(window.innerWidth >= 800 && window.innerHeight >= 600) {
    moveDuck(duck1);
    moveDuck(duck2);
    moveDuck(duck3);
  }
};

function initDuck(duck){
  duck.img.style.position = "fixed";
  duck.img.style.top = "-34px"
  duck.img.style.left = "-34px"
};

function moveDuck(duck){
  if (duck.outOfBounds()){
    duck.reset();
  } else {
    duck.move();
  };
};

function killDuck(duck){
  duck.die();
};

function randIntBtwn(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};

function coinToss(){
  coin = Math.random();
  if (coin >= 0.5){ return -1; };
  if (coin < 0.5){ return 1; };
};

function duck(htmlElement,rSrc,dSrc) {
  this.img = htmlElement;
  this.rSrc = rSrc;
  this.dSrc = dSrc;
  this.outOfBounds = function(){
    if (this.xPos < -66 || this.xPos > window.innerWidth + 66){
      return true 
    };
    if (this.yPos < -66 || this.yPos > window.innerHeight + 66){
      return true 
    };
    return false
  }
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
  this.transformStr = function(){
    return "translate(" + this.xPos + "px," + this.yPos +"px) scaleX("+ this.dir + ")";
  }
  this.move = function(){
    if (randIntBtwn(0,1500) == 0){ this.flip();}
    this.xPos += this.xVel;
    this.xVel += this.xAcc;
    this.yPos += this.yVel;
    this.yVel += this.yAcc;
    this.img.style.transform = this.transformStr();
  }
  this.die = function(){
    this.xVel = 0;
    this.yAcc = 1;
    this.img.src = "/assets/" + this.dSrc;
  }
  this.flip = function(){
    this.dir = this.dir * -1;
    this.xAcc = this.xAcc * -1;
    this.xVel = this.xVel * 0.1;
    this.yVel = Math.random() * coinToss() * 0.5;
  };
  this.reset();
};

function moveBg() {
  bgPosition++;
  if (bgPosition > 190){ bgPosition = 0 };
  var yFiddled = bgPosition + (window.scrollY * 0.5);
  document.body.style.backgroundPosition = bgPosition + "px -" + yFiddled + "px";
};
//
// function hideThePurpleDuck(){
//   purpleDuck.style.position = "fixed";
//   purpleDuck.style.left = "-66px";
//   purpleDuck.style.top = randIntBtwn(0,window.innerHeight-60) + "px";
//   purpleDuckX = 0
// }
//
// function goDuckGo() {
//   if (purpleDuckX > (window.innerWidth + 66)){
//     hideThePurpleDuck();
//   }
//   purpleDuckX++;
//   var translateString = "translate(" + purpleDuckX + "px,0px)";
//   purpleDuck.style.transform = translateString;
//
// }

