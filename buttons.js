const projects = document.querySelectorAll(".project-card");  // henter alle elementene med klassen .project-card
let current = 0;

function showProject(index) {
    for (let i= 0; i < projects.length; i++) {
        if (i === index) {
            projects[i].style.display = "block";
        } else {
            projects[i].style.display = "none";
        }
    }
}

document.getElementById("next").onclick = function () {
    current = current + 1;

    if (current >= projects.length) {
        current = 0;
    }

    showProject(current);
}

document.getElementById("prev").onclick = function () {
    current = current - 1;

    if (current < 0) {
        current = projects.length - 1;
    }

    showProject(current);
}

showProject(current);
