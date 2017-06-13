// Create an application module
var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
  // $locationProvider.html5Mode(true);

    $routeProvider
        .when('/portfolio', {
            templateUrl: 'templates/portfolio.html'
        })
        .when('/events', {
            templateUrl: 'templates/events.html'
        })
        .when('/cv', {
            templateUrl: 'templates/cv.html'
        })
        .when('/video', {
            templateUrl: 'templates/video.html'
        })
        // removed other routes ... *snip
        // .otherwise({
        //     redirectTo: '/home'
        // }
    // );
        .otherwise({ redirectTo: '/' });

    // enable html5Mode for pushstate ('#'-less URLs)
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');

});

// // Initialize the application
// app.run(['$location', function AppRun($location) {
//     debugger; // -->> here i debug the $location object to see what angular see's as URL
// }]);