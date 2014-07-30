/**
 * Created by mpereira on 7/30/2014.
 */

var app = angular.module('templateApp', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngSanitize',
    //logical modules:
    'templateApp.module1',
    //reusable components:
    'templateApp.component1'
]);
