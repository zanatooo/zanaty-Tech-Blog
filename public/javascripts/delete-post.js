async function deleteFormHandeler(event) {
    event.prevetnDefault();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statustext);
    }
    }
document.querySelector('.delete-post-btb').addEventListener('click', deleteFormHandler);