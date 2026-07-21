// ============= todo: type conversion [casting]
// todo: next session .. How to declare variable in Js (Let , var , const)
// todo : next session >>  Operator Precedence
// es4
// x = 1;
// y = '2';
// z = '3';
// console.log((x + y * z))// "number" + 6 >> number6
// js run interpreter [line by line]
// var x = 10;
// console.log(x);//
// x = 12;// reassignment
// console.log(x);//
// var x = 10;
// console.log(x);//
//
// var x = 12;// redeclare
// console.log(x); //
// compiled
// let x = 10;
// console.log(x);// 10
// let x2 = 12;// redeclare
// console.log(x2);// err
// const >> init value constant whole project
// const x = 12;
// console.log(x);
// x = 10;
// console.log(x);
// let firstName = 'ka3bora'
// let lastName = 'rabe3';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);// ka3bora rabe3
// methods >> camel case
// getUserById - getUserByEmail
// methods >> [Number() , String() , Boolean()] >> Pascal case [class]
// methods constructor
// let x = 10;
// let y = String(x);//  >> type conversion >> casting
// let z = 1 + '';// '1' >> type coercion
// console.log(x);// 10
// console.log(y);// '10'
// console.log(z);//
// let x = '10';
// let y = Number(x);// type conversion
// let a = parseInt(x);
// let z = +x; // x = x + 1 // type coercion
// console.log(x);// '10'
// console.log(y);// 10
// console.log(a);
// console.log(z);// 10 11
// falsy value >> [0 , '' , undefined ,null , NaN , false]
// let x = false;// number
// let y = Boolean(x);
// console.log(x);
// console.log(y);
// falsey values vs fail case
// signup - register
// 1. get email from FE
// 2. check user exist >> [1,0] >> 1 >> fail case
// login >>
// 1. get email from FE
// 2. check user exist >> [1,0] >> 0 >> fail case >> error
// array >> methods
// let arr = [33, 45, 66];
// // ele >> 45 >> index >> 1 >> indexOf()
// arr.indexOf(45);// 1 >> 1
// arr.indexOf(66); // 2 >> 2
// arr.indexOf(33); // 0 >> represent success case
// arr.indexOf(22); // -1 >> truthy >> represent fail case
// logic gates and - or
// console.log("ka3bora" && null && undefined && 0);// true - 3laamedany
// let errMassage = 'ka3bora not exist';

// if (errMassage) {
//     console.log(errMassage);
// }
// or gate search on any true >> first true
// or gate >> last false
// console.log(0 || 2)// true >> 1
//
// let userNameFE = 'ka3bora';// null >> didn't need to updated username
// let userNameDB = '3laamedany';
// userNameDB = userNameFE || userNameDB;
// console.log(userNameDB);//
// console.log(1 && 2 || 3);
// JS >> run interpreter
// if condition >> true >> execute code
// else execute code
// line 1 JS >> run line 5
// let isLoggedIn = true;// FE
// let isAdmin = false;// DB
// if (true == isLoggedIn) {// == comparison operator
//     console.log('welcome')
//     if (true == isAdmin) {// = assignment operator
//         console.log('admin dashboard');
//     } else {
//         console.log('user dashboard');
//     }
// } else {
//     console.log('please login first')
// }
// let x = {}
// let y = {};
// console.log(x == y);// false >> value
// console.log(x === y);// false [type and value]

// todo: object methods
// todo: array methods
// todo: what is a function?

// let x = '123';
// let y = Number(x);
// y = y + 7;
// console.log(y);// 130

// let x = 0;
// if (!x) {// ! 1 >> ! true >> false
//     console.log('Invalid')
// }