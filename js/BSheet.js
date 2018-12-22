function Career(profesion, income, mortgageLiability, carLoanLiability, creditCardLiability, studentLoanLiability, loanPaymentLiability){
  this.profesion = profesion;
  this.income = income;

  this.totalExpenses = function(){
    return this.taxes() + this.mortgage() + this.carLoan() + this.creditCardLoan() + this.studentLoan() + this.otherExpenses();
  };

  this.totalIncome = function(){
    return this.income + this.business + this.interests;
  };

  this.cash = function(){
    return this.totalIncome() - this.totalExpenses();
  }

  this.residualIncome = function(){
    return this.business + this.interests;
  };

  this.business = 0;

  this.interests = 0;

  this.taxes = function(){
    return this.income *.3;
  };

  this.savings = function(){
    return this.income*.2;
  };

  
  this.mortgage = function(){
    var pagoPorMillar = 11.2;
    return this.mortgageLiability*pagoPorMillar/1000;
  }
  this.carLoan = function(){
    var pagoPorMillar = 24.3;
    if(this.carLoanLiability < 100000){
    return this.carLoanLiability*pagoPorMillar/100;
  }
    else{
    return this.carLoanLiability*pagoPorMillar/1000;
    }
  };
  this.creditCardLoan = function(){
    var pagoPorMillar = 54.2;
    if(this.creditCardLiability < 100000){
      return this.creditCardLiability*pagoPorMillar/100;
    }
      else{
      return this.creditCardLiability*pagoPorMillar/1000;
      }
  };
  this.studentLoan = function(){
    var pagoPorMillar = 11.3;
    if(this.studentLoanLiability < 100000){
      return this.studentLoanLiability*pagoPorMillar/100;
    }
      else{
      return this.studentLoanLiability*pagoPorMillar/1000;
      }
  };

  this.otherExpenses = function(){
    return this.income*.03;
  };

  this.loanPayment = function (){
    var monthPayment = this.loanPaymentLiability*.1;
    return monthPayment;   
  }

  this.child = function(){
    return this.income*0.05;
  };

  this.mortgageLiability = mortgageLiability;
  this.carLoanLiability = carLoanLiability;
  this.creditCardLiability = creditCardLiability;
  this.studentLoanLiability = studentLoanLiability;
  this.loanPaymentLiability = loanPaymentLiability;

}

var income = 40000;

var abogado = new Career ("Abogado",income,1000000,100000,65000,100000,25000);

var administrador = new Career("Administrador",income*.45,abogado.mortgageLiability*0.45,abogado.carLoanLiability*0.045,abogado.creditCardLiability*0.02925,abogado.studentLoanLiability*0.045,abogado.loanPaymentLiability*0.01125);

var asistente = new Career("Asistente",income*.38,abogado.mortgageLiability*0.375,abogado.carLoanLiability*0.0375,abogado.creditCardLiability*0.024375,abogado.studentLoanLiability*0.0375,abogado.loanPaymentLiability*0.009375);

var conserje = new Career("Conserje",income*.33,abogado.mortgageLiability*0.325,abogado.carLoanLiability*0,abogado.creditCardLiability*0,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.008125);

var desarroladorSr = new Career("FullStack Developer",income*1.7,abogado.mortgageLiability*1.7,abogado.carLoanLiability*0.17,abogado.creditCardLiability*0.1105,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.0425);

var enfermero = new Career("Enfermero", income*.5,abogado.mortgageLiability*0.5,abogado.carLoanLiability*0.05,abogado.creditCardLiability*0.0325,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.0125);

var ingeniero = new Career("Ingeniero", income*1.3,abogado.mortgageLiability*1.3,abogado.carLoanLiability*0.13,abogado.creditCardLiability*0.0845,abogado.studentLoanLiability*0.07,abogado.loanPaymentLiability*0.0325);

var mecanico = new Career("Mecánico",income*.33,abogado.mortgageLiability*0.325,abogado.carLoanLiability*0.0325,abogado.creditCardLiability*0,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.008125);

var medico = new Career("Médico",income*3,abogado.mortgageLiability*3,abogado.carLoanLiability*0.15,abogado.creditCardLiability*0.195,abogado.studentLoanLiability*0.3,abogado.loanPaymentLiability*0.075);

var piloto = new Career("Piloto Aviador", income*2,abogado.mortgageLiability*2,abogado.carLoanLiability*0.2,abogado.creditCardLiability*0.13,abogado.studentLoanLiability*0.2,abogado.loanPaymentLiability*0.05);

var profesor = new Career("Profesor",income*.18,abogado.mortgageLiability*0.175,abogado.carLoanLiability*0.0175,abogado.creditCardLiability*0.011375,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.004375);

var taxi = new Career("Taxi (Uber)",income*.38,abogado.mortgageLiability*0.375,abogado.carLoanLiability*0.0375,abogado.creditCardLiability*0.024375,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.009375);







//for the game

var business = 0;

var realStateLiability = 0;

var tslamx = 0;

var spymx = 0;

var pgmx = 0;

var btcmx = 0;

var negocios1 = 0;

var negocios2 = 0;

var negocios3 = 0;



