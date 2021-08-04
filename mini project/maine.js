fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => {

        let usersBox = document.getElementsByClassName('users-box') [0];
        for (const user of users) {
            let pUser = document.createElement('p');
            pUser.innerText = `${user.id} - ${user.name}`;
            let detalistBtn = document.createElement('button');
            detalistBtn.innerText = 'Details'
            detalistBtn.onclick = function () {


            }
            pUser.appendChild(detalistBtn);
            usersBox.appendChild(pUser);
        }

    })