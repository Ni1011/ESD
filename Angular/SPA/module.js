var app = angular.module('myApp', []);
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'first',
        controller : 'FirstController'
    })

    .when('/second', {
        templateUrl : 'second',
        controller : 'SecondController'
    })

    .when('/third', {
        templateUrl : 'third',
        controller : 'ThirdController'
    })

    .otherwise({redirectTo: '/'});
});

app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from FirstController';
});

app.controller('SecondController', function($scope) {
    $scope.message = 'Hello from SecondController';
});

app.controller('ThirdController', function($scope) {
    $scope.message = 'Hello from ThirdController';
});