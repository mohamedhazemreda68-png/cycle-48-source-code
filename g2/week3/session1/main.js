// destructing , spreed , rest [named vs positional  arguments]
// collect name , price, stock from products where name = iphone 17;
// let dbResult = [
//     2,
//     {name: "iphone 17", price: 50000, stock: 5},
//     {name: "iphone 17", price: 60000, stock: 3}
// ]
// // const productCount = dbResult[0];
// // const p1 = dbResult[1];
// // const p2 = dbResult[2];
// // rest operator
//
// const [productCount, ...products] = dbResult;
//
// console.log(productCount);
// console.log(products);
// let arr = [12, 13, 14];
// ...[[]] >> []
// ...[{},{},{}] >> {},{},{}
// let arr1 = [1, 2, 3, 4, [1, 2, 3]];
// let arr2 = JSON.parse(JSON.stringify(arr1)); // "[1,2,3,4,[1,2,3]]"
//
// console.log(arr2 == arr1);
// arr2[4][0] = 100;
// console.log(arr2);
// console.log(arr1);
// console.log(arr1);
// shallow copy
// deep copy >>

// console.log(arr2);
// console.log(arr1);
// arr2 = arr2.map(x => x * 2);
// console.log(arr1);
// console.log(arr2);
// arr.push(...[1, 2]); // ...items >> [1, 2] iterate items push each ele
// console.log(arr);// [12, 13, 14, 1]
// 1. callbacks
// update profile >> 1. get user data - 2. update user
// delete profile >> 1. get user data - 2. delete user
// function getUserData(fn) {
//     // collect name, email ,password from users where id = 1;
//     setTimeout(() => {
//         let data = {userName: "ka3bora"};
//         console.log('getUserData', data);
//         if (typeof fn === 'function') fn();
//     }, 3000)
// }
//
// function updateUser() {
//     // update users set name = 'ka3bora2' , password= 12345;
//     setTimeout(() => {
//         let data = {userName: "ka3bora2", password: "1234567890"};
//         console.log('updateUser', data);
//         console.log('user updated successfully')
//     }, 2000)
// }
//
// getUserData(
//     updateUser
// );// 3000
//
// getUserData(
//     function () {
//         /**
//          * deleteUser(()=>{
//          *     deleteRelatedPosts(()=>{
//          *         deleteRElatedComments(()=>{
//          *             deleteRelatedRaections(()=>{
//          *                 deleteAllReels(()=>{
//          *                     deleteRelactedFilesOnCloud()
//          *                 })
//          *             })
//          *         })
//          *     })
//          * })
//          */
//     }
// )
//
// getUserData()
//===================== 2. promises
function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (typeof id !== 'number') {
            return reject('id must be a number');
        }
        // collect data from users >> [{name:"ka3bora"}] >> []
        // resolve >> call in success case
        // reject >> call in fail case >> error
        let userData = [{userName: "ka3bora"}];
        console.log(userData);
        return resolve(userData);
    });
}

function updateUser() {
    return new Promise((resolve, reject) => {
        // update users set name = newName;
        let updatedData = {userName: "ka3bora new"};
        resolve(updatedData);
    })
}

// update
getUserById(123456).then((value) => {
    if (value.length === 0) {
        return console.error('user not found please register.');
    }
    updateUser().then(
        (value) => {
            console.log(value)
        }
    )
}).catch((reason) => {
    console.log(reason);
});


// delete
getUserById(123456).then((value) => {
    if (value.length === 0) {
        return console.error('user not found please register.');
    }
    // deleteUser
})
// 3. async await
// 4. try catch