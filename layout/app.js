const burgerMenu = document.querySelector("#burgerMenu");
const sideNav = document.querySelector("#sideNav");
const article = document.querySelector(".article")


arr = ['about', 'services', 'clients', 'contacts'];

showHide("about");

function showHide(value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            if (document.getElementById(arr[i])) {
                if (document.getElementById(arr[i]).style.display === "none") {
                    document.getElementById(arr[i]).style.display = "block"
                }
            }
        }
        else {
            if (document.getElementById(arr[i])) {
                document.getElementById(arr[i]).style.display = "none";
            }
        }
    }
}

burgerMenu.addEventListener("click", function () {
    sideNav.classList.toggle("sidenav-active");
    article.classList.toggle("article-push");
});



