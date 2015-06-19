var app = angular.module('noServer2');

app.controller('loginCtrl', function($scope, loginService, $firebaseObject, $window) {

    $scope.loginShow = false;
    $scope.registerShow = true;

    var ub; //unbind the user upon logout
    loginService.authObj.$onAuth(function(authData) {
       $scope.authData = authData;
       loginService.authData = authData;
       $window.location.href='/#/home';
        var userRef = new Firebase('https://noserverproject.firebaseio.com/users/' + authData.uid),
            user = $firebaseObject(userRef);
        user.$loaded().then(function(user) { // Wait for user to be loaded before setting user details
           user.$save();
           user.$bindTo($scope, 'user').then(function(ub) {
               unbind = ub
           });
        });
    });


    $scope.toggleLogin = function() {
        $scope.loginShow = !$scope.loginShow;
        $scope.registerShow = !$scope.registerShow;
    };

    $scope.toggleRegister = function() {
        $scope.registerShow = !$scope.registerShow;
        $scope.loginShow = !$scope.loginShow;
    };

    $scope.register = function() {
        loginService.register($scope.newUser);
    }

    $scope.login = function() {
        loginService.login($scope.user);

    }

    $scope.logout = function(authObj, ub) {
        loginService.authObj.unauth();
        unbind()
    }

});
