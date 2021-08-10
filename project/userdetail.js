const JOSINUser = new URL(location).searchParams.get('user');
const user = JSON.parse(JOSINUser);
document.getElementsByClassName("details-box")[0].innerHTML =`

    <div class="id infoDetail">
        id: ${user.id}<br/>
        name: ${user.name}<br/>
        username: ${user.username}<br/>
        email: ${user.email}<br/>
    </div>
    <div class="info infoDetail">
        address:
     </div>
    <div class="address infoDetail">
        street: ${user.address.street}<br/>
        suite: ${user.address.suite}<br/>
        city: ${user.address.city}<br/>
        zipcode: ${user.address.zipcode}<br/>
    </div>

    <div class="info infoDetail">
            geo:
    </div>

    <div class="geo infoDetail">
            lat: ${user.address.geo.lat}<br/>
            lng: ${user.address.geo.lng}<br/>
    </div>

    <div class="phone infoDetail">
    phone: ${user.phone}<br/>
    website: ${user.website}<br/>
    </div>

    <div class="info infoDetail">
        company:
    </div>

    <div class="company infoDetail">
        name: ${user.company.name}<br/>
        catchPhrase: ${user.company.catchPhrase}<br/>
        bs: ${user.company.bs}<br/>
    </div>
       `
let buttonDiv = document.getElementsByClassName('button-detail') [0];

let detalisBtn = document.createElement('button');
detalisBtn.innerText = 'post of current user';
buttonDiv.append(detalisBtn);

detalisBtn.onclick = function () {


    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {




            let postsBox = document.getElementsByClassName('posts-box') [0];
            postsBox.innerHTML = '';
            for (const post of posts) {
                let liPost = document.createElement('li');
                liPost.innerText = `${post.title}`;

                let buttonDetail = document.createElement('a');
                buttonDetail.innerText = 'post';

                buttonDetail.href = `post-details.html?post=${JSON.stringify(post)}`;


                liPost.append(buttonDetail);
                postsBox.append(liPost);

            }

        })

}