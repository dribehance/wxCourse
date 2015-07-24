angular.module("WxCourse").factory("messageServices", function($http, localStorageService, config) {
    return {
        // 消息列表
        query: function(page, page_size) {
            return $http({
                url: config.url + "/app/Message/list",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "page_size": page_size,
                    "pn": page
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
    }
});
