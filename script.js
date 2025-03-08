function calculateEXP() {
    // Pobieranie wartości z formularza
    const numPlayers = parseInt(document.getElementById("numPlayers").value);
    const gameCount = parseInt(document.getElementById("gameCount").value);
    const playerLevelsInput = document.getElementById("playerLevels").value;
    
    // Przekształcanie poziomów graczy na tablicę
    const playerLevels = playerLevelsInput.split(',').map(level => parseInt(level.trim()));

    // Walidacja danych
    if (isNaN(numPlayers) || isNaN(gameCount) || playerLevels.length !== numPlayers) {
        alert("Wprowadź poprawne dane.");
        return;
    }
    
    // Obliczanie sumy poziomów graczy
    const totalLevels = playerLevels.reduce((acc, level) => acc + level, 0);

    // Obliczanie EXP dla każdego gracza
    const totalEXP = (totalLevels * 10) * gameCount; // Przykładowa formuła EXP
    const expPerPlayer = totalEXP / numPlayers;

    // Wyświetlanie wyniku
    document.getElementById("result").innerText = `Całkowity EXP: ${totalEXP}\nEXP na gracza: ${expPerPlayer.toFixed(2)}`;
}
