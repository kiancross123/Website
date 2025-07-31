 window.onload = () => {
            loadContent('Personal-Info.html'); // Change this to your desired default page
};
function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content-area").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("content-area").innerHTML = "<p>Error loading content.</p>";
            console.error("Error:", error);
        });
}
