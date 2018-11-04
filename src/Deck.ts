'use strict';

export enum Suit {
  Heart = '♥',
  Diamond = '♦',
  Club = '♣',
  Spade = '♠'
}

export enum Rank {
  Two = 2,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Knight,
  Queen,
  King,
  Ace 
}

export class Card {
  private suit: Suit;
  private rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getValue() {
    return this.rank.valueOf();
  }

  getSuit() {
    return this.suit;
  }

  getRank() {
    return this.rank;
  }

  toString() {
    const suit = this.suit.valueOf();
    let rank = '';

    switch (this.rank) {
      case Rank.Ace: rank = 'A'; break;
      case Rank.Knight: rank = 'Kn'; break;
      case Rank.Queen: rank = 'Q'; break;
      case Rank.King: rank = 'K'; break;
      default: rank = this.rank.toString(); break;
    }

    return `${suit} ${rank}`;
  }
}

export class Deck {
  private _cards: Card[];

  constructor() {
    this._cards = [];

    const suits: Suit[] = Object.values(Suit);
    const ranks: Rank[] = Object.values(Rank).filter(rank => !isNaN(rank));

    for (const suit of suits) {
      for (const rank of ranks) {
        this._cards.push(new Card(suit, rank));
      }
    }

    this.shuffle();
  }


  getCard() {
    const card = this._cards.pop();

    if (card === undefined) {
      throw new Error('Deck have no more cards.');
    }

    return card;
  }

  private shuffle() {
    let n = this._cards.length;
    let temp;

    while (n) {
      const i = Math.floor(Math.random() * n--);
      temp = this._cards[n];
      this._cards[n] = this._cards[i];
      this._cards[i] = temp;
    }
  }
}
