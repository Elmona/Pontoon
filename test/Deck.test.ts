'use strict'

import { Deck } from '../src/Deck'
import { expect } from 'chai';

describe('Deck', () => {
  it('Test if you can create an instance of Deck', done => {
    const deck = new Deck()
    expect(deck).to.be.an('Object')
    done()
  })

  it('Create a deck and get a card', done => {
    const deck = new Deck()
    let card = deck.getCard()

    expect(card).to.be.an('Object')
    done()
  })

  it('Create a deck and get 52 cards', done => {
    const deck = new Deck()
    const cards = []

    for (let i = 0; i < 52; i++)
      cards.push(deck.getCard())

    expect(cards.length).to.eql(52)
    done()
  })

  it('Create a deck and get 53 cards should throw Error', done => {
    expect(() => {
      const deck = new Deck()
      const cards = []

      for (let i = 0; i < 53; i++)
        cards.push(deck.getCard())

    }).to.throw(Error)

    done()
  })

  it('Creates two decks and check so first card is not the same', done => {
    const deck1 = new Deck()
    const deck2 = new Deck()

    const card1 = deck1.getCard()
    const card2 = deck2.getCard()

    expect(card1).to.not.eql(card2)
    done()
  })

  it('Check if there is 13 hearts', done => {
    const deck = new Deck()
    const cards = []

    for (let i = 0; i < 52; i++)
      cards.push(deck.getCard())

    let hearts = cards
      .filter(card => card.getSuit() === "Heart")

    expect(hearts.length).to.eq(13)
    done()
  })
})
