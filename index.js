//functional Expression
// name1();
function name1() {
  console.log("Saurabh Singh");
}

// name1();

// This is called hoisting when functional expression run on javascript engine then engine automattaly call those function expression on the top of the code

// argumenst
function sum(a, b) {
  console.log(arguments);
  return a + b;
}
//  console.log(sum(1,4))

function allSum() {
  let total = 0;
  for (let value of arguments) total = total + value;
  return total;
}
// console.log(allSum(1,2,3,4));

//REST Operator

function sum(...args) {
  return args.reduce((a, b) => a + b);
  console.log(args);
}
// console.log(sum(1,2,4,5));

//Default Paramameter

function interestRate(principle, rate, years) {
  return ((principle * rate) / 100) * years;
}
// console.log(interestRate(10000, 3.5, 5))

function interestRate(principle, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principle * rate) / 100) * years;
}
// console.log(interestRate(10000))

function interestRate(principle, rate = 3.5, years = 5) {
  // rate = rate || 3.5
  // years = years || 5
  return ((principle * rate) / 100) * years;
}
// console.log(interestRate(10000));

//Getters and Setters

const person = {
  fName: "Saurabh",
  lName: "Singh",
  get fullName() {
    return `${person.fName} ${person.lName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

person.fullName = "Gaurabh Singh";

const fullName = `${person.fName} ${person.lName}`;

// console.log(person)
// console.log(person.fName + " " + person.lName)
// console.log(`${person.fName} ${person.lName}`)
// console.log(fullName)
// alert("Hello")

//global local scope

const message = "hi";
const col = "red"
function m1() {
    const message = "Hello";
    const col = "green";
    console.log(message, col);
}

function m2() {
    const message = "J"
    console.log(message);
}

// m1();

//que


// How to add an array

function sum(...args){
    return args.reduce((a,b) => a+b)

}
// console.log(sum(1,2,3,4,5));


function sum(...args){
    console.log(args)
    if (args.length === 1 && Array.isArray(args[0]))
    args = [...args[0]]
    return args.reduce((a,b) => a+b)

}
// console.log(sum([1,2,3,4,5]));

const circle = {
    radius: 2,
    area: 20,
    get circleArea() {
        const area = 20
    }
   
}

// OOPS 
// 4 pillers
// 1 Encapsulation
// 2 Abstraction hide all the complex properties and show meaningfull use
// 3 Inheritance
// 4 Polymorphism


// function BankAccount (customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance
// }

// const saurabhAccount = new BankAccount("Saurabh Singh", 2000);
// const gauravSingh = new BankAccount("Gaurabh Singh",78643743 )
// console.log(saurabhAccount, gauravSingh);
