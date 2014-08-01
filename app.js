/**
 * Created by mpereira on 7/30/2014.
 */

var app = angular.module('app', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngSanitize',
    //logical modules:
    'module1',
    'module2',
    //reusable components:
    'component1'
]);

app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$translateProvider', '$injector', function ($httpProvider, $stateProvider, $urlRouterProvider, $translateProvider, $injector) {

    //mpereira: Activate CORS
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    //mpereira: State based navigation, with nested views from ui-router
    $stateProvider
        .state('a.state1', {
            url: '/module1',
            templateUrl: 'module1/module1.html'
        })
        .state('a.state2', {
            url: '/module1',
            templateUrl: 'module2/module2.html'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'error.html'
        })
    ;
    //mpereira: default navigation
    $urlRouterProvider.when('', '/module1').when('/', '/module1');

    //mpereira: translation
    $translateProvider.useStaticFilesLoader({
        prefix: 'common/translation/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');

}])

.run(['$rootScope', '$http', '$location', '$state', function ($rootScope, $http, $location, $state) {
// mpereira: put init code here, like security interceptors etc
}]);

