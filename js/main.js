// /*Variable globales*/
// var nickName = document.getElementById('nickName');
// var useNickName = localStorage.getItem('nickName');

//Inicio
var empleo = profesiones[randomName()];

window.onload = function start(){
  $(document).ready(function(){
    $(".biz").css("display", "none");
    $(".biz").removeClass("justify-content","center");
  })

  
  $("#empleoElecto").html("Empleo: " + empleo.profesion);
  $("#empleo").html(empleo.income.toLocaleString("MX", { style: 'currency', currency: 'USD' }));
  $("#totalGastos").html("Total de Gastos: "+ empleo.totalExpenses().toLocaleString("MX", { style: 'currency', currency: 'USD'}));
  $("#ingresoPasivo").html("Ingreso Pasivo: "+ empleo.residualIncome().toLocaleString("MX", { style: 'currency', currency: 'USD'}));
  $("#incomeBar").width(empleo.percentage());

  //cambiantes
  $("#hijos").html("");
  $("#intereses").html("");
  $("#negocios1").html("");
  $("#ahorroTotal").html(empleo.savings().toLocaleString("MX", { style: 'currency', currency: 'USD'}));
  $("#totalGastos1").html(empleo.totalExpenses().toLocaleString("MX", { style: 'currency', currency: 'USD'}));
  $("#totalIngreso").html(empleo.totalIncome().toLocaleString("MX", { style: 'currency', currency: 'USD'}));
  $("#efectivo").html(empleo.cash().toLocaleString("MX", { style: 'currency', currency: 'USD'}));



  //gastosCurrent
  $("#impuestos").html(empleo.taxes().toLocaleString("MX", { style: 'currency', currency: 'USD' }));
  $("#hipoteca").html(empleo.mortgage().toLocaleString("MX", { style: 'currency', currency: 'USD' }));
  $("#automovil").html(empleo.carLoan().toLocaleString("MX", { style: 'currency', currency: 'USD' }));
  $("#tarjetaCredito").html(empleo.creditCardLoan().toLocaleString("MX", { style: 'currency', currency: 'USD' }));
  $("#creditoEstudiantil").html(empleo.studentLoan().toLocaleString("MX", { style: 'currency', currency: 'USD' }));
  $("#otrosGastos").html((empleo.otherExpenses()+empleo.loanPayment()).toLocaleString("MX", { style: 'currency', currency: 'USD' }));

  //Liabilities
  $("#mortgage").html(empleo.mortgageLiability.toLocaleString("MX", { style: 'currency', currency: 'USD' }));
  $("#carLoan").html(empleo.carLoanLiability.toLocaleString("MX", { style: 'currency', currency: 'USD' }));
  $("#creditCardLoan").html(empleo.creditCardLiability.toLocaleString("MX", { style: 'currency', currency: 'USD' }));
  $("#loans").html(empleo.loanPaymentLiability.toLocaleString("MX", { style: 'currency', currency: 'USD' }));
}

function clearLS(){
  // nickName.innerHTML = '';
  localStorage.clear();
}


//Ruleta


var options = ["Q","N","O","N","D","N","H","N","Q","N","O","N","D","N","Q","N","Q","N","O","N","D","N","C","N"];
var options2 = ["Quincena","Negocio","Oportunidad","Negocio","Deuda","Negocio","Hijo","Negocio","Quincena","Negocio","Oportunidad","Negocio","Deuda","Negocio","Quiebra","Negocio","Quincena","Negocio","Oportunidad","Negocio","Deuda","Negocio","Caridad","Negocio"];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

document.getElementById("spin").addEventListener("click", spin);

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}
//color
function RGB2Color(r,g,b) {
  return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {

}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 125;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,600,600);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.font = 'bold 14px Helvetica, Arial';

    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      //ctx.fillStyle = colors[i];
      ctx.fillStyle = RGB2Color(255,250,250);

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur    = 0;
      ctx.shadowColor   = "rgb(220,220,220)";
      ctx.fillStyle = "black";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    } 

    //Arrow
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
  $(".biz").css("display", "none");
  $(".biz").removeClass("justify-content","center");
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = options2[index];
  console.log(text);
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
  updateGameArea(text);
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();


function updateGameArea(text){
  if(text == "Negocio"){
    $(document).ready(function(){
      $(".biz").css("display", "flex");
      $(".biz").addClass("justify-content","center");
    })
  }else if (text == "Quincena") {
    
    $("#ahorroTotal").html(empleo.increaseSavings(quincenaHtml).toLocaleString("MX", { style: 'currency', currency: 'USD'}));
  }
}
