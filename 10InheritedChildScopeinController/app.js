var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {

    //Primitive Level
    $scope.a = 10;
    $scope.b = 20;

    // //Object Level
    // $scope.o = {
    //     p: 100,
    //     q: 200
    // }
}]);

app.controller('sample2', ['$scope', function($scope) {

    $scope.c = 30;
    $scope.d = 40;

    //overwrite Parent scope

    $scope.a = 50;
    $scope.b = 60;

}]);