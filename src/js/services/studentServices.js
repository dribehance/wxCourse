angular.module("WxCourse").factory("studentServices", function($http, localStorageService, config) {
    return {
        // 查询学生信息
        query: function() {
            return $http({
                url: config.url + "/app/UserCenter/info",
                method: "GET",
                params: {
                    token: localStorageService
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新头像
        updateAvatar: function() {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新昵称
        updateNickname: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新昵称
        updateSex: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
    }
});
