'use strict';

import { expect } from 'chai';

import { Game } from '../src/Game';
import { View } from '../src/View';
import { Player } from '../src/Player';

describe('Game', () => {
  it('Can create a new Game', done => {
    const game = new Game(new TestView());
    expect(game).to.be.an('Object');
    done();
  });

  it('Expect game with no players to throw error.', done => {
    const game = new Game(new TestView());
    expect(() => game.start()).to.throw(Error);
    done();
  });

  it('Expect game to be played with one player added.', done => {
    const view = new TestView();
    const game = new Game(view);

    game.addPlayer('test');
    game.start();

    expect(view.msg).to.eql('Starting a game of Pontoon.');

    // @ts-ignore
    expect(view.printMessage).to.satisfy(msg => {
      return ['Dealer Wins!', 'test Wins!'].some(str => msg === str);
    });

    done();
  });
});

class TestView extends View {
  msg: string;
  printMessage: string;

  constructor() {
    super();
    this.msg = '';
    this.printMessage = '';
  }

  print(player: Player, dealer: Player, message: string) {
    this.printMessage = message;
  }

  viewMessage(msg: string) {
    this.msg = msg;
  }
}