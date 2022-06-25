async function createPosthandler(event) {
    event.preventDefault();
    document.location.replace('/dashboard/new')

}

document.querySelector('#create_new-post').addEventListener('click', createPosthandler);