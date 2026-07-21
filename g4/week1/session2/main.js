// 1. datatypes for js ? >> JS is a loosely typed >> cpp int x = 1; string y = 'fabsdfb';
// primitive - non-primitive
// ============ primitive
// // 1. string
// x = 'ka3bora';// string in cpp >> non-primitive >> string >> array of char
// y = '1';
// z = 1;
// console.log(z);
// console.log(y);// >> string // + - * / >> typeof is an operator
// 2. number
// x = 10; // 00110
// y = 1.5;
// z = 0;// >> truthy falsy values >> 0 act as falsy value
// console.log(typeof x);// number
// console.log(typeof y);// number
// console.log(typeof z);// number
// // 3. boolean
// x = true; .. 1
// y = false; // 0
// z = 0;
// console.log(typeof x);//
// console.log(typeof y);//
// console.log(typeof z);//
// // 4. undefined
// x = undefined;// datatype + value
// z = 0;
// console.log(x);//
// console.log(typeof x);//
// // 5. null
// console.log(x);// null
// console.log(typeof x);// null - object
// x = null;
// console.log(typeof x);// object >> typeof >> operator
// // operator >> + - *
// console.log(x instanceof Object);// true >> false
// var x;// undefined >> represent not pass a value
// y = null;// null >> represent nullable value is passed
// console.log(x);
// console.log(y);
// 6. symbol
// 7. bigint
// todo: search points : 1. symbol - 2.bigint >> use case when to use >> symbol
// ============ non-primitive in js
// non primitive combination of primitive and non-primitive
// 1. objects
// {keys : values}
// userData = {
//     name: "ka3bora",
//     salary: 30000,
//     isOnline: true,
//     "user-pass": "1234567890",
//     user_name: "rabe3el7la2"
// }
// // how to access data from obj
// // 1. dot notation
// dataFE = 'user-pass';
// userData.user_name;/// js obj "userData" ? key "dataFromFE"
// console.log(userData[dataFE]);//
// 2. subscription notation


// ============= naming convention
// 1. snake case        >> user_name  >> [DB columns] [user_name , user_pass]
// 2. camel case        >> userName   >> [variable , functions]
// 3. pascal case       >> User       >> [class]
// 4. kebab case        >> user-name  >> [formating data >> JSON] {"user-name":"ka3bora"}
// 5. upper snake case  >> BASE_URL   >> [constant project]

// BASE_URL = 'http://localhost:3000';// constant not allowed to modify
// // fetch(BASE_URL).then(res => res.json()).then(data => console.log(data));
// BASE_URL = 'http://localhost:30001/';
// // .env >> DB_URL
// // SECRET_KEY_TOKEN
// // SECRET_KEY_PAYMENT_GATEWAY
// // SALT_ROUND_HASH_PASS
// VOD_FEES = 10;
// total = total + VOD_FEES;
// 2. array >> js array is a special case of objects

//keys:0  1  2 3 4 5 6 7 ...
// arr = [1, 2, 3];// 0 based >>
// // how to access data from array ? using >> index
// console.log(arr["0"])// 0 - undefined >> console.log(arr[0])
// console.log(arr["1"])// 1 - undefined >> console.log(arr[1])
// console.log(arr["2"])// 2 - undefined >> console.log(arr[2])
// ============ type coercion
// js convert any value to any datatype itself
// operators + - * / % **
x = 10;
y = x + 'ka3bora';// + op addition, + op concat >> x convert to string >> [type coercion]
// + op concat should exist one operand of type string
// ====== roles
// 1. string + number >> string  >> because + op >> concat
// 2. string [*/-%] number >> number
console.log(y);// 10ka3bor >> '10ka3bora'

