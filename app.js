angular.module('App', ['Elo']).controller('AppCtrl', function($scope, Elo) {
  $scope.myRating = 1600;
  $scope.opponentRating = 1700;
  $scope.gameResult = '1';

  $scope.calculateNewRating = function() {
    $scope.newRating = Elo.getNewRating(+$scope.myRating, +$scope.opponentRating, +$scope.gameResult);
    $scope.ratingDelta = Elo.getRatingDelta(+$scope.myRating, +$scope.opponentRating, +$scope.gameResult);
  };

  $scope.calculateNewRating();
});
