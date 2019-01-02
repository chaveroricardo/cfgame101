function Career(profesion, income, mortgageLiability, carLoanLiability, creditCardLiability, studentLoanLiability, loanPaymentLiability){
  this.profesion = profesion;
  this.income = income;

  this.increaseSavings = function(e){
    e = 0;
    if(e==0){
    var initialSavings = this.savings();
    return initialSavings + this.cash();
    }else{
      initialSavings += this.cash(); 
    }
  };

  this.percentage = function(){
    return this.residualIncome()/this.totalExpenses()*100+"%";
  };

  this.totalExpenses = function(){
    return this.taxes() + this.mortgage() + this.carLoan() + this.creditCardLoan() + this.loanPayment()+ this.studentLoan() + this.otherExpenses();
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
    return this.mortgageLiability/1000*pagoPorMillar;
  }
  this.carLoan = function(){
    var pagoPorMillar = 24.3;
    return this.carLoanLiability/1000*pagoPorMillar;
    
  };

  this.creditCardLoan = function(){
    var pagoPorMillar = 54.2;
    return this.creditCardLiability/1000*pagoPorMillar;
  };

  this.studentLoan = function(){
    var pagoPorMillar = 11.3;
    return this.studentLoanLiability/1000*pagoPorMillar;
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

var administrador = new Career("Administrador",income*.45,abogado.mortgageLiability*0.45,abogado.carLoanLiability*0.45,abogado.creditCardLiability*0.45,abogado.studentLoanLiability*0.45,abogado.loanPaymentLiability*0.45);

var asistente = new Career("Asistente",income*.38,abogado.mortgageLiability*0.38,abogado.carLoanLiability*0.38,abogado.creditCardLiability*0.38,abogado.studentLoanLiability*0.38,abogado.loanPaymentLiability*0.38);

var conserje = new Career("Conserje",income*.33,abogado.mortgageLiability*0.33,abogado.carLoanLiability*0,abogado.creditCardLiability*0,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.33);

var desarroladorSr = new Career("FullStack Developer",income*1.7,abogado.mortgageLiability*1.7,abogado.carLoanLiability*1.7,abogado.creditCardLiability*1.7,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*1.7);

var enfermero = new Career("Enfermero", income*.5,abogado.mortgageLiability*0.5,abogado.carLoanLiability*0.5,abogado.creditCardLiability*0.5,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.5);

var ingeniero = new Career("Ingeniero", income*1.3,abogado.mortgageLiability*1.3,abogado.carLoanLiability*1.3,abogado.creditCardLiability*1.3,abogado.studentLoanLiability*0.7,abogado.loanPaymentLiability*1.3);

var mecanico = new Career("Mecánico",income*.33,abogado.mortgageLiability*0.33,abogado.carLoanLiability*0.33,abogado.creditCardLiability*0,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.33);

var medico = new Career("Médico",income*3,abogado.mortgageLiability*3,abogado.carLoanLiability*3,abogado.creditCardLiability*3,abogado.studentLoanLiability*3,abogado.loanPaymentLiability*3);

var piloto = new Career("Piloto Aviador", income*2,abogado.mortgageLiability*2,abogado.carLoanLiability*2,abogado.creditCardLiability*2,abogado.studentLoanLiability*2,abogado.loanPaymentLiability*2);

var profesor = new Career("Profesor",income*.18,abogado.mortgageLiability*0.18,abogado.carLoanLiability*0.18,abogado.creditCardLiability*0.18,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.18);

var taxi = new Career("Taxi (Uber)",income*.38,abogado.mortgageLiability*0.38,abogado.carLoanLiability*0.38,abogado.creditCardLiability*0.38,abogado.studentLoanLiability*0,abogado.loanPaymentLiability*0.38);







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



