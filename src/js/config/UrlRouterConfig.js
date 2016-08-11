angular.module('jokes-notebook').config(

function UrlRouterConfig($stateProvider, $urlRouterProvider) {
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/main/jokes');
    
    // list all states
    $stateProvider.state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'html/main.menu.html',
        controller: 'MainMenuCtrl'
    }).state('main.jokes', {
        url: '/jokes',
        views: {
            content: {
                templateUrl: 'html/main.jokes.html',
                controller: 'MainJokesCtrl'
            }
        }
    }).state('main.joke', {
        url: '/joke?id',
        views: {
            content: {
                templateUrl: 'html/main.joke.html',
                controller: 'MainJokeCtrl'
            }
        }
    });
    
});