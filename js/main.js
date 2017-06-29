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
        date: "17 August 2012"
    },
    {
        name : "Torn",
        string : "torn",
        date: "12 December 2013"
    },
    {
        name : "Parsing Our Silent Language",
        string : "parsingLang",
        date: "17 September 2012"
    },
    {
        name : "Liable To Change",
        string : "ltc",
        date: "17 August 2012"
    },
];  
return Works;
})

app.controller("PortfolioController", function ($scope, Works) {
    $scope.works = Works;
});