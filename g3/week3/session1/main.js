// ? 1. callbacks
// >> update >> get user data then update
// >> delete >> get user data then delete
// >> profile >> get user data
// function getUserData(fn) {
//
//     // select name , email , password from users where id = 1;
//     setTimeout(() => {
//         let userData = {username: "ka3bora", password: "12345"}
//         console.log('userData', userData);
//         if (typeof fn === 'function') fn();
//     }, 3000)
// }
//
// function updateUser(id, newData) {
//
//     // update users set name = newName , email = newEmail;
//     setTimeout(() => {
//         let updatedData = {userName: "ka3bora new"};
//         console.log('updatedData', updatedData);
//     }, 2000)
// }

//
// getUserData(
//     function () {
//         updateUser(12, 'ka3bora');
//     }
// );

/**
 *
 * getUserData(()=>{
 *     deleteUser(1,()=>{
 *         deleteAllRelatedosts(()=>{
 *             deleletAllRelatedComments(()=>{
 *                 deleteAllRelatedLikes(()=>{
 *                     deleteAllrelatedReels(()=>{
 *                         deleteallRelatedVideos(()=>{
 *                             deleteAllRealtedFiles()
 *                         })
 *                     })
 *                 })
 *             })
 *         })
 *     })
 * })
 */

// getUserData();// 3000
// updateUser();// 0
// getUser().then(() => {
//     updateUser().then(() => {
//         createOrder().then(() => {
//             callPaymentGateway()
//         })
//     })
// })
// ? 2. promises
function getUserById(id) {
    return new Promise((resolve, reject) => {
        // select name , email , password from users where id = 1;
        // [{name:"ka3bora",password:12345,email:"k@g.com"}]
        // []
        if (typeof id !== 'number') {
            return reject('id must be a number');
        }
        setTimeout(() => {
            let userData = [{userName: "ka3bora"}];
            console.log(userData);
            resolve(userData);
        }, 1000)
    })
}

function updateUserDB() {
    return new Promise((resolve, reject) => {
        // update users set userName = new Name
        setTimeout(() => {
            let updatedData = {userName: "ka3bora new"};
            console.log(updatedData);
            resolve(updatedData)
        }, 500)
    })
}

// getUserById(123456).then(
//     (userDate) => {
//         if (userDate.length === 0) {
//             return console.log('user not found please register.');
//         }
//         console.log(userDate);
//         updateUser().then((updatedUser) => {
//             console.log(updatedUser);
//         })
//     }
// ).catch((reason) => {
//     console.error(reason);
// })
//
// getUserById().then((userData) => {
//     // delete
// })
// ? 3. async await
async function updateUserAPI() {
    await getUserById(1234);// 1000
    await updateUserDB();// 500
    console.log('user updated successfully.');
}

updateUserAPI();

// ? 4. try catch58479