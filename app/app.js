(function () {
    'use strict';

    angular
            .module('app', [
                'ui.bootstrap',
                'ui.router',
                'alexjoffroy.angular-loaders'])
            .config(['$urlRouterProvider', function ($urlRouterProvider) {
                    $urlRouterProvider.otherwise('table');
                }])
            .config(['$stateProvider', function ($stateProvider) {
                    $stateProvider
                            .state('table', {
                                url: '/table',
                                views: {
                                    content: {templateUrl: 'app/table/table.html'}
                                }
                            });
                }]);
}());