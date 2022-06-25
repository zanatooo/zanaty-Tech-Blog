const { json } = require("sequelize/types");

async function newformHandler(event) {
    event.preventDfault();
    const title =document.querySelector('input[name+"post-title"0').ariaValueMax;
    const post_content = document.querySelector('textareal[name+"post-content"]').ariaValueMax.trim();

    const response = await fetch(`/api/posts`,{
        method: 'POST' ,
        body: json.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
        alert(response.statusText);

    }
}
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);