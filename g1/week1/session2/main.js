// // 1. what is js and its history
// // 2. how to run js [browser , pc download nodejs ]
// // 3. datatypes in js ? [primitive , non-primitive]
// // ============== primitive =================
// // string >> 'ka3bora' >> 'K'
// // number >> 1 >> -1 >> 0 >> 1.2 [ bigint (ES6) ]
// // boolean >> true or false
// // undefined
// // null
// // x = null;
// // console.log(typeof x);
// // todo: search points [symbol , bigint] useCases - when to use? unique project of symbol >> DI
// // js >> object
// // ================ non-primitive ================
// // // non primitive combination of primitive
// // x = {userName: "ka3bora", salary: 30000, isOnline: false};
// // // how to access ele from obj
// // // 1. subscription notation
// // console.log(x['userName']) // x.userName
// // // 2. dot notation
// // console.log(x['salary'])// x.salary
// // // >> DB >> [{user_name: "ka3bora" , salary:30000 , is_online:false , is_admin :true }]
// // // array access >> index >> start 0 based
// // //   0  1  2
// // y = [1, 2, 3]
// // console.log(y[0])
// // objects contain { key : value , key : value , key : value}
// // x = "ka3bora";
// // userName = "ka3bora";
// // naming conv
// // snake_case >> user_name >> [DB column]
// // camel Case >> userName >> [declar var]
// // pascal Case >> UserName >> [class] User >> Product
// // kebab Case >> user-name >> js >> "user-name" >> JSON
// // upper snake Case >> USER_PASS >> [constant values]  >> BE_BASE_URL = http://localhost:3000
//
// // 4. how to declare variables into JS?
// // js is loosely typed
// // js is [interpreter - compiled]
// // var x = 1; // x >> 1 >> number
// // console.log(x)// 1
// // // reassignment - redeclare
// // var x = true;
// // console.log(x);
// // var total = 0;
// // total += 20; // >> total = total + 20;// 20
// // total += 30; // >> total  = total + 30  // 20 + 30 =50
// // total += 1000;// 50 + 1000 = 1050
// // total += 10; // 1050 + 10 = 1060
//
// // es5 >> var
// // es6 >> let - const
// // let x = 1;
// // console.log(x);// 1
// // // redeclare x
// // // let x = 18; // not allowed
// // // reassignment
// // x = 'ka3bora';
// // console.log(x);// 18
// // const x = 10;// initial value
// // console.log(x);//
// // redeclare not allowed
// // const x = 12;
// // reassignment
// // fees app >> 1%
// // let  const
// // 5. Arithmetic Operators &
// let x = 10;
// let y = 20;
// let z = x + y;// assign
// let a = x - y;// assign
// let b = x ** 2;// assign
// // y = y + 1;// + addition
// // x = x + '1'; // + concat >> '10' + '1' >> '101'
// x = x / 'a';// 10 * 'a'; >> js >> 10 * 1 >> 10;
// // 1 + '1' >> number JS convert '1' >> 1 >> 2;
// // 1 + 'a' >> number JS cannot convert "a" >> NaN +1 = NaN
// console.log(typeof x);// NaN >> number
// // role >> number [*,/,-,**] string = number >> Coercion
// // role >> number + string = string >> + concat operand type string

// todo: Operator Precedence + Coercion VS Conversion
// let x = 1;
// let y = '2';
// let z = '3';
// // typeof is an operator
// console.log(typeof (x + y * z));
// type coercion
// let x = undefined;
// console.log(x);//
// console.log(typeof x);//
// console.log(Number(x));// number constructor() // 97
// truthy falsy values ['' , 0 ,undefined ,null , NaN , false ]
// let x = NaN;// 65 - 102
// console.log(x);
// console.log(typeof x);
// console.log(Boolean(x))// boolean constructor
// // operator typeof x >> 1 + 2 >> instanceOf
// // console.log(x instanceof Object); // true - false
// if yes >> scope >> execute code
// gates >> and - or
// console.log('ka3bora' && "rabe3el7la2" && 'ala2medany');
// console.log('ka3bora' || "rabe3el7la2");
// let err = 'user not found';
// err && console.log(1) && console.log(2);
// let userNameFE = ' ';
// userNameFE = userNameFE.trim()// 'ka3bora'
// let userNameDB = 'rabe3el7l2';
// userNameDB = userNameFE || userNameDB;
// console.log(userNameDB);
// let isAdmin = '1';
// let isLogin = true;
// if (isLogin) {
//     console.log('user is logged in');
//     if (isAdmin === 1) {
//         console.log("welcome admin dashboard")
//     } else {
//         console.log('welcome user view')
//     }
// } else {
//     console.log('please login first')
// }
// let x = {};
// let y = {};
// console.log(x == y);// false
// console.log(x === y);// true
// function signup() {
//     // 1. get email , password
//     // 2. check user DB
//     // 3. if exist throw error
//     // 4. if no >> create user
//     // 5. mail >> otp
//     // 6. create transporter set credentials {user , pass}
//     // 7. send mail >> set to , subject , body
// }
// ============= types
// ==== declaration function
// function displayNumbers() {
//     return console.log
// }
//
// displayNumbers()(1);

// ==== expression fun
// ==== arrow key
// ==== annoumnc func
// ==== self invokking

function checkFalsy(value) {
    if (!value) return console.log('invalid')
}

checkFalsy(null);