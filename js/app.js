var routeApp = angular.module('routeApp',['ngRoute']);

routeApp.config(function($routeProvider) {
  $routeProvider   
  .when('/phone', {
    templateUrl: 'phone.html',
    controller: 'phoneCtrl'
  })
  
  .when('/phone/:id', {
    templateUrl: 'phone-detail.html',
    controller: 'phoneDetailCtrl'
  })
  
  .otherwise({redirectTo:'/phone'});
});
