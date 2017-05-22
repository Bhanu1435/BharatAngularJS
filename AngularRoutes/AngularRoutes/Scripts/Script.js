var app = angular.module("AngularRoutes", ["ngRoute"])
    .config(function ($routeProvider,$locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            })
            .when("/course", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController"
            })
            .when("/student", {
                templateUrl: "Templates/students.html",
                controller: "studentsController"
            })
            .otherwise({
                redirectTo:"/home"
            })
        $locationProvider.html5Mode(true);
    })

    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.Net", "Sql Server", "Asp.Net"];
    })
    .controller("studentsController", function ($scope, $http) {
        $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {
                $scope.students = response.data;
            })
    })
