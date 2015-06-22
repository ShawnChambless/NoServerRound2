var app = angular.module('noServer2')

app.controller('homePageCtrl', function($scope, tripsService, $firebaseArray) {
    var authData = tripsService.authData;
    $scope.addTrip = function() {
        tripsService.addTrip($scope.newTrip);
    };

    $scope.toPreviousTrips = function() {
        tripsService.toPreviousTrips($scope.currentTrip);
    };

    var currentTripsRef = new Firebase('https://noserverproject2.firebaseio.com/users/' + authData.uid + '/trips/currentTrip');
    var prevTripRef = new Firebase('https://noserverproject2.firebaseio.com/users/' + authData.uid + '/trips/previousTrips')
        $scope.currentTrip = $firebaseArray(currentTripsRef);
        $scope.previousTrips = $firebaseArray(prevTripRef);
});
