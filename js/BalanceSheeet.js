function Career(name, income, profesion, savings, carLoan, creditCardLoan, studentLoan, otherExpenses){
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
  this.creditCardLoan = function(){
    var pagoPorMillar = 54.2;
    return this.creditCardLiability*pagoPorMillar/1000;
  };
  this.studentLoan = function(){
    var pagoPorMillar = 22.4;
    return this.studentLoanLiability*pagoPorMillar/1000;
  };
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
  this.studentLoanLiability = studentLoanLiability;
  this.loanPaymentLiability = loanPaymentLiability;

  this.realStateLiability = realStateLiability;
  
}

// var Piloto = 