//Docs BY @BHARATSARASWAT
//shortcut method like post,put, delete are also available with shortcut methods
//Service in Angular JS is nothing but an object that provide some sort of service that can be reused within an angular application.

//we cant use by making a scope variable for getting http.get as it returns promise object
// $scope.employees = $http.get('EmployeeService.asmx/GetAllEmployees')
//Iinstead use then function


/*
//Simple Calling a webservice and populating that data on HTML @bharat
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http) {
    //$scope.message = "Angular JS";
        $http.get('EmployeeService.asmx/GetAllEmployees')
        .then(function (response) {
            $scope.employees = response.data;
            })
            .catch(function (response) {
                console.error('Gists error', response.status, response.data);
            });
});

*/
//Another way of calling the Web Services using "http Service"
/*
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http) {
        //$scope.message = "Angular JS";
        $http({
            method:'GET',
            url: 'EmployeeService.asmx/GetAllEmployees'})
            .then(function (response) {
                $scope.employees = response.data;
            })
            .catch(function (response) {
                console.error('Gists error', response.status, response.data);
            });
    });
*/
//We can also $logService to log the response object to the console
//if service fails we can see the error on html, as i did in div tag, and also we can log an error to console
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http,$log) {
        //$scope.message = "Angular JS";
        $http({
            method: 'GET',
            url: 'EmployeeService.asmx/GetAllEmployees'
        })
            .then(function (response) {
                $scope.employees = response.data;
                $log.info(response);
            }, function (reason) {
                $scope.error = reason.data;
                $log.info(reason);
            });

    });


