var app = angular.module('noServer2');

app.service('tripsService', function($firebaseArray, $firebaseObject, loginService) {
    this.authData = loginService.authObj.$getAuth();
    this.ref = 'https://noserverproject2.firebaseio.com';
    this.firebaseRef = new Firebase(this.ref);
    this.prevTripRef = new Firebase(this.ref + '/users/' + this.authData.uid + '/trips/previousTrips');
    this.currentTripsRef = new Firebase(this.ref + '/users/' +  this.authData.uid + '/trips/currentTrip');

    this.addTrip = function(theTrip, user) {
        var newTrip = new Firebase(this.ref + '/users/' + this.authData.uid + '/trips/currentTrip'),
            trip = $firebaseArray(newTrip);
        trip.$loaded().then(function(trip) {
            trip.$add(theTrip);
            console.log('Trip added to current trips ' + trip);
        });
    };

    this.toPreviousTrips = function(theTrip, user) {
        var previousTrips = new Firebase(this.ref + '/users/' + this.authData.uid + '/trips/previousTrips'),
            trip = $firebaseArray(this.prevTripRef);
        trip.$loaded().then(function(data) {
            trip.$add(theTrip);
            console.log('Trip moved to previousTrips ' + data);
        });
    };

});
