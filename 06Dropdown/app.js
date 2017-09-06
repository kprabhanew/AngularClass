angular.module("mainModule", [])
    .controller("mainController", function($scope) {
        $scope.colorsArray = ["Red", "Green", "Blue"];

        $scope.peopleArray = [
            { id: "1", firstName: "John", lastName: "Doe", Gender: "M" },
            { id: "2", firstName: "Alice", lastName: "White", Gender: "F" },
            { id: "3", firstName: "Michael", lastName: "Doe", Gender: "M" }
        ];

        $scope.colorsObject = {
            "R": "Red",
            "G": "Green",
            "B": "Blue"
        };

        $scope.peopleObject = {
            "1": { firstName: "John", lastName: "Doe", Gender: "M" },
            "2": { firstName: "Alice", lastName: "White", Gender: "F" },
            "3": { firstName: "Michael", lastName: "Green", Gender: "M" }
        };

        $scope.getPersonFullName = function(person) {
            return person.firstName + " " + person.lastName;
        };

        $scope.getPersonIdAndFullName = function(person) {
            return "(" + person.id + ") " + person.firstName + " " + person.lastName;
        };

        $scope.selectPersonById = function(id) {
            $scope.peopleArrayValue5 = { id: id };
        };
    });