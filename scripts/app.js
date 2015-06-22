	var app = angular.module('noServer2', ['ngRoute', 'firebase'])
app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'loginCtrl'
        })
		.when('/home', {
			templateUrl: 'views/homePage/homeTmpl.html',
			controller: 'homePageCtrl'
		})
		.when('/newTrip', {
			templateUrl: 'views/addTrip/addTrip.html',
			controller: 'addTripCtrl'
		})
		.when('/currentTrip', {
			templateUrl: 'views/currentTrip/currentTrip.html',
			controller: 'currentTripCtrl'
		})
		.when('/previousTrips', {
			templateUrl: 'views/previousTrips/previousTrips.html',
			controller: 'previousTripsCtrl'
		})
        .otherwise('/login')
});
