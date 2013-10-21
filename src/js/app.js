// hey Angular, we're bootstrapping manually!
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'angular',
    'js/controller/login',
    'js/controller/login-initial',
    'js/controller/login-new-device',
    'js/controller/login-existing',
    'js/controller/mail-list',
    'js/controller/read',
    'js/controller/write',
    'js/controller/navigation',
    'angularRoute',
    'angularTouch'
], function(angular, LoginCtrl, LoginInitialCtrl, LoginNewDeviceCtrl, LoginExistingCtrl, MailListCtrl, ReadCtrl, WriteCtrl, NavigationCtrl) {
    'use strict';

    var app = angular.module('mail', ['ngRoute', 'ngTouch', 'navigation', 'mail-list', 'write', 'read']);

    // set router paths
    app.config(function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'tpl/loading.html',
            controller: LoginCtrl
        });
        $routeProvider.when('/login-existing', {
            templateUrl: 'tpl/login-existing.html',
            controller: LoginExistingCtrl
        });
        $routeProvider.when('/login-initial', {
            templateUrl: 'tpl/login-initial.html',
            controller: LoginInitialCtrl
        });
        $routeProvider.when('/login-new-device', {
            templateUrl: 'tpl/login-new-device.html',
            controller: LoginNewDeviceCtrl
        });
        $routeProvider.when('/write/:folder/:id', {
            templateUrl: 'tpl/write.html',
            controller: WriteCtrl
        });
        $routeProvider.when('/write', {
            templateUrl: 'tpl/write.html',
            controller: WriteCtrl
        });
        $routeProvider.when('/desktop', {
            templateUrl: 'tpl/desktop.html',
            controller: NavigationCtrl
        });
        $routeProvider.otherwise({
            redirectTo: '/login'
        });
    });

    // inject controllers from ng-included view templates
    app.controller('ReadCtrl', ReadCtrl);
    app.controller('MailListCtrl', MailListCtrl);

    // manually bootstrap angular due to require.js
    angular.element().ready(function() {
        angular.bootstrap(document, ['mail']);
    });
});