'use strict'

import Player from './Player';
import { Deck } from './Deck';

export default class Dealer extends Player {
  name
  deck

  constructor(name = 'Dealer') {
    super(name)
    this.name = name
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
