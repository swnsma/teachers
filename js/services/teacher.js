app.factory('teacher', ['$http', '$q', function($http, $q) {
    return {
        fn: function (id, success, fail) {
            $http.get('data/teacher.json', {params: {id: id}})
                .success(function (data) {
                    return success(data);
                })
                .error(function (data) {
                    return fail(data);
                });
        }
    }
}]);