document.addEventListener("DOMContentLoaded", () => {
    let bios = document.getElementsByClassName("bio");
    
    for(let bio of bios)
    {
        (() => 
        {
            let parent = bio.parentElement;
            parent.addEventListener("click", (e) => {
                console.log("ok");
                parent.classList.toggle("active");
            });
        })();
    }
});