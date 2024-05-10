function displayPosts() {
    const postsList = document.getElementById("postsList");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (posts.length === 0) {
        postsList.innerHTML = "<p>No posts yet.</p>";
        return;
    }

    postsList.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>Author:</strong> ${post.username}</p>
            <p>${post.content}</p>
        `;
        postsList.appendChild(postElement);
    });
}

window.addEventListener("load", displayPosts);
