window.onload = function() {
  var context = canvas.getContext('2d');
  var imageObj = new Image();

  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
  };
  imageObj.src = 'img/boardgame.jpg'; 
    
};