angular.module('wsid').controller('menuCtrl',function($scope){
    $scope.drinks = [];
    $scope.addDrink = function(drink){
        $scope.drinks.push(drink);
        sweetAlert('Congratulations!', 'You added a Drink!', 'success');

    };
    $scope.players = [];
    $scope.addPlayer = function(player){
        sweetAlert('Congratulations!', 'You added a player!', 'success');
        $scope.players.push(player);
    }


})