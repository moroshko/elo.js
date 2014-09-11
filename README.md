# Overview

Minimalistic Javascript implementation of a [Elo rating system](http://en.wikipedia.org/wiki/Elo_rating_system).
K-factor of 32 is used.

# How to use

1. Include `elo.js`
2. Use `Elo.getNewRating()` to calculate the new rating, or `Elo.getRatingDelta()` to calculate the delta.

# Methods

### getNewRating(myRating, opponentRating, myGameResult)
Calculates my new rating given the following parameters:

* `myRating (number)` - My rating before the game, e.g. 1600
* `opponentRating (number)` - Opponent's rating before the game, e.g. 1700
* `myGameResult (number)` - The result of the game, `1` if I won, `0` if I lost, or `0.5` if draw


##### Example

    Elo.getNewRating(1600, 1700, 1)     // => 1620
    Elo.getNewRating(1600, 1700, 0.5)   // => 1604
    Elo.getNewRating(1600, 1700, 0)     // => 1588
    
### getRatingDelta(myRating, opponentRating, myGameResult)
Calculates my new rating given the following parameters:

* `myRating (number)` - My rating before the game, e.g. 1600
* `opponentRating (number)` - Opponent's rating before the game, e.g. 1700
* `myGameResult (number)` - The result of the game, `1` if I won, `0` if I lost, or `0.5` if draw


##### Example

    Elo.getRatingDelta(1600, 1700, 1)     // => 20
    Elo.getRatingDelta(1600, 1700, 0.5)   // => 4
    Elo.getRatingDelta(1600, 1700, 0)     // => -12
