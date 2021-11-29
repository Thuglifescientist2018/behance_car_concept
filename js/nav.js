let navshowclose_btn = document.querySelector("#closenav i");

navshowclose_btn.addEventListener("click", function () {
    let menus = document.querySelector("#main-nav #menus");
    let right_nav_info = document.querySelector("#main-nav #right_nav_info");
    if(menus.style.display !== "none"){
        menus.style.display = "none";
       
        right_nav_info.style.display = "none";
        this.classList.remove("fa-window-close");
        this.classList.add("fa-check");
    }
    else {
        menus.style.display = "block";
        right_nav_info.style.display = "block";
        this.classList.remove("fa-check");
        this.classList.add("fa-window-close");
    }
})