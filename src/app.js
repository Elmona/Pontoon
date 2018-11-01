'use strict'

const Game = require('./Game')

try {
  const game = new Game()

  game.addPlayer('Emil')
  game.addPlayer('Kalle', 17)
  game.addPlayer('Louise', 15)

  game.start()
} catch (e) {
  console.log(e)
}