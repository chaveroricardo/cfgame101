function Career(name){
  this.name = name;
  this.income = income;
  this.business = function(){
    return "Esto todavía no";
  }

  this.profesion = profesion;

  this.taxes = function(){
    return this.income *.3;
  };

  this.savings = savings;
  this.mortgage = function(){
    var pagoPorMillar = 11.2;
    return this.mortgageLiability*pagoPorMillar/1000;
  }
  this.carLoan = carLoan;
  this.creditCardLoan = creditCardLoan;
  this.studentLoan = studentLoan;
  this.otherExpenses = otherExpenses;
  this.loanPayment = function (){
    var monthPayment = this.loanPaymentLiability*.1;
    return monthPayment;   
  }

  this.child = 0;

  this.assetsGrowth = [];
  this.assetsIncome = [];

  this.mortgageLiability = mortgageLiability - this.mortgage;
  this.carLoanLiability = carLoanLiability - this.creditCardLoan;
  this.creditCardLiability = creditCardLiability - this.studentLoan;
  this.loanPaymentLiability = loanPaymentLiability - loanPayment;
  

}

function expenses(){
  
}

function totalIncome(){

}

var profesiones =
[
    "Piloto","Administrador","Médico",
    "Abogado","Ingeniero","Conserje","FullStack Developer",
    "Mecánico", "Conductor Uber", "Enfermero",
    "Secretaria", "Profesor", "Diseñador UX/UI"
  ]


var negociosIncomeSmall = [
    {
      name: "Empieza un blog",
      description: "Genera un ingreso adicional con el marketing de referidos",
      cost: 15000,
      cashFlow: 0,
      downPay: 15000,
    },
    {
      name: "Renta tu cuarto en AirBnB",
      description: "Genera un ingreso adicional rentando tu cuarto extra",
      cost: 10000,
      cashFlow: 7000,
      downPay: 10000,
    },
    {
      name: '"Frelance Gig"',
      description: "Consigue un trabajo de medio tiempo como desarrolador web",
      cost: 15000,
      cashFlow: 5000,
      downPay: 15000,
    },
    {
      name: "Conduce medio tiempo en DiDi o Uber con el auto que nunca ocupas",
      description: "Ocupa ciertos trayectos y ciertos momentos del día para trabajar de medio tiempo y cuando hay más demanda para generar un ingreso extra.",
      cost: 2000,
      cashFlow: 5000,
      downPay: 2000,
    },
    {
      name: "Acción - TSLA.MX",
      description:       
        ["La volatilidad de los mercados y el miedo por la guerra comercial ha llevado a un mínimo histórico", "Es una acción prometedora para un futuro sin hidrocarburos, TSLA trabaja muy fuerte para hacer de uso masivo sus automóviles", "Es una momento de máximos históricos, el optimismo por los mercados hace que llegue a su máximo histórico"],
      cost: [
         function(){
            var min=111;
            var max=150;
            var random = Math.floor(Math.random()*(+max- +min) + +min);
            return random;
          },
         function(){
            var min=650;
            var max=950;
            var random = Math.floor(Math.random()*(+max- +min) + +min);
            return random;},
         function(){
              var min=1200;
              var max=1500;
              var random = Math.floor(Math.random()*(+max- +min) + +min);
              return random;}
      ],
      tradingRange: "450 a 950",
      numeroDeAcciones: 0,
    },
    {
      name: "Acción - Cetes",
      description: "Aprovecha ahora que hay tasas máximas en renta fija",
      cost:100,
      cashFlow: .66,
      numeroDeCetes: 0,
    },
    {
      name: "Fondo Indexado ETF's S&P500",
      description: "Invertir en fondos indexados es la forma más segura de hacer crecer tu dinero en el largo plazo",
      cost:function(){
        var min=111;
        var max=150;
        var random = Math.floor(Math.random()*(+max- +min) + +min);
        return random;
      },
      tradingRange: "450 a 650",
      numeroDeAcciones: 0,
    }

  ];
    
var negociosIncomeBig = [
      {
        name: "Departamento Dos Recámaras en la Roma",
        description: "Pon a rentar un departamento y paga un crédito hipotecario. La renta promedio en el país es de 6% y el costo del crédito de 12% (CAT)",
        cost: 2643300,
        cashFlow:-13427.96,
        downPay:264330,
      },
      {
        name: "Oportunidad de Departamento 2 Recámaras en la Condesa para ocuparlo en HomeAway/AirBnB",
        description: "El vendedor tiene una emergencia médica y necesita vender lo antes posible el departamento, necesita el 50% en efectivo y lo demás acepta un crédito hipotecario. La renta promedio en el país es de 6% y el costo del crédito de 12% (CAT)",
        cost: 3500000,
        cashFlow: 35816.67,
        downPay: 1750000,
      },
    ]