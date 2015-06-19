var app = angular.module('noServer2');
app.service('loginService', function($firebaseAuth, $window, $q) {
    this.ref = 'https://noserverproject2.firebaseio.com';
    this.firebaseRef = new Firebase(this.ref);
    this.authObj = $firebaseAuth(this.firebaseRef);

    this.register = function(newUser) {
        this.authObj.$createUser(newUser).then(function(authData) {
            console.log(authData)
        }, function(err) {
            alert(err)
        });
    };

    this.login = function(user) {
        var dfd = $q.defer()
        this.authObj.$authWithPassword(user).then(function(authData, user) {
            console.log('Logged in! ', authData);
            dfd.resolve(authData)
        }, function(err) {
            alert('Error: ' + err);
        });
        return dfd.promise;
    }

});
