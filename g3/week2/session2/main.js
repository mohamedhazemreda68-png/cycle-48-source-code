// 1. functions [declaration, expression, arrow ,self invoked , anonyms]

// displayData(13);
//
// function displayData(data) {
//     return console.log(data);
// }
//
// displayData(14);

// let displayData = function (data) {
//     return console.log(data);
// }
// displayData(14);
// 1. simplify code
// 2. solve problem of this key word
// let displayData = (data) => console.log(data)
// let x = () => 1;
// // return 1;
// let y = () => ("ka3bora");
// let z = () => true
// let a = () => ({});
// let b = () => ([]);

// (() => {
//     console.log("Hello World!");
// })();

// getUserData()
// 2. array and object methods
// let userDataFE = {
//     userName: "ka3bora", password: 123456, email: "ka3bora@g.com", script: "alert('you are hacked!')", hamada: "hambozo"
// };
// let userDataDB = {
//     userName: "rabe3",
//     password: "rabe31234",
//     email: "rabe3@g.com",
//     salary: 30000
// };
// // 1. get valid fields
// let validFields = Object.keys(userDataDB);
// console.log(validFields);
// // 2. loop obj FE delete all unrelated
// // loop code execute set of values 30
// for (const key of Object.keys(userDataFE)) {
//     // key >> userName , password
//     // 1. if key not exist in validFields
//     if (!validFields.includes(key)) {
//         // 2. remove prop
//         // how to delete prop from obj
//         // delete is an operator
//         delete userDataFE[key]
//         /// set prop undefined
//         userDataFE[key] = undefined;
//     }
// }
// console.log(userDataFE);
// // Object.assign(userDataDB, userDataFE);
// console.log(userDataDB);
let usersFE = [{
    userName: " KA3BORA ", password: 12345, email: "ka3bora@g.com "
}, {
    userName: '3laamedany', password: 54321, email: "r@g.com"
}]
let usersDB = [{
    user_name: "rabe3", user_pass: '67890', user_email: "rr@g.com"
}]
// how to modify on data from FE
// array method map >> modify
// userName -> user_name
// password -> user_pass
// email -> user_email
let modifiedUsers = usersFE.map((value) => {
    return {
        user_name: value.userName.toLowerCase().trim(),
        user_pass: String(value.password),
        user_email: value.email.trim().toLowerCase()
        // AHMED.SHOURA@gmail.com >> ahmedshoura@gmail.com
    }
});
// console.log(usersFE);//
// console.log(modifiedUsers)
// how to update database
// usersDB.push(modifiedUsers);/// [{}, [{},{}]]
// operator spreed
// ...[[]] >> []
// ...[{},{},{}] >> {},{},{}

// for (let user of modifiedUsers) {
//     usersDB.push(user);
// }
// usersDB.push(...modifiedUsers)
// console.log(usersDB);
// console.log(usersDB.length);
// get product data from DB
let dbResult = [2, {name: "iphone 17 promax", price: 100000}, {name: "iphone 17 promax", price: 90000}]
// let userExist = dbResult[0];
// let userData = dbResult[1];
let [productExist, ...productsData] = dbResult;
console.log(productExist);
console.log(productsData);
// 3. spreed , destructing , rest [named vs positional  arguments]
let arr = [1, 2, 3];
arr.push(1, 2);
console.log(arr);