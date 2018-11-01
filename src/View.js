'use strict'

class View {
    print(player, dealer, message) {
        console.log(player.toString())
        console.log(dealer.toString())
        console.log(message)
        console.log()
    }
}

module.exports = View
