// profesiones

var profesiones =
[
    "Piloto","Administrador","Médico",
    "Abogado","Ingeniero","Conserje","FullStack Developer",
    "Mecánico", "Conductor Uber", "Enfermero",
    "Secretaria", "Profesor", "Diseñador UX/UI"
  ]

var name = document.getElementById("exampleFormControlInput1");

  //stocks

var negociosStocks =[
  {
    name: "Acción - TSLA.MX",
    description:       
      ["La volatilidad de los mercados y el miedo por la guerra comercial ha llevado a un mínimo histórico", "Es una acción prometedora para un futuro sin hidrocarburos, TSLA trabaja muy fuerte para hacer de uso masivo sus automóviles", "Hay mucho optimismo en el mercado de valores, la acción está en sus máximos históricos"],
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
    tradingRange: "650 a 950",
    numeroDeAcciones: 0,
  },
  {
    name: "Acción - Fondo Indexado ETF's S&P500",
    description: ["La volatilidad de los mercados y el miedo por la guerra comercial ha llevado a un mínimo histórico en el S&P 500","Invertir en fondos indexados es la forma más segura de hacer crecer tu dinero en el largo plazo","Se encuentra una economía sólida, las tasas de desempleo son bajas y las empresas generan valor. Estamos en máximos históricos"],
    cost: [
      function(){
         var min=11;
         var max=15;
         var random = Math.floor(Math.random()*(+max- +min) + +min);
         return random;
       },
      function(){
         var min=110;
         var max=340;
         var random = Math.floor(Math.random()*(+max- +min) + +min);
         return random;},
      function(){
           var min=300;
           var max=500;
           var random = Math.floor(Math.random()*(+max- +min) + +min);
           return random;}
          ],
          tradingRange: "110 a 340",
          numeroDeAcciones: 0,
    },
    {
      name: " Acción - PG (Procter & Gamble)",
      description: ["La volatilidad de los mercados y el miedo por la guerra comercial ha llevado a un mínimo histórico en el S&P 500","Invertir en fondos indexados es la forma más segura de hacer crecer tu dinero en el largo plazo","Se encuentra una economía sólida, las tasas de desempleo son bajas y las empresas generan valor. Estamos en máximos históricos"],
      cost: [
        function(){
           var min=450;
           var max=650;
           var random = Math.floor(Math.random()*(+max- +min) + +min);
           return random;
         },
        function(){
           var min=750;
           var max=1000;
           var random = Math.floor(Math.random()*(+max- +min) + +min);
           return random;},
        function(){
             var min=1100;
             var max=1700;
             var random = Math.floor(Math.random()*(+max- +min) + +min);
             return random;}
            ],
            tradingRange: "750 a 100",
            numeroDeAcciones: 0,
      },
      {
        name: " Bitcoin",
        description: ["La especulación de una nueva tecnología terminó con este mercado y la burbuja ha terminado","Es una tecnología innovadora y que puedes experimentar","El boom del bitcoin, todo mundo quiere entrar y está en sus máximos históricos"],
        cost: [
          function(){
             var min=50;
             var max=100;
             var random = Math.floor(Math.random()*(+max- +min) + +min);
             return random;
           },
          function(){
             var min=4000;
             var max=9000;
             var random = Math.floor(Math.random()*(+max- +min) + +min);
             return random;},
          function(){
               var min=20000;
               var max=22000;
               var random = Math.floor(Math.random()*(+max- +min) + +min);
               return random;}
              ],
              tradingRange: "750 a 100",
              numeroDeAcciones: 0,
        }
];


// pequeños negocios

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
      name: "Acción - Cetes",
      description: "Aprovecha ahora que hay tasas máximas en renta fija",
      cost:100,
      cashFlow: .66,
      numeroDeCetes: 0,
    },
    
    {
      name: "Invierte en una startup como partime",
      description: "Te asocias con alguien que tiene ideas para el futuro, medio tiempo para no dejar tu trabajo",
      cost: 70000,
      cashFlow: 0,
      downPay: 30000,
    },
    

  ]
    

  // negocios grandes


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
      {
        name: "Franquicia de Comida Rápida",
        description: "Una de las franquicias más conocidas de comida rápida de la CDMX, garantizado un éxito",
        cost: 4000000,
        cashFlow: 112500,
        downPay: 1000000,
      },
      {
        name: "Peluquería",
        description: "Negocio tradicional de corte de cabello, por necesidad los dueños lo venden",
        cost: 300000,
        cashFlow: 20000,
        downPay: 300000,
      }
    ]