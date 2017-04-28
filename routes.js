flexApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/video-search', {
        templateUrl: 'pages/video-search.html',
        controller: 'videoController'
    })
})
