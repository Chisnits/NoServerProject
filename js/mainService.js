angular.module('wsid').service('mainService',function($http){
    // var baseUrl = "http://swapi.co/api";
    // this.getData = function(character){
    //     return $http({
    //         method: 'GET',
    //         url: baseUrl + '/people'
    // }).then(function(response){
    //     console.log(response.data.results)
    //     if(response.status === 200){
    //         return response.data.results
    //     }
    //         return "Something Went Wrong"
    //     })
    // }
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