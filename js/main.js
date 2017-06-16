// Create an application module
var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
        })
        .when('/portfolio', {
            templateUrl: 'templates/portfolio.html',
        })
        .when('/events', {
            templateUrl: 'templates/events.html',
        })
        .when('/cv', {
            templateUrl: 'templates/cv.html',
        })
        .when('/video', {
            templateUrl: 'templates/video.html',
        })
        .otherwise({
            templateUrl: 'templates/home.html',
        });
    $locationProvider.html5Mode(true);
});