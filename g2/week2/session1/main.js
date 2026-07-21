// 1. operator precedence
// 2. how to declare variable
// x = 10;
// y = 12;
// interpreter
// JS loosely typed
// var x = 10;// stack >> x = 10;
// console.log(x); // 10 >> stack
// // reassignment
// x = "10"; // stack >> x = 12
// console.log(x); // 12
// // redeclare
// var x = 15;
// console.log(x);// 15

// let - const
// let x = 10;
// console.log(x); // 10
// x = "ka3bora";// reassignment
// console.log(x); // 22
// const x = 10;
// console.log(x);// 10
// x = 10;//
// console.log(x);
// Number() - String() - Boolean() >> pascal case >> class
// method constructor
// User(); >> method
// let x = 10;
// let y = String(x);// type conversion - casting
// console.log(x);// 10
// console.log(y);// '10'
// // method constructor >> return value not modify pre value
// let x = 'ka3bora';
// let y = Number(x);
// console.log(x); // '1'
// console.log(y);// 1
// truthy falsy values [ 0, '' , undefined, null , NaN , false ]
// let x = NaN;
// let y = Boolean(x);//
// console.log(x); //
// console.log(y); //
// logic gates
// role >> and gate >> return last true if all inputs true
// role >> and gate >> return first false if falsey value exist
// let err = 'user not found';
// // err && console.log(1) && console.log(err);
// let userNameFE = '';
// let userNameDB = 'rabe3';
// userNameDB = userNameFE || userNameDB;
// console.log(userNameDB);//
// function signup() {
//     // 1. get email and password
//     // 2. check email exist
//     // 3. if yes >> throw error
//     // 4. create user into DB
//     // 5. create otp
//     // nodemailer 500 -> mailJet 1000
//     // 6. create transporter >> credentials {email, pass}
//     // 7. content >> transporter >> send
// }
// types of functions
// 1. declaration fun
function print() {
    return console.log(1), console.log(2), 0,console.log(3);// console >> data
}

print()(10);// 10

// 2. expression fun
// 3. arrow fun
// 4. self invoked fun
// 5. annoymons fun
// todo: next session
// array methods
// object methods
// callbacks
// promises