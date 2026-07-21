// =================== 1. functions
// types of function >> [declaration - expression - arrow - self invoked - anonymous]
// 1
// let result = summation(1, 2);// call fun before initialization
// console.log(result)
//
// function summation(parameter1, parameter2) {
//     return parameter1 + parameter2;
// }
//
// summation(1, 2)
// // 2
//
//
// let summation2 = function (parameter1, parameter2) {
//     return parameter1 + parameter2;
// }
// console.log(typeof summation2)
// control flow of code
// let resultOfSum2 = summation2(1, 3)
// console.log(resultOfSum2);

// 3
// 1. simplify
// 2. todo: solve problem of this key word
// let summation3 = (parameter1, parameter2) => parameter1 + parameter2;
// let x = () => 1;// return (1); >> { return 1;}
// let y = () => 'ka3bora'; // return 'ka3bora' >> { return 'ka3bora'}
// let z = () => true; // >> { return true; };
// let a = () => [] // {return []};
// let b = () => ({}); // function conflict {} body >> obj return
// let parseNumber = (val) => Number(val);
// let x = parseNumber('2');
// console.log(x);
// let resultOfSum3 = summation3(1, 4)
// console.log(resultOfSum3)

// (() => {
//     console.log('hello')
// })();
//
// (() => {
//     console.log('hello')
// })();

// =================== 2. array object string methods
// todo:problem 1 >> FE >> BE >> DB >> update : user send data update profile
// let userFE = {email: "ka3bora2@g.com", password: 12345, hamada: "hambozo"};
// let userDB = {userName: "kaabora", email: "ka3bora@g.com", password: 54321};

// userDB.userName = userFE.userName || userDB.userName
// userDB.email = userFE.email || userDB.email
// userDB.password = userFE.password || userDB.password
/**
 * todo: how to get related fields [validFields]
 *  >> Object.keys(ref) >> array of keys >>['userName','email','password']


 * todo: iterate [1,2,3] >> 1 + 1 , 2 + 1 , 3 + 1 >> loop iterate ele +1;
 * todo: problem 1.1 : delete all unrelated fields user
 *  1. loop of FE obj
 *  2. delete all unrelated fields
 *
 */

// let validFields = Object.keys(userDB);// ['userName','email','password']
// for (let key of Object.keys(userFE)) {
//     // check key not exist in validFields 'email' >> ['userName','email','password'] >> array method :includes()
//     if (validFields.includes(key) === false) {
//         // if yes, remove from obj FE
//         // how to delete data from obj
//         delete userFE[key];
//     }
// }
// Object.assign(userDB, userFE);
// console.log(userDB);
// todo:problem2 >> FE >> [users] >> BE (refactor) >> DB : add new users into database
let usersFE = [{
    userName: "ka3bora", password: 12345, email: "                                             ka3bora@g.com "
}, {userName: "rabe3", password: 54321, email: "rabe3@g.com"}];
let usersDB = [{user_name: '3laamedany', user_pass: '876543', user_mail: "3laa@g.com"}]

/**
 * todo: field come from FE not same as fields come from DB
 *  >> 1. modify users FE >> formate
 *  >> array >> modify use [array method map]
 *  >> 2. add new users to database
 *  >> usersDB is an array
 *  >> how to add new ele to array [push]
 *
 */
// todo: search points >> shift and unshift
// let modifiedUsers = usersFE.map((user) => ({
//     user_name: user.userName.trim(), user_pass: String(user.password), user_mail: user.email.trim().toLowerCase(),// ahmedshoura@g.com >> AHMEDSHOURA@g.com >> AHMEDshoura@g.com
// }));// reflect >> array
// // console.log(usersFE);
// // console.log(modifiedUsers);
// usersDB.push(...modifiedUsers); // [{ka3bora},{rabe3}] >> {ka3bora},{rabe3}
// // for (let user of modifiedUsers) {
// //     usersDB.push(user);
// // }
// console.log(usersDB);
// console.log(usersDB.length)
// // loop modifiedUsers ele >> push
// let arr = [1, 2, 3];
// arr.push(...[1, 2, 3]); // push >> 1 , 2 , 3
//
// console.log(arr)
// console.log(arr.length)
// spreed >> ...
// ...[[]] >> []
// ...[{},{},{}] >> {},{},{}

// =================== 3. loops
// =================== 4. destructing spreed rest
// get product name = iphone 17
let dbResult = [2, {name: "iphone 17", price: 50000}, {name: "iphone 17", price: 60000}]
// const productsCount = dbResult[0];
// const p1 = dbResult[1]; >> [{},{}] rest [{],{}] >> {},{}
// const p2 = dbResult[2];
// destructing
// let [productsCount, ...products] = dbResult;
// console.log(productsCount);
//  console.log(products);

let arr = [1, 2, 3];
arr.push(1, 4, 6);// [1,4,6] >> 1,4,6