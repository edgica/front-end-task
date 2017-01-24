(function () {
    'use strict';

    angular
            .module('app')
            .controller('TableController', TableController);

    function TableController(Search) {
        var vm = this;

        vm.isLoading = true;

        var repositoriesQuery = {
            keyword: 'map',
            language: 'javascript',
            sort: 'stars',
            order: 'desc'
        };

        Search.getRepositories(repositoriesQuery)
                .then(function (repositories) {
                    vm.repositories = repositories.data.items;
                })
                .catch(function (error) {
                    vm.error = JSON.stringify(error);
                })
                .finally(function () {
                    vm.isLoading = false;
                });
    }
}());