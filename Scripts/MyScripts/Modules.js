/// <reference path="../angular.min.js" />  
var app;

(function() {
    app = angular.module("RESTClientModule", []).config(['$httpProvider', function($httpProvider) //;
    {
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        //$httpProvider.defaults.headers.common = {};
        //$httpProvider.defaults.headers.post = {};
        //$httpProvider.defaults.headers.put = {};
        //$httpProvider.defaults.headers.patch = {};

        //$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        //$httpProvider.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        //$httpProvider.defaults.headers.get['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS';
        //$httpProvider.defaults.headers.get['Access-Control-Allow-Headers'] = 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    } ]);
})();  