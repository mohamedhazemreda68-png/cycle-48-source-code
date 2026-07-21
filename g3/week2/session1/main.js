// 1. operator precedence
// let x = 1;
// let y = '2';
// let z = '3';
// console.log(typeof (x + y * z));//
// type conversion vs type coercion
// Pascal case >> User
// camel case >> userName
// String() - Number() - Boolean() - Date()
// method constructor
// class >> constructor method >> same as class name
// let x = 10;
// let y = String(x);// input >> output // casting or type conversion
// // method or function >> return value
// console.log(x);// 10
// console.log(y);// '10'

// let x = 'a'; // 65
// let y = Number(x);
// console.log(x);// '1'
// console.log(y);// 1
// truthy falsey value >> [0, '' , undefined ,null, NaN, false]
// let x = false;
// let y = Boolean(x);
// console.log(x);// -1
// console.log(y);// true - false
// logic gates >> and >> or
// role >> and gate >> return last true if all inputs are true
// role >> and gate >> return first false if falsey input exists
// console.log("ka3bora" && null && undefined);
// let err = 'user not found';
// err && console.log(1) && console.log(err);
// console.log(0 || null || undefined || ' ');
// let userNameFE = null;
// let userNameDB = 'rabe3';
// // update into DB
// userNameDB = userNameFE || userNameDB;
// console.log(userNameDB);
// line1 >> line2 >> line6
// let isLoggedIn = true;
// let isAdmin = false;
// if (isLoggedIn == true) {
//     console.log('welcome');
//     if (true == isAdmin) {
//         console.log('admin dashboard');
//     } else {
//         console.log('user dashboard');
//     }
// } else {
//     console.log('please login first');
// }

// let x = {};
// let y = {};
//
// console.log(x == y);// false
// console.log(x === y);// false
//function signup() {
// 1. get data from FE [email, password]
// 2. check email exist into DB
// 3. if yes , throw error email already exist
// 4. prepare data >>[hash , encryption]
// 5. create user into DB
// 6. generate otp >> 123456
// nodemailer >> mailJet
// 7. create transporter >> set credentials {email , pass}
// 8. content >> transporter >> send
// }
// types of functions
// 1. declaration
// function print() {
//     return 1;// return console.log >> implementation
// }
//
// // console.log
// print()(1);

// 2. expression
// 3. arrow key
// 4. self invoked
// 5. anonymous
//
// let result = Number('123') + 7
// console.log(result);// 130

let input = 0;
if (!input) {
    console.log('Invalid')
}