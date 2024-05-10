
function handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;


    if (!username || !title || !content) {
        document.getElementById("formMessage").textContent = "Please complete all fields.";
        return;
    }

   
    const postData = {
        username: username,
        title: title,
        content: content
    };
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(postData);
    localStorage.setItem("posts", JSON.stringify(posts));

   
    window.location.href = "blog.html";
}


document.getElementById("blogForm").addEventListener("submit", handleSubmit);