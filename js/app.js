var app = angular.module('TeachersVote', [
    'ngRoute'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/teachers', {
                templateUrl: 'views/teachers-list.html',
                controller: 'TeacherListController'
            }).otherwise({
                redirectTo:'/teachers'
            })
            .when('/teacher/:id', {
                templateUrl: 'views/teacher-vote.html',
                controller: 'TeacherVoteController'
            })
    }
]);