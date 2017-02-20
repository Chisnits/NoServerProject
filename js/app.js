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
       
        
});