var app = angular.module('noServer2');

app.controller('loginCtrl', function($scope, loginService, $firebaseObject, $window) {
    $scope.loginShow = true;
    $scope.registerShow = false;
    $scope.authObj = loginService.authObj

    var ub; //unbind the user upon logout
    loginService.authObj.$onAuth(function(authData) {
       loginService.authData = authData;
       if(!authData) {
            $window.location.href = '/#/login';
        }
        var userRef = new Firebase('https://noserverproject2.firebaseio.com/users/' + authData.uid),
            user = $firebaseObject(userRef);
        user.$loaded().then(function(user) { // Wait for user to be loaded before setting user details
           user.$save();
           user.$bindTo($scope, 'user').then(function(ub) {
               unbind = ub
               if(authData) {
                   $window.location.href = '/#/home';
               };
           });
        });
    });

    $scope.toggleLogin = function() {
        $scope.loginShow = true;
        $scope.registerShow = false;
    };

    $scope.toggleRegister = function() {
        $scope.registerShow = true;
        $scope.loginShow = false;
    };

    $scope.register = function() {
        loginService.register($scope.newUser);
    }

    $scope.login = function(authData) {
        loginService.login($scope.user);
            console.log(authData)
    }

    $scope.logout = function(authObj, ub) {
        $scope.authObj.$unauth();
        unbind();
    }

});
