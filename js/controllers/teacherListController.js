app.controller('TeacherListController',
    ['$scope', 'teachers', function($scope, teachers){
    teachers.success(function(data) {
        $scope.teachers = data.teachers;
    })
}]);