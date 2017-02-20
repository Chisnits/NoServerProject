angular.module('wsid').controller('menuCtrl',function($scope,$state){
    $scope.drinks = [];
    $scope.players = [];
    $scope.addPlayer = function(player){
        sweetAlert('Congratulations!', 'You added a player!', 'success');
        $scope.players.push(player);
    }

    $scope.removePlayer = function(player){
        var remove = $scope.players.indexOf(player);
        console.log(remove);
        $scope.players.splice(remove, 1);
    }

    $scope.addDrink = function(drink){
        $scope.drinks.push(drink);
        sweetAlert('Congratulations!', 'You added a Drink!', 'success');
        return $scope.drinks;
    };

    $scope.removeDrink = function(drink){
        var remove = $scope.players.indexOf(drink);
        $scope.drinks.splice(remove, 1);
    }

    $scope.goHome = function(){
        $state.go('home')
    }

    $scope.goSpin = function(){
        $state.go('wheel')
    }



    


})