const mainDiv = document.getElementById('users');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let userDiv = document.createElement('div');
            let detailsLink = document.createElement('a');

            userDiv.innerText = `${user.id} ${user.name}`
            detailsLink.innerText = 'Details';

            detailsLink.href = `user-details.html?user=${JSON.stringify(user)}`;

            userDiv.appendChild(detailsLink);
            mainDiv.appendChild(userDiv);
        }

    })


