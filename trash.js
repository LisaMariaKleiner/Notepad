let trashTitles = [];
let trashPosts = [];
loadTrash();


function renderTrash() {

    let trashContent = document.getElementById('trash_Post');
    trashContent.innerHTML = '';

    for (let i = 0; i < trashTitles.length; i++) { 
        const trashTitle = trashTitles[i]; 
        const trashPost = trashPosts[i];

        trashContent.innerHTML += `
            <div class="postIts">
                <h2 class="postTitle"><b> ${trashTitle} </b></h2>
                <p> ${trashPost}</p>
                <div class="buttonsTrash">
                    <button class="image_button_restore" onclick="restore(${i})"></button>
                    <button class="image_button_delete" onclick="deleteComplete(${i})"></button>
                </div>
            </div>
            `;
    }
}





function saveTrash() {
    let trashPostAsText = JSON.stringify(trashPosts);
    localStorage.setItem('trashPosts', trashPostAsText);
    let trashTitleAsText = JSON.stringify(trashTitles);
    localStorage.setItem('trashTitles', trashTitleAsText);
}

function loadTrash() {
    let trashPostAsText = localStorage.getItem('trashPosts');
    let trashTitleAsText = localStorage.getItem('trashTitles');
    if (trashTitleAsText && trashPostAsText) {
        trashPosts = JSON.parse(trashPostAsText);
        trashTitles = JSON.parse(trashTitleAsText);
    }
}

function restore(i) {
    titles.push(trashTitles[i]);
    posts.push(trashPosts[i]);

    trashPosts.splice(i,1);
    trashTitles.splice(i,1);

    save();
    saveTrash();
    renderTrash();
}


function deleteComplete(i) {

    const confirmation = confirm('Möchtest du die Notiz endgültig löschen?');

    if (confirmation) {

        trashTitles.splice(i, 1);
        console.log(titles);

        trashPosts.splice(i, 1);
        console.log(posts);

        saveTrash();
        renderTrash();
        loadTrash();
    }
}
