angular.module('wsid', ['ui.router']).config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: './views/drinks.html',
            controller: 'alcoholCtrl'
        })
        .state('wheel', {
            url: '/wheel',
            templateUrl: './views/wheel.html',
            controller: 'wheelCtrl'
        })
        // .state('challengeWinner',{
        //     url: '/challengeWinner',
        //     templateUrl: '../views/challengeWinner.html'
        // })
        // .state('congrats',{
        //     url: '/congrats',
        //     templateUrl: '../views/congrats.html',
        //     controller: 'congratsCtrl'
        // })
       
        
});