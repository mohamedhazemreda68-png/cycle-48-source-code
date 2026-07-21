// 1. datatypes in js?
// ============= primitive - non-primitive
// == primitive >> store into stack
// == non-primitive >> heap
// x = 'ka3bora' // >> string
// y = 'a' // >> string
// z = '1';
// console.log(z)
// x = 10;// number
// y = 1.5;// number
// z = -9;// number
// console.log(x);
// x = true;// 1
// y = false// 0
// z = 0;// todo: truthy , falsy >> 0 act as falsy value
// console.log(x)
// console.log(typeof x);//
// console.log(x)//
// x = null;
// console.log(typeof x);
// todo: search points : symbol - bigint
// ===================================
// keys : values

// role >> non-primitive >> combination pf primitive
// userData = {
//     name: "ka3bora",
//     salary: 30000,
//     isOnline: true
// };
// how to access data in obj
// 1. dot notation
// x.salary
// 2. subscription notation
// x['salary']
// userData['name'] // userData.name >> userData['user-name']
// userData['salary']
// userData['isOnline']
// naming convention
// 1. snake case       >> user_name >> [DB column]
// 2. camel case       >> userName  >> [declare variable js]
// 3. pascal case      >> User      >> [Class]
// 4. kebab case       >> user-name >> [data format JSON] >> {"user-name":"ka3bora"}
// 5. upper snake case >> BASE_URL  >> [constant values]
// BASE_URL = 'http://localhost:3000/';
// fetch(BASE_URL)
// DB_URL
// HOST_URL
// REDIS_URL
// SECRET_KEY_TOKENS
// SALT_ROUNDS
// VOD_FEES = 10;
// arr = [1, 2, 3];
// sizeOf(arr) >> 3
//     0  1  2
// arr = [1, 2, 3];
// // index >> 0 based
// console.log(arr['0'])
// arr[0] // js convert data >> coercion
// console.log(arr.at(0));
// console.log(typeof arr);
x = 10;

// y = x + 1; // + addition + concat
z = x - 'a';// one operand type string
// role >> string [-,*,/] number >> number
// role >> string + number >> string
console.log(typeof z)// 11
// todo: how to declare var
// todo: operator precedence