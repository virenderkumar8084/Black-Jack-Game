let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Peter",
    chips: 245
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getrandom() {
    let random_number = Math.floor(Math.random() * (13)) + 1  // 1-13
    if (random_number > 10)
        return 10
    else if (random_number === 1) return 11
    else return random_number
}

function startGame() {
    isAlive = true
    let firstCard = getrandom()
    let secondCard = getrandom()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Wohoo! You have got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from deck!")
        let card = getrandom()
        sum += card
        cards.push(card)
        renderGame()
    }
}