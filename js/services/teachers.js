app.factory('teachers', ['$http', function($http) {
    return $http.get('data/teachers.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        })
}]);