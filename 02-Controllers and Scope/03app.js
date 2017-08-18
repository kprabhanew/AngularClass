 //using recommended pattern to use "$scope" (mainly to work even after minimizing js)
 var sample = angular.module("sample", []);

 //  sample.controller("emp", function($scope) {
 //      $scope.Name = "Jag";
 //      $scope.Sal = 4500;
 //  })

 sample.controller("emp", ["$scope", "$log", "$routeProvider", function($scope, $log, $routeProvider) { // "s" is reference to "$scope"
     $scope.Name = "Jag";
     $scope.Sal = 4500;
 }]);

 sample.controller("", ["", function() {}]);