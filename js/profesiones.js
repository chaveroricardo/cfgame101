function Career(name){
  this.name = name;
  this.income = income;
  this.business = business;

  this.profesion = profesion;

  this.taxes = taxes;
  this.savings = savings;
  this.mortgage = mortgage;
  this.carLoan = carLoan;
  this.creditCardLoan = creditCardLoan;
  this.studentLoan = studentLoan;
  this.otherExpenses = otherExpenses;
  this.loanPayment = loanPayment;
  this.child = child;

  this.assetsGrowth = [];
  this.assetsIncome = [];

  this.mortgageLiability = mortgageLiability - this.mortgage;
  this.carLoanLiability = carLoanLiability - this.creditCardLoan;
  this.creditCardLiability = creditCardLiability - this.studentLoan;
  this.loanPaymentLiability = function(principal){
    var payment = 0;
    

    //FORMULA FOR CALUCLATING INTEREST RATE
    //p = x*(1 - (1+r)^-n)/r

    var rate = interest/100, noofpay = 12;
    var interest = 10/100;

    var nper1 = Math.log((1-((principal/payment) * (rate/noofpay))));
    var nper2 = Math.log((1+(rate/noofpay)));
    nper = -(nper1/nper2);
    interestpaid=payment*nper-principal;
    nper = -Math.round((nper1/nper2));
    nyear=Math.floor(nper/12);
    nmonth=nper%12;
    if (nper>0)
    {
        if (nmonth==0)
        {
            period=nyear+" Year(s)";
        }
        else
        {
            period=nyear+" Year(s) and "+nmonth+" Month(s)";
        }
    }
    else
    {
        period="Invalid Values";
        interestpaid=0;
    }

    console.log("Montly Payments: " + period + ", Total Interest Paid: " + interestpaid.toFixed(2));

    var priceData = {
        price : '$'+this.formatCurrency(interestpaid+owe),
        interest : '$'+this.formatCurrency(interestpaid),
        time  : period
    }
    return priceData;
}
  }
  


}

function Piloto(name){
  Career.call(this, name);
  this.income = 35000;
  this.profesion = "Piloto de Aviones";


  

}

function expenses(){
  
}

function totalIncome(){
  var x = 
}
/*
[
    "Piloto","Administrador","Médico",
    "Abogado","Ingeniero","Conserje","FullStack Developer",
    "Mecánico", "Conductor Uber", "Enfermero",
    "Secretaria", "Profesor"
  ]



/*
[
    "Piloto","Administrador","Médico",
    "Abogado","Ingeniero","Conserje","FullStack Developer",
    "Mecánico", "Conductor Uber", "Enfermero",
    "Secretaria", "Profesor"
  ]