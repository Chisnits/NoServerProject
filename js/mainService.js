angular.module('wsid').service('mainService',function($http){
    this.getBeer = function(){
        return $http.get('../alcohols/beer.json'); 
    }
    this.getGin = function(){
        return $http.get('../alcohols/gin.json'); 
    }
    this.getRum = function(){
        return $http.get('../alcohols/rum.json'); 
    }
    this.getTequila = function(){
        return $http.get('../alcohols/tequila.json'); 
    }
    this.getVodka = function(){
        return $http.get('../alcohols/vodka.json'); 
    }
    this.getWhiskey = function(){
        return $http.get('../alcohols/whiskey.json'); 
    }
})