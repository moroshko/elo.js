angular.module('Elo', []).controller('AppCtrl', function($scope, $window) {
  $scope.myRating = 1600;
  $scope.opponentRating = 1700;
  $scope.gameResult = '1';

  $scope.calculateNewRating = function() {
    $scope.newRating = $window.Elo.getNewRating(+$scope.myRating, +$scope.opponentRating, +$scope.gameResult);
  };

  $scope.calculateNewRating();
});
