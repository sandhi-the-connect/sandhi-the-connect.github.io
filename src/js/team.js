document.addEventListener("DOMContentLoaded", () => {
    let bios = document.getElementsByClassName("bio");
    
    for(let bio of bios)
    {
        (() => 
        {
            active = false;
            let parent = bio.parentElement;
            let socials = Array.prototype.slice.call(parent.getElementsByTagName("a"));
            console.log(socials);
            parent.addEventListener("click", (e) => {
                if(socials.includes(e.target)) return;
                active = !active;
                parent.classList.toggle("active", active);
            });
        })();
    }
});