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
        .when('/portfolio/:workName', {
            templateUrl: 'templates/project.html',
            controller: "ProjectController"
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

    var Works = {};

    Works.projects =[
        {
            id: 0,
            name : "Aether",
            string : "aether03",
            description: "Aether is a live motion capture performance and installation designed and choreographed from the ancestral use of sacred geometry and the embodied elements: water, fire, earth and wind. The dancer's movement are tracked and projected in real-time, and the audience is given the opportunity to manipulate the visual elements on the dancers body through motion capture technology and physical computing.",
            video: 'https://player.vimeo.com/video/179689753'
        },
        {
            id: 1,
            name : "Torn",
            string : "torn",
            video: ''
        },
        {
            id: 2,
            name : "Parsing Our Silent Language",
            string : "parsingLang",
            video: ''
        },
        {
            id: 3,
            name : "Liable To Change",
            string : "ltc",
            video: ''
        }
    ];  

    Works.findByName = function(name) {
        return Works.projects.filter(function(work) {
            return work.name === name;
        });  
    }
    return Works;
})

app.controller("PortfolioController", function ($scope, Works) {
    $scope.works = Works;
});

app.controller("ProjectController", function ($scope, Works, $routeParams, $sce) {
    $scope.work = Works.findByName($routeParams.workName)[0];
    $scope.url = $sce.trustAsResourceUrl($scope.work.video);
});