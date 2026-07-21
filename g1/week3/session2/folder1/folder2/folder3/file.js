const path = require('node:path');
let path1 = '888/444';
let path2 = '1.jpg';
console.log(__dirname);
const result = path.resolve(__dirname, path1, path2);// root dir OS // D:\route\c48\g1/888/444/1.jpg
console.log(result)