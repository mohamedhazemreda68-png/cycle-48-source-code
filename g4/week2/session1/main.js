// todo: how to declare variable
// todo: Operator Precedence
// todo: String and concat
// todo: Type Conversion [casting]
// x = 1;// number
// y = '2';
// z = '3';
// // operator precedence
// console.log(typeof (x + y * z));// 18
// x = 10;
// y = 12;
// z = 30;
// how to declare variable >> stack
// JS >> run >> interpreter [line by line]
// JS >> loosely typed
// var x = 10;
// console.log(x);// 10
// // // reassignment
// // x = 'ka3bora';
// // redeclare
// var x = 12;
// console.log(x);// 12

// JS >> run >> not run interpreter >> run complied
// let x = 10;
// console.log(x);// 10
// // // reassignment
// // x = 12;
// // redeclare
// let x = 12;
// console.log(x);// 12
// const x = 10;
// console.log(x); // 10
// // reassignment
// x = 10;// error
// console.log(x); // 10

// update >> TS >> compiled
// let x = 'ka3bora'; // " " >> "ka3bora " + "rabe3" >> "ka3bora rabe3"
// let y = 'rabe3';
// console.log(x + " " + y); //
// let x = 1;
// console.log(1 + ''); // '1' not 1 >> type coercion >> JS >> 1 string
// methods >> [Number() , String() , Boolean()] >> method constructor
// pascal case
// let x = 1;
// let y = String(x);// casting => type conversion
// console.log(x);// 1
// console.log(y);// 1 str
// let x = '1';
// let y = Number(x);
// console.log(x);// 1 as string
// console.log(y);// 1 as number
// falsey values >> [0 , '' ,undefined  ,null,NaN, false]
// let x = NaN;// number act as a truthy value
// let y = Boolean(x);
// console.log(x);// -9
// console.log(y);// true
// let arr = [1, 3, 45];
// // truthy falsey values and fail success cases
// // methods >> indexOf >> array method >> check item exist return index;
// let result = arr.indexOf(100);// -1 >> truthy >> ref >> fail case
// console.log(result)

// logic gates
// console.log('ka3bora' && null && undefined && "3laamedany");
// let errMassage = true;
// if (errMassage) {
//     console.log(errMassage);
// }
// errMassage && console.log(errMassage);

// console.log(0 || null || NaN || undefined || ''|| false);
// let userNameFE = '';// NOT NEED TO UPDATE USERNAME
// let userNameDB = '3laamedany';
// userNameDB = userNameFE || userNameDB;
// console.log(userNameDB);//
// if conditions >> execute code scope else didn't execute code
// let isLoggedIn = true;// FE >> tokens
// let isAdmin = false;// DB
// if (isLoggedIn == true) {// comparison operator
//     console.log('welcome!');
//     if (isAdmin = true) {// assignment operator
//         console.log('admin page!');
//     } else {
//         console.log('user page!');
//     }
// } else {
//     console.log('please login first!')
// }

// let x = 1;
// let y = '1';
// console.log(x == y);// true // comparison operator [value vs value]
// console.log(x === y);// false // comparison operator [value , datatype]
//
// let x = {};
// let y = {};
// console.log(x == y);// false
// console.log(x === y);// false
// todo: functions