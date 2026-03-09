console.log("Portfolio Loaded");

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("click", () => {
        alert("Project clicked!");
    });

});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});