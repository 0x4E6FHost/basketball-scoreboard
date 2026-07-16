let homeScore = 0
let guestScore = 0

function updateScoreboard() {
    document.getElementById("home-score-el").textContent = homeScore
    document.getElementById("guest-score-el").textContent = guestScore
}

updateScoreboard()

function addHomePoint(point) {
    homeScore += point
    updateScoreboard()
}

function addGuestPoint(point) {
    guestScore += point
    updateScoreboard()
}

function resetGame() {
    homeScore = 0
    guestScore = 0
    updateScoreboard()
}