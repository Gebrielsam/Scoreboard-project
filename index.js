let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0


function addOneHome() {
    homeScore = homeScore + 1
    homeEl.textContent = homeScore
}

function addTwoHome() {
    homeScore = homeScore + 2
    homeEl.textContent = homeScore
}

function addThreeHome() {
    homeScore = homeScore + 3
    homeEl.textContent = homeScore
}

function addOneGuest() {
    guestScore = guestScore + 1
    guestEl.textContent = guestScore  
}

function addTwoGuest() {
    guestScore = guestScore + 2
    guestEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore = guestScore + 3
    guestEl.textContent = guestScore
}

function reset() {
    homeScore = 0
    homeEl.textContent = homeScore
    
    guestScore = 0
    guestEl.textContent = guestScore
    
    // console.log("reset")
}