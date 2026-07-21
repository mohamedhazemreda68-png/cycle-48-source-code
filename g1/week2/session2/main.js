// // 1. functions
// // ========= DRY block of code >> files modify
// // types of functions >> [declaration - expression - arrow - self invoked - anonymous]
// // displayData(2);// call function before declare >> todo: circular dependency
// //
// // function displayData(data) {
// //     // logic of code
// //     console.log(data);
// //     // return void; >> JS not have void === undefined >> all function should return value
// // }
// //
// // displayData(1);
// // displayData(2);
//
// // const displayData = function (data) {
// //     // logic of code
// //     console.log(data);
// //     // return void; >> JS not have void === undefined >> all function should return value
// // }
// // displayData(1);
// // const displayData = (data) => console.log(data); // todo: search point : return number or string or obj
// // displayData(1);// print 1 return undefined
// // const x = () => 1;
// // const y = () => {
// //     return 1;
// // }
// // const result = x();// print return 1;
// // console.log(result);
// // const result2 = y();// print return 1;
// // console.log(result2);
// // solve: 1. simplify function , 2. solve problem of this key word >> objects
// // (function () {
// //     console.log("Hello World!");
// // })();
// // function displayData(data) {
// //     return 100, 1 , console.log(data);// print data and return undefined
// // }
// //
// // console.log(displayData);// implementation >> body for function itself
// // console.log(displayData(100)); // calling execution >> result of execution [returned value from this function]
//
// // 2. array and object methods
//
// // method >> Object >> Object.assign(obj1 , obj2)
// // userDataDB.userName = userDataFE.userName;
// // userDataDB.email = userDataFE.email;
// // userDataDB.password = userDataFE.password;
// // userDataDB.isOnline = userDataFE.isOnline;
// // userDataDB.salary = userDataFE.salary;
// // validation layer
// // Object.assign(userDataDB, userDataFE);
// // console.log(userDataDB);
// // FE >> data >> obj
// // objectMethods
// // const objKeys = Object.keys(x);
// // const objValues = Object.values(x);
// // console.log(objKeys);
// // console.log(objValues);
// // using loops and arrays objects solve
// // 1. FE send data contain un related fields
// // 2. remove un related data FE
// // 3. keys standard DB
// // let userDataFE = {
// //     userName: "ka3bora", salary: 30000, isOnline: false, email: "ka3bora@g.com", password: 12345, hamada: "hambozo"
// // };
// // let userDataDB = {
// //     userName: "ka3bora", salary: 15000, isOnline: true, email: "ka3bora@g.com", password: '12345Abc@'
// // };
// // // filter object FE VS object DB >> array methods
// // const DBKeys = Object.keys(userDataDB);// [userName , salary , isOnline , email , password]
// // const FEKeys = Object.keys(userDataFE);// [userName , salary , isOnline , email , password , hamada]
// // // loop FE
// // const resultOfFilter = FEKeys.filter((value, index) => DBKeys.includes(value));
// //
// // console.log(FEKeys);//  [userName , salary , isOnline , email , password ]
// // console.log(DBKeys);//  [userName , salary , isOnline , email , password ]
// // console.log(resultOfFilter);
// // for (const key of FEKeys) {
// //     if (resultOfFilter.includes(key) === false) {
// //         // remove data from object
// //         // 1. set undefined
// //         // userDataFE[key] = null
// //         // 2. delete operator
// //         delete userDataFE[key];
// //     }
// // }
// // Object.assign(userDataDB, userDataFE);
// // console.log(userDataDB);
// // ======= steps
// // ==== 1. get keys DB
// // const DBFields = Object.keys(userDataDB); // [userName , salary , isOnline , email , password]
// // // ==== 2. get keys FE
// // const FEFields = Object.keys(userDataFE);// [userName , salary , isOnline , email , password , hamada]
// // // ==== 3. compare and remove unrelated fields
// // for (const key of DBFields) {// []
// //     userDataDB[key] = userDataFE[key];// key = isOnline
// // }
// // console.log(userDataDB);
// // 3. loops
// // array.map() >>
// // let arr = [2, 4, 6, 8, 10, 11];
// // // modify arr ele / 2
// // // const modifiedArr = arr.map((item) => item / 2)// 1 , 2 ,3 , 4, 5 , 5.5
// // const modifiedArr = arr.map(
// //     function (item) {
// //         return item * 2;
// //     }
// // )// 1 , 2 ,3 , 4, 5 , 5.5
// //
// // console.log(arr);
// // console.log(modifiedArr);
let dataFE = [
    {userName: "ka3bora", password: 12345},
    {userName: "RABE3", password: 56789}
]

// let database = [{user_name: '3laamedany', user_pass: "123456789"}];
// // steps to add dataFE to Database
// // 1. dataFE modify same as naming convention database
const preparedData = dataFE.map(
    (item) => {
        // item of type obj
        return {
            user_name: item.userName.toLowerCase(),// string methods
            user_pass: String(item.password)// number >> string
        }
    }
)
// // console.log(preparedData);
// // array method >> push
// // database.push(preparedData);
// // console.log(database);
// // console.log(database.length);//
// // for (const ele of preparedData) {
// //     console.log(database);
// //     database.push(ele);
// // }
// // spreed operator >> [[]] >> [{},{},{}] >> {},{},{}
// // database.push(...preparedData); // [...[{},{}]]
// // console.log(database);
// // 2. push new dataFE to database
// // 4. destructing, spreed, rest ex: named vs positional arguments
// // loops print all even numbers
// // for (let i = 1; i <= 10; i++) {
// //     if (i & 1) {
// //         // continue;// skip iteration
// //         // break; // break loop
// //     }//
// //     function displayData() {
// //         break;
// //     }
// //
// //     displayData()
// //
// //     console.log(i);// even
// // }
// // scope loop
// // continue
// // break
// // destructing >> extract data from array or obj
// // const arr = [1, 2, 3, 4];
// // // const x = arr[0];
// // // const y = arr[1];
// // // const z = arr[2];
// // // const a = arr[3];
// // const [x, y, z, a] = arr;
// // console.log(x, y, z, a);
//
// // database >> ka3bora >> [true, {user_name:"ka3bora",user_pass:'123345'}];
// // let resultDB = [true, {user_name: "ka3bora", user_pass: '123345'}];
// // // const userExist = resultDB[0];
// // // const userData = resultDB[1];
// // const [userExist, userData] = resultDB;
// let userData = {user_name: "ka3bora", user_pass: '123345'}
// // const userName = userData.user_name;
// // const password = userData.user_pass;
//
// const {user_name: x, user_pass: y} = userData
// console.log(x);
// console.log(y);
//
// let arr = [44, 33, 55, 66, 77, 88];
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

let resultDB = [1, {user_name: "ka3bora", user_pass: '12345'}]
// const userExist = resultDB[0];
// const userData = resultDB[1];
// alias
const [userExist, userData] = resultDB;

let user =
    {user_name: "ka3bora", user_pass: '12345'};
// let userName = user.user_name


const {user_name: userName, user_pass} = user
console.log(userName, user_pass);