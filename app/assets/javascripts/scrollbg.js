
window.onload = function() {
  bgPosition = 0;
  purpleDuck = document.getElementById("purple_duck");
  purpleDuckX = 0

  hideThePurpleDuck();
  window.setInterval(doItAll, 30);
};

function doItAll() {
  moveBg();
  goDuckGo();
}


function moveBg() {
  bgPosition++;
  if (bgPosition > 190){ bgPosition = 0 };
  var pos_string = bgPosition + "px";
  document.body.style.backgroundPosition = pos_string + " -" + pos_string
}

function hideThePurpleDuck(){
  purpleDuck.style.position = "fixed";
  purpleDuck.style.left = "-66px";
  purpleDuck.style.top = randIntBtwn(0,window.innerHeight-60) + "px";
  purpleDuckX = 0
}

function goDuckGo() {
  if (purpleDuckX > (window.innerWidth + 66)){
    hideThePurpleDuck();
  }
  purpleDuckX++;
  var translateString = "translate(" + purpleDuckX + "px,0px)";
  purpleDuck.style.transform = translateString;
  
}

function randIntBtwn(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// function duck(htmlElement,rSrc,lSrc,dSrc) {
//   this.div = htmlElement;
//   this.reset();
//   this.rSrc = rSrc;
//   this.lSrc = lSrc;
//   this.dSrc = dSrc;
//   this.outOfBounds = function(){
//     return true if (this.xPos < -66 || this.xPos > window.innerWidth + 66);
//     return true if (this.yPos < -66 || this.xPos > window.innerHeight + 66);
//     return false
//   }
//   this.reset = function(){
//     this.xPos = -66;
//     this.yPos = randIntBtwn(5,window.innerHeight-60);
//     this.xVel = randIndBtwn(1,5);
//     this.yVel = 0;
//     this.yAcc = 0;
//     this.xAcc = randIndBtwn(0,4);
//     this.div.style.zIndex = randIntBtwn(0,8);
//     this.div.style.transform = this.translateStr();
//   }
//   this.translateStr = function(){
//     "translate(" + this.xPos + "px," + this.yPos +"px)"
//   }
//   this.move = function(){
//     this.xPos += this.xVel;
//     this.xVel += this.xAcc;
//     this.yPos += this.yVel;
//     this.yVel += this.yAcc;
//     this.div.style.transform = this.translateStr();
//   }
// }


