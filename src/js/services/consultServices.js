angular.module("WxCourse").factory("consultServices", function($http, config) {
    return {
        consult: function(consult) {
            return $http({
                url: config.url + "/app/Feedback/commit",
                method: "GET",
                params: {
                    content:consult.content
                }
            }).then(function(data) {
                return data.data.Response;
            })
        }
    }
});
