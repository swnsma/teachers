app.factory('teacher', ['$http', function($http) {
    return $http.get('data/teacher.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        })
}]);