'use strict'

const Player = require('./Player')
const Deck = require('./Deck')

class Dealer extends Player {
  constructor() {
    super()
    this.name = 'Dealer'
    this.deck = new Deck()
  }

  giveEveryoneACard(players) {
    players.forEach(player => {
      player.getCard(this.deck.getCard())
    })
  }

  sendCardsUntilSatisfied(player) {
    while (player.wantMoreCards()) {
      player.getCard(this.deck.getCard())
    }
  }

  getCardsUntilSatisfied() {
    while (this.wantMoreCards()) {
      this.cards.push(this.sendCard())
    }
  }

  sendCard() {
    return this.deck.getCard()
  }

  clearCards() {
    this.cards = []
  }
}

module.exports = Dealer