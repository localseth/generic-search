const showHideBtn = document.getElementById('options-btn');
const options = document.getElementById('options-box');
const searchBox = document.getElementById('search-box');
const body = document.getElementsByTagName('body');

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

// const styleText = () => {
//     const regex = /w+/m;
//     if(regex.text(searchBox.value)) {
        
//     }
// }

showHideBtn.addEventListener("click", () => {
    showHide();
});

// searchBox.addEventListener('keyup',styleText);

window.addEventListener("load", showHide);
