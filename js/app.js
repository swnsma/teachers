var app = angular.module('TeachersVote', [
    'ngRoute'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/votes.html',
                controller: 'VoteController'
            }).otherwise({
                redirectTo:'/'
            });
    }
]);