function Career(name){
  this.name = name;
  this.income = income;
  this.business = business;

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

  this.child = child;

  this.assetsGrowth = assetsGrowth;
  this.assetsIncome = assetsIncome;

  this.mortgageLiability = mortgageLiability;
  this.carLoanLiability = carLoanLiability;
  this.creditCardLiability = creditCardLiability;
  this.loanPaymentLiability = loanPaymentLiability;
  
}


