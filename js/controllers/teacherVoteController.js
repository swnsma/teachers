app.controller('TeacherVoteController',
    ['$scope', "$http", '$routeParams', 'teacher', function($scope, $http, $routeParams, teacher){
        console.log($routeParams)
        teacher.fn($routeParams.id, function(data) {
            $scope.teacher = new Teacher(data.teacher, $http);
        })
    }]);