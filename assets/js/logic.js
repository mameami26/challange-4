//function toggleMode() {
   // const header = document.body;
   // header.classList.toggle("dark-mode");
//}
//document.getElementById("toggleMode").addEventListener("click", toggleMode);
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Event listener for mode toggle button
document.getElementById("toggleMode").addEventListener("click", toggleMode);