const showHideBtn = document.getElementById('options-btn');
const options = document.getElementById('options-box');

const showHide = () => {
    console.log("toggle called");
    if (options.style.display === "") {
        options.style.display="none";
        // showHideBtn.style.marginBottom="152.5px";
        showHideBtn.innerText="Show search options"
    } else if (options.style.display === "none") {
        options.style.display="";
        // showHideBtn.style.marginBottom="1rem";
        showHideBtn.innerText="Hide search options"
    }
};

showHideBtn.addEventListener("click", () => {
    showHide();
});

window.addEventListener("load", showHide);
