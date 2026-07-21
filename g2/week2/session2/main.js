// 1. if condition >> true >> execute code scope
// if >> false >> skip
// let isLoggedIn = true;// FE
// let isAdmin = false;// DB
// if (true == isLoggedIn) {// == >> comparison operator
//     console.log('welcome')
//     if (isAdmin = true) {// = >> assignment operator
//         console.log('admin view');
//     } else {
//         console.log('user view');
//     }
// } else {
//     console.log('please login first')
// }
// let x = {} //1;
// let y = {} // 2;
// console.log(x == y);// == >> check just value
// console.log(x === y);// === >> check both value type
// 2. function and its type [declaration - expression - arrow - self invoked - anonyms]
// displayData(13);

// function displayData(data) {
//     // console.log(data);
//     // console.log(1);
//     // return 1;
//     return console.log(data), console.log(1), 14;// void >> undefined
// }
// displayData(12);
// let displayData = function (data) {
//     // console.log(data);
//     // console.log(1);
//     // return 1;
//     return console.log(data), console.log(1), 14;// void >> undefined
// }
// displayData(13);
// 1. simplify function
// 2. solve problem of this
// let displayData = (data) => console.log(data);// void >> undefined
// let x = () => 1; // () => { return 1;}
// x();// return 1;
// (function () {
//     console.log(1);
// })();

// function getUser() >> return userData - printUser()
// 3. array and object methods

// keys >> array of keys
// userDataDB.userName = userDataFE.userName
// userDataDB.password = userDataFE.password
// userDataDB.email = userDataFE.email
// steps to solve problem
// // 1. get valid keys from DB
// let validKeys = Object.keys(userDataDB);
// userName >> user_name
// password >> user_pass
// email >> user_email
// map >> array
// 2. loop FE obj >> delete pros not included validKey
// todo: behavior of undefined and null into DB
// for (const key of Object.keys(userDataFE)) {
//     // key >> userName , pass, email
//     // if key not exist validKeys >>
//     // ["ka3bora","rabe3","3laamedany"].includes('hambozo')
//     if (validKeys.includes(key) === false) {
//         // how to remove prop from obj
//         // 1. set prop = undefined
//         // userDataFE[key] = undefined;
//         // 2. delete operator
//         delete userDataFE[key];//
//     }
// }
let userDataFE = [{
    userName: "ka3bora", password: 123456, email: "ka3bora@g.com",
}, {
    userName: "3laamedany", password: 67890, email: "4@g.com"
}]
let userDataDB = [{
    user_name: "rabe3", user_pass: "56789", user_email: "r@g.com"
}];
// 1. modify data from FE
let modifiedDataFE = userDataFE.map(
    (value) => {
        return {
            user_name: value.userName,
            user_pass: String(value.password),
            user_email: value.email,
        }
    }
)
// console.log(userDataFE);
// console.log(modifiedDataFE);
// spreed ...[[]] >> []
// ...[{},{},{}] >> {},{},{}
userDataDB.push(...modifiedDataFE);// {},{}
console.log(userDataDB);
// for (const ele of modifiedDataFE) {
//     userDataDB.push(ele);
// }
// console.log(userDataDB.length);
// 2. update db
// values >> array of values
// 4. loops
// 5. destructing , spreed , rest [named vs positional  arguments]