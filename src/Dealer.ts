'use strict';

import { Player } from './Player';
import { Deck, Card } from './Deck';

export class Dealer extends Player {
  name: string;
  deck: Deck;

  constructor(name = 'Dealer') {
    super(name);
    this.name = name;
    this.deck = new Deck();
  }

  giveEveryoneACard(players: Player[]) {
    players.forEach(player => {
      const card = this.deck.getCard();
      player.getCard(card);
    });
  }

  sendCardsUntilSatisfied(player: Player) {
    while (player.wantMoreCards()) {
      player.getCard(this.deck.getCard());
    }
  }

  getCardsUntilSatisfied() {
    while (this.wantMoreCards()) {
      this.cards.push(this.sendCard());
    }
  }

  sendCard() {
    return this.deck.getCard();
  }

  clearCards() {
    this.cards = [];
  }
}
