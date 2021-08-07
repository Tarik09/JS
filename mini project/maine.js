// fetch('https://jsonplaceholder.typicode.com/users')
//     .then( response => response.json())
//     .then(users => {
//
//         let usersBox = document.getElementsByClassName('users-box') [0];
//         for (const user of users) {
//             let pUser = document.createElement('p');
//             pUser.innerText = `${user.id} - ${user.name}`;
//             let detailsBtn = document.createElement('button');
//             detailsBtn.innerText = 'Details'
//             detailsBtn.onclick = function () {
//
//                 userDetails(user.id);
//
//             }
//             pUser.appendChild(detailsBtn);
//             usersBox.appendChild(pUser);
//
//         }
//
//
//         function userDetails(user) {
//             // document.location.href = "user-details.html"
//             fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
//                 .then(value => value.json())
//                 .then(details => {
//
//
//
//                     let userDetails = document.getElementsByClassName('user-details-info') [0];
//                         let pDetails = document.createElement('p');
//                     console.log('test1');
//                         pDetails.innerText = `${details.id} - ${details.name}`;
//                     console.log('test2');
//
//                     userDetails.appendChild(pDetails);
//                     console.log('test3');
//
//                 })
//         }
//     })



