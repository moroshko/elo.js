angular.module('Elo', []).service('Elo', function($window) {
  this.getNewRating = $window.Elo.getNewRating;
});
