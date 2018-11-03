'use strict';

import { Player } from './Player';

export class View {
    print(player: Player, dealer: Player, message: string) {
        console.log(player.toString());
        console.log(dealer.toString());
        console.log(message);
        console.log();
    }

    viewMessage(msg: string) {
        console.log(msg);
    }
}
