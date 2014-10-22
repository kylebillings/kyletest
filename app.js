'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 21 || n < 6)
	  // If time is after 9PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	else if (n => 17 && n < 21)
	  // If time is between 5PM – 9PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});