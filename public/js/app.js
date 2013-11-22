'use strict';

// Declare app level module which depends on filters, and services
var programApp = angular.module('myModestApp', [
    'ngRoute'
]).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/program', {
            templateUrl: 'views/program.html',
            controller: 'ProgramCtrl'
        }).
        otherwise({
            redirectTo: '/program'
        });
    }
]);
