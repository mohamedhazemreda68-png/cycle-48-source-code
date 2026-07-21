// 1. datatypes in js?
// ============= primitive - non-primitive
// js loosely typed
// x = 'ka3bora';
// y = 'k';
// z = '';
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// x = 10;
// y = 1.5;
// z = -8;
// console.log(x)
// console.log(y)
// console.log(z)
// x = true; /// 1
// y = false;
// z = 0;// todo: truthy falsy >> 0 act as falsy
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)
// x = undefined;
// console.log(x);//
// // console.log(typeof x);//
// x = null;
// console.log(x);//
// console.log(typeof x);//
// todo: search points [symbol, bigint]
// ============= non-primitive >> combination of primitive
// userData = {
//     name: "ka3bora", salary: 30000, isOnline: false,
// };
// how to access data from obj
// 1. dot notation
// x.name;
// x.salary;// userData.user - name >> userData.user - name
// x.isOnline;
// // 2. subscription notation
// x['name'];
// x['salary'];
// x['isOnline']; // userData['user-name']
// naming convention
// 1. snake case        >> user_name [py , DB column]
// 2. camel case        >> userName  [declare variable]
// 3. pascal case       >> User      [Class]
// 4. kebab case        >> user-name [JSON] >> {"user-name":"ka3bora"}
// 5. upper snake case  >> BASE_URL >> constant
// BASE_URL = 'http://localhost:8080/';
// fetch(BASE_URL);
// BASE_URL = 'http://localhost:3000/';
// .env >> DB_URL , SECRET_KEY_TOKEN ,
// VOD_FEES = 22;
// total = total +VOD_FEES;
//   0  1  2
// x = [1, 2, 3]
// get size of arr >> sizeOf(arr) >> 3
// how to access data from array
// index
// array >> obj >> keys : values
// js convert '0' >> 0 [ coercion ]
// console.log(x['0']);
// // console.log(x.at(0));
// x = 10;
// y = x - 'a';// + addition + concat >> 'a' >> NaN >> NaN
// role 1 >> string [-*/] number >> number
// role 2 >> string + number >> string
// one operand type string
// console.log(typeof y);
// Let , var , const
// loosely typed
// js run interpreter
// var x = 10;
// console.log(x);// 10
// // // reassignment
// // x = 11;
// // redeclare
// var x = 10;
// console.log(x);// 11
// var total = 0;
// total = total + 20;
// total = total + 30;
// total = total + 70;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// var total = 0;
// total = total + 20;
// console.log(total);
// let x = 10;
// console.log(x);// 10
// let x = 'ka3bora';
// console.log(x);//
x = 22;// TDZ 
// =================
let x = 10;
console.log(x);
x = 11;// reassignment
console.log(x);
// todo: operator precedence
