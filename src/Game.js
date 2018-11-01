'use strict'

const Dealer = require('./Dealer')
const Player = require('./Player')
const View = require('./View')

class Game {
  constructor() {
    this.players = []
    this.dealer = new Dealer()
    this.view = new View()
  }

  start() {
    if (this.players.length === 0)
      throw new Error('No players')

    console.log('Starting a game of Pontoon.')

    this.dealer.giveEveryoneACard(this.players)

    this.players.forEach(player => {
      let message = ''

      this.dealer.sendCardsUntilSatisfied(player)

      if (player.calcScore() === 21) {
        message = `${player.name} Wins!`
      } else if (player.calcScore() > 21) {
        message = `Dealer Wins!`
      } else {
        this.dealer.getCardsUntilSatisfied()

        if (this.dealer.calcScore() >= player.calcScore() && this.dealer.calcScore() <= 21) {
          message = `Dealer Wins!`
        } else {
          message = `${player.name} Wins!`
        }
      }

      this.view.print(player, this.dealer, message)

      this.dealer.clearCards()
    })
  }

  addPlayer(name, stayValue = 17) {
    this.players.push(new Player(name, stayValue))
  }
}

module.exports = Game