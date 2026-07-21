// 1. functions [declaration , expression , arrow , self invoked , anonymous]
// displayData('ka3bora');
//
// function displayData(param) {
//     // logic of code >> DRY
//     console.log(param);
//     // return param;
// }


// control flow code 1 , 2 , 3 , 4;
// const displayData = function (param) {
//     // logic of code >> DRY
//     console.log(param);// print not returned
//     // return void >> undefined
// }
// displayData([1, 2, 3]);// 2
// 1. simplify code [function]
// 2. solve problem of this key word
// const displayData = (param) => console.log(param);
// displayData(1000);
// let x = () => 1;// let x = () => { return 1;}
// let y = () => 'ka3bora';// let y = () => { return 'ka3bora' }
// let z = () => {
//     return {};
// };// let z = () => { return undefined } >> js >> obj >> returned or body
// let a = () => [];
// let b = () => undefined;
// let parseToString = (value) => String(value);
// let parseToNumber = (value) => Number(value)//  String(1)
// let result = parseToString(1);
// let result2 = parseToNumber('2');
// console.log(result)
// console.log(result2)
// (() => {
//     console.warn("Hello World!");
// })();
// 2. array object string methods
// problem 1: update user data from FE
// get data from FE user obj >> {userName:"3laamedany", email:"3laa@g.com" , password:"12345"}
// update database >> {userName:"3l2medany", email:"3laa2@g.com" , password:"567890"}
// dataDB.userName = dataFE.userName
// dataDB.password = dataFE.password
// Object.assign(x , y)
// let dataFE = {// loop obj
//     userName: "ka3bora", email: "3laa@g.com", password: "12345", script: "drop database;"// remove
// };
// let dataDB = {userName: "3l2medany", email: "3laa2@g.com", password: "567890", salary: 30000};
// //Object.Keys(dataDB) >> keys
// let validFields = Object.keys(dataDB)// ['userName',  'email' , 'password' , 'salary']
// // console.log(validFields);
// // how to iterate on obj >> not iterable
// for (let key of Object.keys(dataFE)) {// ['userName',  'email' , 'password' , 'script']
//     // 1. if key not exist in validFields
//     if (validFields.includes(key) === false) {
//         // 2. if no remove
//         // how to delete data from obj dataFE['userName'] >> as operator
//         delete dataFE[key];
//     }
// }
// // console.log(dataFE);
// // Object.assign(dataDB, dataFE);
// // dataDB.userName = dataFE.userName || dataDB.userName;
// // dataDB.email = dataFE.email || dataDB.email;
// // dataDB.password = dataFE.password || dataDB.password;
// // Object method
// Object.assign(dataDB, dataFE);
// todo: anther answer
// todo: anther problem2
let usersFE = [
    {userName: "ka3bora", email: ' k@g.com ', password: 12345},
    {userName: "rabe3", email: "                 r@g.com        ", password: 56789},
];

let usersDB = [
    {user_name: "3laamedany", user_email: "3laa@g.com", user_pass: "95724573"}
]

// solve problem >>
// 1. modify data from FE userName -> user_name , email -> user_email , password -> user_pass
// array method >> map() modify
const modifiedUsers = usersFE.map(
    (user) => {
        return {
            user_name: user.userName.trim(),
            user_pass: String(user.password),// type conversion [casting]
            user_email: user.email.trim().toLowerCase()// ahmedshoura@g.com >> AHMEDSHOURA@g.com >> AHMEDshoura@g.com
        }
    }
);
// console.log(usersFE);// reflect
// console.log(modifiedUsers);
// 2. add new data to database
// usersDB >> array >> how to add data to array
// todo:search point unshift shift push pop
usersDB.push(...modifiedUsers);// 2 loop >> 1 push DB , 2 push DB >> ...[{ka3bora},{rab3}] >> {ka3bora},{rabe3}
// for (let newUser of modifiedUsers) {
//     usersDB.push(newUser)
// // }
// console.log(usersDB);// [{},[{},{}]]
// console.log(usersDB.length);// 3 - 2

// let arr = [1, 2, 3, 4];
// arr.push(1, 2);
// console.log(arr);// [1,2,3,4,1,2] >> [1,2,3,4,[1,2]];
// spreed ...
// [] >> []
// [{},{},{}] >> {},{},{}
// 3. destructing ,spreed, rest. [named and positional args]
// get product name = 'iphone 17'
// let dbResult = [2,
//     {name: 'iphone 17', price: 30000, stock: 2}, {name: "iphone 17", price: 50000, stock: 3}
// ]
// // let productsCount = dbResult[0];
// // let p1 = dbResult[1];
// // let p2 = dbResult[2];
// // destructing
// let [productsCount, ...productsData] = dbResult;
// console.log(productsCount);
// console.log(productsData);
// rest {},{} >> [{},{}]
// spreed >> [{},{}] >> {},{}
let arr = [1, 2, 3];
arr.push(...[3, 3, 4, 5]) // [1,2,3,4,5] loop add each ele


