var app = angular.module('noServer2');

app.controller('addTripCtrl', function($scope, tripsService, $firebaseArray, $firebaseObject) {
    var authData = tripsService.authData;
    var currentTripsRef = tripsService.currentTripsRef
    $scope.currentTrip = $firebaseArray(currentTripsRef);


    
});
