angular.module('wsid', ['ui.router']).config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
            controller: 'alcoholCtrl'
        })
        .state('challenge',{
            url: '/challenge',
            templateUrl: '../views/challenge.html',
            controller: 'challengeCtrl'
        })
        .state('challengeWinner',{
            url: '/challengeWinner',
            templateUrl: '../views/challengeWinner.html'
        })
        .state('congrats',{
            url: '/congrats',
            templateUrl: '../views/congrats.html',
            controller: 'congratsCtrl'
        })
       
        
});