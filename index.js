let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-points-text")
let guestScoreEl = document.getElementById("guest-points-text")
let homeColor = document.getElementById("board-title-home")
let guestColor = document.getElementById("board-title-guest")

function checkLeader() {
    if (homeScore > guestScore) {
        homeColor.style.color = "#690000"
        guestColor.style.color = "white"
    }
        
    else if (guestScore > homeScore){
        guestColor.style.color = "#690000"
        homeColor.style.color = "white"
    }
    else {
        homeColor.style.color = "white"
        guestColor.style.color = "white"
    }
}

function add1HomePoint() {
    homeScore++
    checkLeader()
    homeScoreEl.textContent = homeScore
}

function add2HomePoints() {
    homeScore += 2
    checkLeader()
    homeScoreEl.textContent = homeScore
}

function add3HomePoints() {
    homeScore += 3
    checkLeader()
    homeScoreEl.textContent = homeScore
}

function add1GuestPoint() {
    guestScore++
    checkLeader()
    guestScoreEl.textContent = guestScore
}

function add2GuestPoints() {
    guestScore += 2
    checkLeader()
    guestScoreEl.textContent = guestScore
}

function add3GuestPoints() {
    guestScore += 3
    checkLeader()
    guestScoreEl.textContent = guestScore
}

function newGame() {
    homeScore= 0;
    guestScore = 0
    checkLeader()
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}