var app = angular.module('noServer2');

app.controller('indexCtrl', function($scope, loginService) {
    $scope.authData = loginService.authObj.$getAuth();
    
});
