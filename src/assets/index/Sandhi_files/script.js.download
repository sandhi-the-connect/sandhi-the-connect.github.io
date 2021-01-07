document.addEventListener("DOMContentLoaded", () => {
    let nav = document.getElementsByTagName("nav")[0];
    
    nav.addEventListener("mouseenter", () => {
        nav.classList.add("open");

        nav.addEventListener("mouseleave", () => {
            nav.classList.remove("open");
            nav.removeEventListener("mouseleave", this);
        });
    });
});