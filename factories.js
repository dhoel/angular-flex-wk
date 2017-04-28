flexApp.factory('searchService', function() {
    var self = this;
    self.term = '';
    return self;
})

flexApp.factory('youtubeAPI', function($resource) {
    return $resource('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDenH4fAGWR967TtP_ezbC8Hkj329kaCHc', {
        callback: 'JSON_CALLBACK'
    }, {
        get: { method: 'JSONP' }
    });
})
