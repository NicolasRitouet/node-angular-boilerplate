'use strict';

programApp.factory('ProgramService', function ($http) {
      
      // Public API here
      return {
        getPrograms: function(callback) {
          console.log('Getting the programs..');
          $http({
              method: 'GET',
              url: '/api/programs'
          }).
          success(function(data, status, headers, config) {
            console.log(data);
              callback(data);
          }).
          error(function(data, status, headers, config) {
              alert("Failed to get programs.");
          });
        },

        startIndexServerSide: function(callback) {
          console.log('Calling the api to launch index..');
          $http({
              method: 'GET',
              url: '/api/startindex'
          }).
          success(function(data, status, headers, config) {
            console.log(data);
              callback(data);
          }).
          error(function(data, status, headers, config) {
              callback("Failed to get programs.");
          });
        }

      };
  });