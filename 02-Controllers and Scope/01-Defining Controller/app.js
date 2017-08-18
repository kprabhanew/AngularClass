//defining a controller and instantiating a controller

var sample = angular.module("sample", []); //creating module

//create controller and its definition
sample.controller("emp", function() {
    this.Name = "Jag";
    this.Sal = 4500;
});