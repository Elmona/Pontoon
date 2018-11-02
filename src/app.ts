'use strict';

import { Game } from './Game';

try {
  const game = new Game();

  game.addPlayer('Oskar');
  game.addPlayer('Kalle', 17);
  game.addPlayer('Louise', 15);

  game.start();
} catch (e) {
  console.log(e);
}