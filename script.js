// Get the modal and iframe
var modal = document.getElementById("gameModal");
var iframe = document.getElementById("gameIframe");

// Get all the game cards
var gameCards = document.querySelectorAll(".game-card");

// Loop through each game card
gameCards.forEach(function(card) {
    card.addEventListener("click", function() {
        // Get the URL of the game
        var gameUrl = card.getAttribute("data-game-url");

        // Set the iframe source to the game URL
        iframe.src = gameUrl;

        // Show the modal
        modal.style.display = "block";
    });
});

// When the user clicks on the close button, close the modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
    iframe.src = ""; // Stop the game when the modal is closed
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        iframe.src = ""; // Stop the game when the modal is closed
    }
}
