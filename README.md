# My Personal Blog

This is a simple personal blog application that allows users to create and view blog posts. Users can submit blog posts containing a username, title, and content, which are then stored locally. The application provides a landing page with a form for creating new posts and a separate page for viewing existing posts.

### Landing Page:
- When the app loads, users are presented with a landing page containing a form.
- The form includes input fields for username, blog title, and blog content.
- Users can submit the form to create a new blog post.
- If the form is submitted without a username, title, or content, users are prompted to complete the form.

### Posts Page:
- Users can view existing blog posts on a separate page.
- The posts page includes a header with a light mode/dark mode toggle and a "Back" button.
- Clicking the light mode/dark mode toggle updates the page content's styles accordingly.
- Clicking the "Back" button redirects users back to the landing page.

### Blog Posts:
- On the posts page, users are presented with a list of blog posts pulled from localStorage.
- Each blog post includes the title, content, and author's username.
- Users can click on individual blog posts to view more details.

### Additional Features:
- The application includes a footer with a link to the developer's portfolio.

## File Structure
my-blog
├── assets
│ ├── css
│ │ ├── blog.css
│ │ ├── form.css
│ │ └── styles.css
│ └── js
│ ├── blog.js
│ ├── form.js
│ └── logic.js
├── index.html
├── blog.html
└── README.md