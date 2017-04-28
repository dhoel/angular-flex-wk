const flexApp = angular.module('flexApp', ['ngRoute', 'ngResource'])
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://www.youtube.com/**'
        ]);
    });
// ROUTES

// FACTORIES

// CONTROLLERS
flexApp.controller('homeController', ['$scope', '$location', 'searchService',
    function($scope, $location, searchService) {
        // $scope.$watch('searchTerm', function() {
        //     searchService.term = $scope.searchTerm;
        // })
        $scope.searchTerm = searchService;
        $scope.submit = function() {
            console.log(searchService)
            $location.path('/video-search');
        }
}]);

flexApp.controller('videoController', ['$scope', '$resource', '$routeParams',
'youtubeAPI', 'searchService',
    function($scope, $resource, $routeParams, youtubeAPI, searchService) {
        $scope.searchTerm = searchService.term;
        $scope.videoResult = youtubeAPI.get({
            q: searchService.term,
            type: 'video',
            part: 'snippet',
            maxResults: 3
        })
        $scope.getIframeSrc = function(videoId) {
            return 'https://www.youtube.com/embed/' + videoId;
        }
        // $scope.playVideo = function(e) {
        //     let url = 'https://www.youtube.com/watch?v=' +
        //         e.currentTarget.getAttribute('id');
        //     window.open(url, '_blank');
        // }
        console.log($scope.videoResult);
}]);
