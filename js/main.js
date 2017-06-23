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
            document.body.style.backgroundColor = red;
            document.body.style.background = "";
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

app.controller("PortfolioController", function ($scope) {
    $scope.projectName = "Aether";
    $scope.projectDescription = "I made it";
    // maybe for images?
    // for(var i = 0; i < images.length; i++) {
    // var img = document.createElement("img");
    // img.setAttribute('src', images[i]);
    // img.setAttribute('alt', '');
    // document.body.appendChild(img);
    // }
});