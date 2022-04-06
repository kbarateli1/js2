// დავალება:
// 1. შექმენით 5 ელემენტიანი რიცვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;

// 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.
// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა
// address - სტრინგების მასივი
// age - რიცხვითი მნიშვნელობა
// phoneNumbers - რიცხვითი მნიშვნელობების მასივი
// 4. console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)",
//  My age is (#3 დავალების age-ის მნიშვნელობა)", "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"


// 1.

let myArr=[1,2,3,4,5];
let sum = 1+2+3+4+5;
console.log(sum/myArr.length);


// 2. 
let myArr2=[
    {
        userName:'keti',
        userAge:27,
    },
    {
        userName:"nuca",
        userAge:27,
    },
    {
        userName:"inga",
        userAge:28,
    },
    {
        userName:"mariami",
        userAge:27,
    },
    {
        userName:"natia",
        userAge:27,
    },

];

console.log( myArr2)

// 3.

let newObject={
    firstName:"Keti",
    lastName:"Barateli",
    address:["shavgulidze","Tiflis"],
    age:27,
    phoneNumbers:[555266020, 0157526246]
};
console.log(newObject)

// 4.

console.log("my name is " + newObject.firstName);
console.log("my age is " + newObject.age);