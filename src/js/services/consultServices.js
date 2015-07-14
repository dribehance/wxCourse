angular.module("WxCourse").factory("consultServices", function($http, config) {
    return {
        send: function() {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data;
            })
        }
    }
});
