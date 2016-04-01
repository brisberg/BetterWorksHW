'use strict';

angular.module('betterworkshw', [
    'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/main/main.tmpl.html',
                controller: 'MainCtrl',
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
