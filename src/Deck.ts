
class Card {
  private suit: string
  private rank: string
  private value: number
  private stringRepresentation: string

  constructor(suit: string, rank: string, value: number, stringRepresentation: string) {
    this.suit = suit
    this.rank = rank
    this.value = value
    this.stringRepresentation = stringRepresentation
  }

  getValue() {
    return this.value
  }

  getSuit() {
    return this.suit
  }

  getRank() {
    return this.rank
  }

  toString() {
    return this.stringRepresentation
  }
}

export class Deck {
  stringSuits: string[] = ['♥', '♦', '♣', '♠']
  suits: string[] = ["Heart", "Diamond", "Club", "Spade"]
  stringRanks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Kn", "Qn", "K", "A"]
  ranks: string[] = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Knight", "Queen", "King", "Ace"]

  private _cards: Card[]

  constructor() {
    this._cards = []

    for (let s = 0; s < 4; s++)
      for (let r = 0; r < 13; r++)
        this._cards.push(new Card(this.suits[s], this.ranks[r], r + 2, `${this.stringSuits[s]} ${this.stringRanks[r]}`))

    this.shuffle()
  }


  getCard() {
    if (this._cards.length > 0) {
      return this._cards.pop()
    } else {
      throw new Error('Deck have no more cards.')
    }
  }

  private shuffle() {
    let n = this._cards.length
    let temp

    while (n) {
      let i = Math.floor(Math.random() * n--)
      temp = this._cards[n]
      this._cards[n] = this._cards[i]
      this._cards[i] = temp
    }
  }
}
