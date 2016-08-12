angular.module('jokes-notebook').controller('MainJokeCtrl',
function MainJokeCtrl($scope, $stateParams) {
  $scope.id = $stateParams.id;
});