angular.module("mainModule", [])
.controller("mainController", function($scope) {
    $scope.isTextChanged = false;
    $scope.isEmailChanged = false;
    $scope.textChangesCounter = 0;
    $scope.emailChangesCounter = 0;
    //$scope.values = $scope.testForm.formText;

    $scope.onTextChange = function() {
        console.log($scope.textChangesCounter);
        $scope.isTextChanged = true;
        $scope.textChangesCounter++;
    };

    $scope.onEmailChange = function() {
        $scope.isEmailChanged = true;
        $scope.emailChangesCounter++;
    };

    $scope.getItemState = function(item) {

        if (item.$pristine) {
            return "pristine";
        } else if (item.$dirty) {
            return "dirty";
        } else {
            return "";
        }
    };
});