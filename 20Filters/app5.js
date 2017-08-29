// Code goes here

var app = angular.module("myModule", []);

app.filter("mycustomFilter", function() {
return myfuncton;
})

app.controller("myController", function($scope) {

var employees = [
    { name: "Ben", gender: 1, salary: 55000 },
    { name: "Sara", gender: 2, salary: 68000 },
    { name: "Mark", gender: 1, salary: 57000 },
    { name: "Pam", gender: 2, salary: 53000 },
    { name: "Todd", gender: 3, salary: 60000 }
];

$scope.employees = employees;
});

function myfuncton(gender) {
    switch (gender) {
        case 1:
            return "Male";
        case 2:
            return "Female";
        case 3:
            return "Not disclosed";
    }
}