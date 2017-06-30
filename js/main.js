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
            controller : "PortfolioController",
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
        .when('/404', {
            templateUrl: 'templates/home.html',
        })
        .otherwise({
            templateUrl: 'templates/home.html',
        });
    $locationProvider.html5Mode(true);
});

app.factory('Works', function(){

var Works = {}

Works.project =[
    {
        name : "Aether",
        string : "aether03",
    },
    {
        name : "Torn",
        string : "torn",
    },
    {
        name : "Parsing Our Silent Language",
        string : "parsingLang",
    },
    {
        name : "Liable To Change",
        string : "ltc",
    },
];  
return Works;
})

app.controller("PortfolioController", function ($scope, Works) {
    $scope.works = Works;
});