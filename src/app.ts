'use strict';

import { Game } from './Game';
import { View } from './View';

try {
  const view = new View();
  const game = new Game(view);

  game.addPlayer('Oskar');
  game.addPlayer('Kalle', 17);
  game.addPlayer('Louise', 15);

  game.start();
} catch (e) {
  console.log(e);
}