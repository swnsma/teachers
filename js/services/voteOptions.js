app.factory('VoteOptions', ['$http', function($http) {
    return $http.get('data/vote-info.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        })
}]);