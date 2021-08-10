const JOSINPost = new URL(location).searchParams.get('post');
const post = JSON.parse(JOSINPost);
document.getElementsByClassName('post-detail') [0].innerHTML = `
    <div class="id">
        postid: <span>${post.userId}</span><br/>
        id: ${post.id}<br/>
        title: ${post.title}<br/>
        body: ${post.body}<br/>
    </div>
    `



fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {

        let commentsBox = document.getElementsByClassName('comments-box') [0];
        commentsBox.innerHTML = '';

        for (const comment of comments) {
            let pComments = document.createElement('p');
            pComments.className = `${comment.id}`;


            pComments.innerHTML = `
            postid: ${comment.postId}<br/>
            id: ${comment.id}<br/>
            name: ${comment.name}<br/>
            email: ${comment.email}<br/>
            body: ${comment.body}<br/>
            `


            commentsBox.appendChild(pComments);

        }




    })
