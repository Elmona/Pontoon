'use strict';

import { expect } from 'chai';
import { Game } from '../src/Game';

describe('Game', () => {
  it('Can create a new Game', done => {
    const game = new Game(new View());
    expect(game).to.be.an('Object');
    done();
  });

  it('Expect game with no players to throw error.', done => {
    const game = new Game(new View());
    expect(() => game.start()).to.throw(Error);
    done();
  });
});

class View {
  print() {

  }
}