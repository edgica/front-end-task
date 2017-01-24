(function () {
    'use strict';

    angular
            .module('app')
            .factory('Search', ['$http', '$q', 'BaseURL', function ($http, $q, BaseURL) {
                    function getRepositories(query) {
                        var deferred = $q.defer();
                        
                        var url = BaseURL + 'search/repositories?q=' + query.keyword + '+language:' + query.language + '&sort=' + query.sort + '&order=' + query.order;
                        
                        $http.get(url)
                                .then(function (response) {
                                    deferred.resolve(response);
                                })
                                .catch(function (error) {
                                    deferred.resolve(error);
                                });
                        return deferred.promise;
                    }

                    return  {
                        getRepositories: getRepositories
                    };
                }]);
})();