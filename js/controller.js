routeApp.controller('phoneCtrl', ['$scope','$http', function($scope, $http) {
  
  $scope.pageTitle = 'Phone Controller';
  $scope.pageContent = 'Phone Listing Page';
  
  $http.get('phones.json').success(function(data) {
      $scope.phones = data;
  });
  
}]);

routeApp.controller('phoneDetailCtrl', ['$scope','$http', '$routeParams', '$filter', function($scope, $http, $routeParams, $filter) {
  
  $scope.pageTitle = 'Phone Detail';
  $scope.id = $routeParams.id;
  
  $http.get('phones.json').success(function(data) {
      $scope.phones = data;	  
	  $scope.result = $filter('filter')($scope.phones, {id:$scope.id})[0];
  });    
  
}]);