angular.module("WxCourse").factory("messageServices", function($http, config) {
	return {
		// 消息列表
        query: function() {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data;
            })
        },
	}
});