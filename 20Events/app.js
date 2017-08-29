var app = angular.module("myModule", [])
app.controller("myController", function($scope) {

    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "ASP.NET", likes: 0, dislikes: 0 },
        { name: "SQL", likes: 0, dislikes: 0 },
        { name: "AngularJS", likes: 0, dislikes: 0 }
    ];

    $scope.myName = "";

    $scope.technologies = technologies;

    $scope.incrementLikes = function(technology) {
        technology.likes++;
    };

    $scope.incrementDislikes = function(technology) {
        technology.dislikes++;
    };

    $scope.displayValue = function(name) {
        alert(name);
    }
});