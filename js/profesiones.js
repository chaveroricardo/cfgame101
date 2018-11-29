function Career(name){
  this.name = name;
  this.income = income;
  this.dividend = dividend;
  this.business = business;

  this.profesion = profesion;

  this.taxes = taxes;
  this.mortgage = mortgage;
  this.carLoan = carLoan;
  this.creditCardLoan = creditCardLoan;
  this.studentLoan = studentLoan;
  this.otherExpenses = otherExpenses;
  this.loanPayment = loanPayment;
  this.child = child;

  this.assetsGrowth = [];
  this.assetsIncome = [];

  this.liability = liability;

}

function Piloto(name){
  Career.call(this, name);
  this.income = 35000;
  this.profesion = "Piloto de Aviones";


  

}

function expenses(){
  
}

/*
[
    "Piloto","Administrador","Médico",
    "Abogado","Ingeniero","Conserje","FullStack Developer",
    "Mecánico", "Conductor Uber", "Enfermero",
    "Secretaria", "Profesor"
  ]