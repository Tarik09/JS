// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {


        let usersBox = document.getElementsByClassName('users-box') [0];
        for (const user of users) {
            let pUser = document.createElement('p');
            pUser.innerText = `${user.id} - ${user.title}`;
            let detalisBtn = document.createElement('button');
            detalisBtn.innerText = 'Details';
            detalisBtn.onclick = function () {
                console.log('print of posts of user', user.id);

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(posts => {

                        let postsBox = document.getElementsByClassName('posts-box') [0];
                        postsBox.innerHTML = '';
                        for (const post of posts) {
                            let liPost = document.createElement('li');
                            liPost.innerText = `${post.body}`;
                            postsBox.append(liPost);

                        }

                    })
            };
            pUser.appendChild(detalisBtn);
            usersBox.appendChild(pUser);
        }
    })
