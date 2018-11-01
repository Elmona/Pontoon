/**
 * Module for game Pontoon
 *
 * @author Emil Larsson
 * @version 1.0.0
 */

'use strict'

/**
 * Returns an object representing a deck of cards.
 *
 * @returns {function} obj.getCard - A function returning a card as a object.
 */
function Deck() {
  this.cards = []
  this.scrapHeap = []
  this._generateCards()
  this._shuffleDeck()
}

/** 
 * Returns a card as an object.
 *
 * @returns {object} - {value, color}.
 */
Deck.prototype.getCard = function () {
  // If only one card left in the deck. Use the scrapheap and shuffle.
  if (this.cards.length === 1) {
    this.scrapHeap.push(this.cards.shift())
    this.cards = this.scrapHeap.slice()
    this.scrapHeap.length = 0
    this._shuffleDeck()
  }
  return this.cards.shift()
}
/**
 * Return all the used cards from player/dealer to an scrap heap.
 * @param {object} - Object containing the player/dealer
 */
Deck.prototype.pushToScrapHeap = function (player) {
  player.hand.forEach(x => {
    this.scrapHeap.push(x)
  })
}

/**
 * Generates 52 cards in a array of objects
 * Ace count === 14
 */
Deck.prototype._generateCards = function () {
  let suit = ['♥', '♦', '♣', '♠']
  for (let i = 0; i < 4; i++) {
    for (let y = 2; y < 15; y++) {
      let label = y
      switch (label) {
        case 11:
          label = 'Kn'
          break
        case 12:
          label = 'Q'
          break
        case 13:
          label = 'K'
          break
        case 14:
          label = 'A'
          break
      }
      this.cards.push(
        {
          value: y,
          label: label,
          suit: suit[i]
        }
      )
    }
  }
}

/**
 * Shuffle the deck.
 */
Deck.prototype._shuffleDeck = function () {
  let n = this.cards.length
  let temp

  while (n) {
    let i = Math.floor(Math.random() * n--)
    temp = this.cards[n]
    this.cards[n] = this.cards[i]
    this.cards[i] = temp
  }
}

module.exports = Deck