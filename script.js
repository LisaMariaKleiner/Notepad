let posts = [];
let titles = [];
load();

function render() {
    let bodyPosts = document.getElementById('bodyPosts');
    bodyPosts.innerHTML = '';

    if (posts.length == 0) {
        bodyPosts.innerHTML = '';
    } else {

        for (let i = 0; i < posts.length; i++) { 
        const post = posts[i]; 
        const title = titles[i];
    
        bodyPosts.innerHTML += `
            <div class="postIts">
                <h2 class="postTitle"><b> ${title} </b></h2>
                <p> ${post}</p>
                <button class="image_button" onclick="trashNote(${i})"></button>
            </div>
            `;
    }}
}

/*function checkEnter(event) {
    if (event.key === 'Enter') {
        addNote();
    }
}
*/

function addNote() { 
    let post = document.getElementById('postDescription'); 
    let title = document.getElementById('postTitle'); 

    if (post.value.trim() === '' || title.value.trim() === '') {
        alert('Es müssen beide Felder ausgefüllt werden.');
        return;
    }

    posts.push(post.value); 
    titles.push(title.value); 

  
    title.value = '';
    post.value = '';

    save();
    render(); 
}


function trashNote(i) {
    trashTitles.push(titles[i])
    trashPosts.push(posts[i]);

    posts.splice(i, 1);   
    titles.splice(i, 1);

    saveTrash();
    save();
    render();
}


function save() {
    let postAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postAsText);
    let titleAsText = JSON.stringify(titles);
    localStorage.setItem('titles', titleAsText);
}


function load() {
    let postAsText = localStorage.getItem('posts');
    let titleAsText = localStorage.getItem('titles');
    if (postAsText && titleAsText) {
        posts = JSON.parse(postAsText);
        titles = JSON.parse(titleAsText);
    }
}
