const burgerMenu = document.querySelector("#burgerMenu");
const sideNav = document.querySelector("#sideNav");

arr = ['about', 'services', 'clients', 'contacts'];

for(let i=0;i<arr.length;i++) {
    if(arr[i] === "about"){
        if(document.getElementById(arr[i])) {
            if(document.getElementById(arr[i]).style.display === "none" || document.getElementById(arr[i]).style.display === ""){
                document.getElementById(arr[i]).style.display = "block"
            }
        }
    }
    else {
        if(document.getElementById(arr[i])) {
            document.getElementById(arr[i]).style.display = "none";
        }
    }
}
function showHide(value) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === value){
            if(document.getElementById(arr[i])) {
                if(document.getElementById(arr[i]).style.display === "none"){
                    document.getElementById(arr[i]).style.display = "block"
                }
            }
        }
        else {
            if(document.getElementById(arr[i])) {
                document.getElementById(arr[i]).style.display = "none";
            }
        }
    }
}

burgerMenu.addEventListener("click", function(){
    sideNav.classList.toggle("sidenav-active");
    // document.querySelector(".article")
});