// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {return response.json(); })
//     .then((posts) => {
//         let postsBox = document.getElementsByClassName('posts-box') [0];
//         for (const post of posts) {
//             let pPost = document.createElement('p');
//             pPost.innerText = `${post.id} - ${post.title} `;
//             postsBox.append(pPost);
//         }
//
//     });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//         .then((comments) => {return comments.json()})
//         .then((comments) => {
//
//             let commentBox = document.getElementsByClassName('comments-box') [0];
//             for (const comment of comments) {
//                 console.log(comment);
//                 let pComment = document.createElement('p');
//                 pComment.innerText = `${comment.id} - ${comment.name}`;
//                 commentBox.append(pComment);
//             }
//         });

