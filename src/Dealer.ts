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
      player.getCard(this.getCardFromDeck());
    });
  }

  sendCardsUntilSatisfied(player: Player) {
    while (player.wantMoreCards()) {
      player.getCard(this.getCardFromDeck());
    }
  }

  getCardsUntilSatisfied() {
    while (this.wantMoreCards()) {
      this.cards.push(this.getCardFromDeck());
    }
  }

  private getCardFromDeck() {
    try {
      return this.deck.getCard();
    } catch (e) {
      this.deck = new Deck();
      return this.deck.getCard();
    }
  }

  clearCards() {
    this.cards = [];
  }
}
