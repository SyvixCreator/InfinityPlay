// Get the modal and game container
var modal = document.getElementById("gameModal");
var gameContainer = document.getElementById("gameContainer");

// Get all the game cards
var gameCards = document.querySelectorAll(".game-card");

// Loop through each game card
gameCards.forEach(function(card) {
    card.addEventListener("click", function() {
        // Get the embed HTML from the data-game-embed attribute
        var gameEmbed = card.getAttribute("data-game-embed");

        // Insert the embed code into the game container
        gameContainer.innerHTML = gameEmbed;

        // Show the modal
        modal.style.display = "block";
    });
});

// When the user clicks on the close button, close the modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
    gameContainer.innerHTML = ""; // Remove the game from the container when closed
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        gameContainer.innerHTML = ""; // Remove the game from the container when closed
    }
}
