//We can make service in controller by providing logic functions but the problem that 
//we will face is that , for using the same function logic we have to copy this code again, 
//thats the area where service and factory comes into picture


var myApp = angular
    .module("myModule", [])
    .controller("myServiceController", function ($scope, OutputFactory) {
        //$scope.message = "Angular JS";
        $scope.transformString = function (input) {
            $scope.output = OutputFactory.processString(input);
        }

    });