app.controller('TeacherVoteController',
    ['$scope', "$http", 'teacher', function($scope, $http, teacher){
        teacher.success(function(data) {
            $scope.teacher = new Teacher(data.teacher, $http);
        })
    }]);