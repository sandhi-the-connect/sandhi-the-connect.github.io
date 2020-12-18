document.addEventListener("DOMContentLoaded", () => {
    let display = document.getElementById("blog-display");
    let fader = document.getElementById("fader");
    let close = document.getElementById("close-button");
    let iframe = document.querySelector("#blog-display iframe");

    function SetActive(active)
    {
        if(active)
        {
            fader.classList.add("active");
            display.classList.add("active");

            close.addEventListener("click", () => {
                SetActive(false);
            });

            fader.addEventListener("click", () => {
                SetActive(false);
            })
        }
        else
        {
            fader.classList.remove("active");
            display.classList.remove("active");
            iframe.setAttribute("src", "");
        }
    }

    let blogLinks = document.getElementsByClassName("blog-card-link");
    for(let link of blogLinks)
    {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            iframe.setAttribute("src", link.getAttribute("href"));
            iframe.scrollTo(0,0);
            SetActive(true);
        });
    }
});