let homeScore = 0
let awayScore = 0

function updateScoreboard() {
    document.getElementById("home-score-el").textContent = homeScore
    document.getElementById("away-score-el").textContent = awayScore
}

updateScoreboard()

function addHomePoint(point) {
    homeScore += point
    updateScoreboard()
}

function addAwayPoint(point) {
    awayScore += point
    updateScoreboard()
}

function resetGame() {
    homeScore = 0
    awayScore = 0
    updateScoreboard()
}