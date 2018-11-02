'use strict'

import { expect } from 'chai'
import { Deck } from '../src/Deck'
import Player from '../src/Player'

describe('Player', () => {
  it('Test if player wants a card with empty hand.', done => {
    const player = new Player('test')
    const response = player.wantMoreCards()

    expect(response).to.eql(true)
    done()
  })

  it('Expect player with one ace to return sum 14', done => {
    const player = new Player('test')

    const cards = getFullDeck()
    const aces = cards
      .filter(card => card.rank === 'Ace')

    player.getCard(aces[0])

    expect(player.calcScore()).to.eql(14)
    done()
  })

  it('Expect player with two aces to return sum 15', done => {
    const player = new Player('test')

    const cards = getFullDeck()
    const aces = cards
      .filter(card => card.rank === 'Ace')

    player.getCard(aces[0])
    player.getCard(aces[1])

    expect(player.calcScore()).to.eql(15)
    done()
  })

  it('Expect player with three aces to return sum 16', done => {
    const player = new Player('test')

    const cards = getFullDeck()
    const aces = cards
      .filter(card => card.rank === 'Ace')

    player.getCard(aces[0])
    player.getCard(aces[1])
    player.getCard(aces[2])

    expect(player.calcScore()).to.eql(16)
    done()
  })

  it('Expect player with stayvalue 1 to not want more cards after 1 ace', done => {
    const player = new Player('test', 1)

    const cards = getFullDeck()
    const aces = cards
      .filter(card => card.rank === 'Ace')

    player.getCard(aces[0])

    expect(player.wantMoreCards()).to.eql(false)
    done()
  })
})

const getFullDeck = () => {
  const deck = new Deck()
  const cards = []

  for (let i = 0; i < 52; i++)
    cards.push(deck.getCard())

  return cards
}