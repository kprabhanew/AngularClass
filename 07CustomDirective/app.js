var app = angular.module('mainApp', []);

app.controller('EmployeeCtrl', function($scope) {
    $scope.employee = {
        role: 'Software Developer',
        skill: 'Angular JS'
    };

});

app.directive('myCustomerDetails', function() {
    return {
        restrict: "E", //"A"-Atrribute, "E"-element, "C"-Class, "M"-Comments
        //replace: true,
        //template: "<h1>Welcome to Angularjs Training</h1>"
        //template: 'Role: <strong>{{employee.role}} </strong> - Skill: <strong>{{employee.skill}}</strong>'
        templateUrl: "msg.html"
    };
});