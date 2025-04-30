document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.querySelector(".download-btn");
    const arrButton = document.querySelector(".arrow-btn");
    const tryButton = document.querySelector(".try-btn");

    downloadButton.addEventListener("click", () => {
        alert("Downloading now...");
    });

    arrButton.addEventListener("click", () => {
        alert("Downloading ...");
    });

    tryButton.addEventListener("click", () => {
        alert("Starting your free trial!");
    });
});