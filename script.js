const playButton = document.getElementById("play-button");
const optionsPopup = document.getElementById("options-popup");
const closePopupButton = document.getElementById("close-popup-button");
const option1Button = document.getElementById("option1-button");
const option2Button = document.getElementById("option2-button");
const option3Button = document.getElementById("option3-button");

playButton.addEventListener("click", function () {
    optionsPopup.style.display = "flex"; // Mostra il popup
});

closePopupButton.addEventListener("click", function () {
    optionsPopup.style.display = "none"; // Nasconde il popup
});

option1Button.addEventListener("click", function () {
    sessionStorage.setItem("difficolta", "facile");
    sessionStorage.setItem('buttonClicked', 'true');
    window.location.href = "partita.html";
    optionsPopup.style.display = "none";
});

option2Button.addEventListener("click", function () {
    sessionStorage.setItem("difficolta", "media");
    sessionStorage.setItem('buttonClicked', 'true');
    window.location.href = "partita.html";
    optionsPopup.style.display = "none";
});

option3Button.addEventListener("click", function () {
    sessionStorage.setItem("difficolta", "difficile");
    sessionStorage.setItem('buttonClicked', 'true');
    window.location.href = "partita.html";
    optionsPopup.style.display = "none";
});