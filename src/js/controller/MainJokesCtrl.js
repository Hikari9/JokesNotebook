angular.module('jokes-notebook').controller('MainJokesCtrl',
function MainJokesCtrl($scope) {
  $scope.jokes = [
    {
      id: 1,
      question: 'Anong isda ang hindi nababasa?',
      answer: 'Tuyo'
    }
  ];
});