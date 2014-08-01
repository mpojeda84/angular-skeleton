/**
 * Created by mpereira on 7/30/2014.
 */
var module1Services = angular.module('module1Services', ['ngResource']);

module1Services.factory('module1Srv', function() {
    return {
        message: "Message From Service 1",
        getMessage: function(){
            return this.message;
        }
    };
});


