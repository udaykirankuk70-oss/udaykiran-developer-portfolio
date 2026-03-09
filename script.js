console.log("Portfolio Loaded");

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("click", () => {
        alert("Project clicked!");
    });

});