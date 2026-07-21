// 1. callbacks
// callback control flow execution function
// update on DB
// // 1. get user data from DB (old data)
// function getUserById(fn) {
//     setTimeout(() => {
//         const data = {userName: "ka3bora", id: 1, email: "k@g.com"};
//         console.log(data)
//         if (typeof fn === 'function') fn(); // ()=>{updateUser()}()
//     }, 3000)
// }
//
// // 2. update user data into DB (new Data)
// function updateUser(fn) {
//     setTimeout(() => {
//         console.log('updated');
//         if (typeof fn === 'function') fn();
//     }, 2000)
// }
//
// // 3. return response
// function returnResponse(fn) {
//     setTimeout(() => {
//         console.log('user updated successfully');
//         if (typeof fn === 'function') fn();
//     }, 1000)
// }
//
// // callback hell
// getUserById(() => {
//     updateUser(() => {
//         returnResponse(() => {
//             console.log('successfully');
//         })
//     });
// });

//===================== 2. promises
function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (typeof id !== 'number') return reject('id must be a number');
        // collect all fields (name , id , email , password ) from users; // []
        setTimeout(() => {
                let users = [{userName: "ka3bora", email: "ka3bora@g.com"}];
                console.log(users);
                return resolve(users);
            }, 2000
        )
    });
}

function updateUser() {
    return new Promise((resolve, reject) => {
        // update id , name , email set newId , newName , newEmail >> 0
        setTimeout(() => {
            let modifiedNumbers = 0;
            console.log('user updated')
            resolve(modifiedNumbers);
        }, 1000)
    });
}

function deleteUser() {
    return new Promise((resolve, reject) => {
        // delete from users ;// deletedCount = 0;
        let deletedCount = 1;
        console.log('user deleted')
        resolve(deletedCount)
    });
}

// getUserById(1).then((users) => {
//     if (users.length === 0) {
//         console.log('no users found.');
//     } else {
//         updateUser().then((modifiedNumbers) => {
//             if (modifiedNumbers === 0) {
//                 console.log('fail to update users')
//             } else {
//                 console.log('updated user successfully.');
//             }
//         })
//     }
// }).catch((reason) => {
//     console.log(reason);
// })
//
// getUserById(2).then((users) => {
//     deleteUser().then((deletedCount) => {
//         if (deletedCount === 0) {
//             console.log('no users found.');
//         } else {
//             console.log('user deleted successfully.');
//         }
//     })
// })


// 3. async await
async function callAll() {
    try {
        await getUserById("2");
        await updateUser();
    } catch (error) {
        console.log(error);
    }
}

async function callAll2() {
    await getUserById(3);
    await deleteUser();
}

callAll();
callAll2();
// 4. try catch
// 5. hoisting TDZ scops