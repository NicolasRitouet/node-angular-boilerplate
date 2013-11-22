'use strict';

programApp.controller('ProgramCtrl', function($scope, $http, ProgramService) {
	$scope.url = "http://www.koogan.net";
    $scope.getPrograms = function() {
    	ProgramService.getPrograms(function(data) {
       		$scope.programs = data;

    	});
    };

    $scope.startIndex = function() {
    	var delta = $scope.delta === "undefined" || $scope.delta;
    	$scope.result = [];
        ProgramService.startIndexServerSide(function(result) {
        	$scope.result.push(result);
        });
    };
});
