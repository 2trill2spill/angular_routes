var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/kirby', {
      templateUrl: '/views/templates/kirby.html',
      controller: "kirbyController"
    })
    .when('/link', {
      templateUrl: '/views/templates/link.html',
      controller: "linkController"
    })
    .when('/lupin', {
      templateUrl: '/views/templates/lupin.html',
      controller: "lupinController"
    })
    .otherwise({
      redirectTo: '/lupin'
    })
}]);

myApp.controller("kirbyController", ["$scope", function($scope){
    console.log("Kirby");
}]);

myApp.controller("linkController", ["$scope", function($scope){
    console.log("Link");
}]);

myApp.controller("lupinController", ["$scope", function($scope){
    console.log("Lupin");
}]);
