'use strict';

import { Card } from './Deck';

export class Player {
  stayValue: number;
  name: string;
  cards: Card[];

  constructor(name: string, stayValue = 17) {
    this.stayValue = stayValue;
    this.name = name;
    this.cards = [];
  }

  getCard(c: Card) {
    this.cards.push(c);
  }

  wantMoreCards() {
    return this.calcScore() < this.stayValue;
  }

  calcScore() {
    let score = this.cards.reduce((a, b) => a + b.getValue(), 0);

    if (score > 21) {
      this.cards.forEach(card => {
        if (card.getRank() === 'Ace' && score > 21) score -= 13;
      });
    }

    return score;
  }

  toString() {
    // @ts-ignore
    return `${this.name.padEnd('8')}: ${this.cards.length !== 0
      ? this.cards.map(c => c.toString()).join(', ')
      : '-'} (${this.calcScore()})`;
  }
}
