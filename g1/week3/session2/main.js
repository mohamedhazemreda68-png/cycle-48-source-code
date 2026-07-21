// modules >> file >> js >> functions
// implementation hidden >> file
// call functions


// const updatedUser = userModule.updateUser({userName: "ka3bora new", password: '12345new'});
// console.log(updatedUser);
// userModule.deleteUser();
// const userData = userModule.getUser();
// console.log(userData)

// modules
// 1. local modules         >> user define
// 2. core/built-in modules >> node.JS
// nodeJS >> path
// ============ path
// const path = require('node:path');
// let path1 = 'week3\\session2';
// let path2 = 'profile.jpg';
//
// // files >> store files >> paths >> absolute - relative
// // path
// // absolute - relative
// // console.log(path.isAbsolute(path1))
// // D:\g1\week3\
// const result = path.resolve(path1, path2);// root dir OS
// console.log(result)
const path = require('node:path');
let path1 = '888/444';
let path2 = '1.jpg';
console.log(__dirname);
const result = path.join(__dirname, path1, path2);// root dir OS // D:\route\c48\g1/888/444/1.jpg
// next session >> file system - event - http
// host + pp