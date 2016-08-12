angular.module('jokes-notebook').controller('MainMenuCtrl',
function MainMenuCtrl($scope) {
  $scope.exit = function() {
    ionic.Platform.exitApp();
  };
});