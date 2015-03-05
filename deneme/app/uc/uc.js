'use strict';

angular.module('myApp.uc', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/uc', {
    templateUrl: 'uc/uc.html',
    controller: 'UcCtrl'
  });
}])

.controller('UcCtrl', [function() {

}]);