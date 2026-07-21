// ============ 1. datatypes in cpp ?
// ==== primitive - non-primitive
// primitive in js
// x = 'ka3bora';// string >> cpp >> array of char
// y = '1';// string
// z = '';// string
// console.log(typeof x);// string
// console.log(typeof y);// string
// console.log(typeof z);// string
// x = 10; // 1010
// y = 1.5;
// z = 0;// truthy falsey values >> 0 act as a falsy value
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// x = true;// 1
// y = false;// 0
// console.log(typeof x);
// console.log(typeof y);
// x = undefined;
// console.log(x);// x value
// console.log(typeof x);// x type
// x = null;
// console.log(x);// null
// console.log(typeof x);// object
// 7 types primitive
// todo: search points >> symbol - bigint >> use cases ?? DI design pattern.
// ============= non primitive
// 1. object
// {keys : values , key : value , key : value }
// non primitive >> combination of primitive
userData = {
    'user-name': "ka3bora",
    salary: 30000,
    isOnline: true,
    child: null,
    'user-password': 1234,
}
// how to access data from obj
// // data from FE
// dataFE = ['user-name', 'user-password', 'salary', 'isOnline']// come FE
// for (const ele of dataFE) {
//     // ele >> 1st =  'user-name'
//     // ele >> 2en =  'user-password'
//     console.log(userData[ele]);// ka3bora , 1234 , 30000 , true
// }
//
// for (const ele of dataFE) {
//     // ele >> 1st =  'user-name'
//     // ele >> 2en =  'user-password'
//     console.log(userData.ele);// undefined , undefined, undefined, undefined
// }
// console.log(userData)
// console.log(userData.dataFE)//
// console.log(userData[dataFE]);// 1234


// naming convention
//    name                 example       use case
// 1. snake case        >> user_name  >> [SQL >> DB >> columns] >> userName >> DB
// 2. camel case        >> userName   >> [variables , functions]
// 3. pascal case       >> User       >> [class]
// 4. kebab case        >> user-name  >> [formating data >> JSON , url] {'btn-'}
// 5. upper snake case  >> BASE_URL   >> [constant value]
// 2. array
// url >> sign-up >> camelcase >> signup
/// ============= env
// BASE_URL = 'http://127.0.0.1:5000';
// DB_URL = 'http://127.0.0.1:5000';
// HOST_URL = 'http://127.0.0.1:5000';
// SECRET_KEY_TOKENS = 'secret-key';
// SECRET_KEY_AWS_S3 = 'secret-key-s3';
// SALT_ROUND_HASH_PASS = 5;
// VODFONE_CASH_FEES = 20 / 100
//
// totalTrx = trx + VODFONE_CASH_FEES;
// 10:35
//     0  1  2 >> keys >> index
// arr = [1, 2, 3]
// // how to access data from array ? from index
// console.log(arr)// js
// console.log(arr["0"])// >> 1 >> js convert '0' >> 0
// console.log(arr["1"])// >> 2 >> js convert '1' >> 1
arr = [1, 2, 3]
console.log(arr["a"])// >> 3 >> js convert '2' >> 2
// ============= type coercion JS convert value to different datatype
// ============= operators + - * / % ** >> typeof
// x = 12;
// y = x * 'a';// NaN // + op addition, + op concat
// // // js >> x >> (type coercion) string '12' + '3' >> '123'
// // // role >> one operand of type string [concat]
// // // 1. string + number >> string >> + op concat >> one operand of type string
// // // 2. string [*-/% **] number >> number >> [10 - NaN]
// console.log(y)// 9 >> '9' > 12Ka3bora
// 'ka3bora' >> js convert to number >>
// console.log(Number('ka3bora'));// NaN // type conversion or casting
