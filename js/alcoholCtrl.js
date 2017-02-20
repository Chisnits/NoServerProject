angular.module('wsid').controller('alcoholCtrl', function($scope, mainService){

    
    $scope.getBeer = function() {
        mainService.getBeer().then(function(response) {
            $scope.beer = response.data;
        });
    }
    $scope.getBeer();

$scope.getGin = function() {
        mainService.getGin().then(function(response) {
            $scope.gin = response.data;
        });
    }
    
    $scope.getGin();
    
    $scope.getRum = function() {
        mainService.getRum().then(function(response) {
            $scope.rum = response.data;
        });
    }
    $scope.getRum();

    $scope.getTequila = function() {
        mainService.getTequila().then(function(response) {
            $scope.tequila = response.data;
        });
    }
    $scope.getTequila();

    $scope.getVodka = function() {
        mainService.getVodka().then(function(response) {
            $scope.vodka = response.data;
        });
    }
    $scope.getVodka();

$scope.getWhiskey = function() {
        mainService.getWhiskey().then(function(response) {
            $scope.whiskey = response.data;
        });
    }
    $scope.getWhiskey();


     $scope.addDrink = function(drink){
        $scope.drinks.push(drink);
        console.log($scope.drinks);
        sweetAlert('Congratulations!', 'You added a Drink!', 'success');
        return $scope.drinks;
    };

   
});