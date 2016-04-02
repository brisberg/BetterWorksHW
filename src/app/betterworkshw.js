'use strict';

angular.module('betterworkshw', [
    'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/dashboard/index.tmpl.html',
                controller: 'DashboardCtrl',
                controllerAs: 'ctrl'
            })
        ;
    })
    /*
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            event.preventDefault();
            if (error === 'AUTH_REQUIRED') {
                $state.go('login');
            }
        });
    })*/
;
