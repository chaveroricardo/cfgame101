   // funcion para weighted probability

function probabilidad(){
  var rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateWeighedList = function(list, weight) {
  var weighed_list = [];
   
  // Loop over weights
  for (var i = 0; i < weight.length; i++) {
      var multiples = weight[i] * 100;
       
      // Loop over the list of items
      for (var j = 0; j < multiples; j++) {
          weighed_list.push(list[i]);
      }
  }
   
  return weighed_list;
};
var  low = 0;


var middle = 1;

var high = 2;


var list = [low,middle,high];
var weight = [0.2, 0.6, 0.2];
var weighed_list = generateWeighedList(list, weight);

var random_num = rand(0, weighed_list.length-1);

return weighed_list[random_num];
}

// funcion de probabilidad poca

function probabilidad2(){
  var rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateWeighedList = function(list, weight) {
  var weighed_list = [];
   
  // Loop over weights
  for (var i = 0; i < weight.length; i++) {
      var multiples = weight[i] * 100;
       
      // Loop over the list of items
      for (var j = 0; j < multiples; j++) {
          weighed_list.push(list[i]);
      }
  }
   
  return weighed_list;
};
var  low = 0;


var middle = 1;

var high = 2;


var list = [low,middle,high];
var weight = [0.8, 0.175, 0.025];
var weighed_list = generateWeighedList(list, weight);

var random_num = rand(0, weighed_list.length-1);

return weighed_list[random_num];
}


//función de gastos

function expenses(){
  
}

//función de Ingreso Total

function totalIncome(){

}
