angular.module('jokes-notebook').config(

function UrlRouterConfig($stateProvider, $urlRouterProvider) {
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/main/empty');
    
    // list all states
    $stateProvider.state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'html/main.menu.html',
        controller: 'MainMenuCtrl'
    }).state('main.empty', {
        url: '/empty'
    });
});