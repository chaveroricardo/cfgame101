window.onload = function() {
  var context = canvas.getContext('2d');
  var imageObj = new Image();

  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
  };
  imageObj.src = 'img/boardgame.jpg'; 
    
};

// $(document).ready(function(){

//   //Variables globales que almacenará el % de avance ingreso residual

// };




//var faceAni = ["faceOne", "faceTwo", "faceThree", "faceFour", "faceFive", "faceSix"];

var faceRot = ["rotate3d(0, 0, 1, -90deg)",
                "rotate3d(1, 0, 0, 180deg)",
                "rotate3d(1, 0, 0, 90deg)",
                "rotate3d(1, 0, 0, -90deg)",
                "rotate3d(0, 1, 0, -90deg)",
                "rotate3d(0, 1, 0, 90deg)"]

var dice = document.getElementsByClassName("dice")[0];

dice.addEventListener("click", rollDice);

function rollDice() {
  
  var faces = document.getElementsByClassName("dice-face");
  
  for(var fIt = 0; fIt < faces.length; fIt++) {
    faces[fIt].style.backgroundColor = "white";
  }
  
  var randFace = Math.round(Math.random() * 5);
  
  dice.style.left = Math.random()*innerWidth + "px";
  dice.style.top = Math.random()*innerHeight + "px";
  
  dice.style.transform = "rotate3d(1, 0, 0, " + Math.random() * 360 +  "deg) rotate3d(0, 1, 0, " + Math.random() * 360 +  "deg) rotate3d(0, 0, 1, " + Math.random() * 360 +  "deg)";
  
  setTimeout( function() {
    dice.style.transform = faceRot[randFace];
    document.getElementsByClassName("dice-face")[randFace].style.backgroundColor = "green";
  }, 900 );
  
  //dice.style.transform = faceRot[0];
  
  //dice.style.animation = faceAni[Math.round(Math.random() * 5)] + "1s linear";
  
  //dice.style.animation = "faceOne 1s";
}