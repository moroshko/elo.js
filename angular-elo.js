angular.module('Elo', []).service('Elo', function($window) {
  this.getRatingDelta = $window.Elo.getRatingDelta;
  this.getNewRating = $window.Elo.getNewRating;
});
