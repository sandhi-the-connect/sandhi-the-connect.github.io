document.addEventListener("DOMContentLoaded", () => {
    let display = document.getElementById("vlog-display");
    let fader = document.getElementById("fader");
    let close = document.getElementById("close-button");
    let iframe = document.querySelector("#vlog-display iframe");
    let activeGrade = 1;

    function SetActive(active) {
        if (active) {
            fader.classList.add("active");
            display.classList.add("active");

            close.addEventListener("click", () => {
                SetActive(false);
            });

            fader.addEventListener("click", () => {
                SetActive(false);
            })
        }
        else {
            fader.classList.remove("active");
            display.classList.remove("active");
            iframe.setAttribute("src", "");
        }
    }

    let blogLinks = document.getElementsByClassName("vcard-link");
    for (let link of blogLinks) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            iframe.setAttribute("src", link.getAttribute("href"));
            iframe.scrollTo(0, 0);
            SetActive(true);
        });
    }

    let gradeOptions = document.querySelectorAll("#grade-select div");
    let gradeSections = document.querySelectorAll("#grade-1,#grade-2,#grade-3,#grade-4,#grade-5")

    function SetGradeActive(grade)
    {
        console.log(`Setting ${grade-1} active and ${activeGrade-1} inactive`);
        gradeOptions[activeGrade-1].classList.remove("active");
        gradeSections[activeGrade-1].classList.remove("active");
        activeGrade = Math.min(Math.max(grade, 1), 5);
        gradeOptions[grade-1].classList.add("active");
        gradeSections[grade-1].classList.add("active");
    }

    for(let i = 0; i < gradeOptions.length; i++)
    {
        gradeOptions[i].addEventListener("click", () => {
            SetGradeActive(i+1);
        });
    }
    
    SetGradeActive(activeGrade);

});