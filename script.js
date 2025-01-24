document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on a game!');
    });
});
