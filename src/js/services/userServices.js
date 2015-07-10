angular.module("WxCourse").factory("userServices", function($http, config) {
    return {
        // 用户注册
        register: function(telephone, password, referee, smscode) {
            return $http({
                url: config.url + "/v1/service/account",
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {}
            }).then(function(data) {
                return data.data;
            });
        },
        login: function(username, password) {
            return $http({
                url: config.url + "/v1/service/account/in",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "username": username,
                    "password": password
                })
            }).then(function(data) {
                return data.data;
            });
        },
        logout: function() {
            return $http({
                url: config.url + "/auth",
                method: "DELETE"
            }).then(function(data) {
                return data.data;
            });
        },
        checkAuth: function() {
            if (localStorageService.get("token")) {
                return true;
            }
            return false;
        },
        authen: function(realname, identifyID) {
            return $http({
                url: config.url + "/v1/service/realname",
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: angular.extend({}, config.common_params, {
                    "realname": realname,
                    "idcode": identifyID,
                    "token": localStorageService.get("token")
                })
            }).then(function(data) {
                return data.data;
            })
        },
        exist: function(telephone, username) {
            return $http({
                url: config.url + "/v1/service/account/logout",
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: angular.extend({}, config.common_params, {
                    "token":localStorageService.get("token")
                })
            }).then(function(data) {
                return data.data;
            });
        },
        getSmscode: function(telephone, smstype) {
            return $http({
                url: config.url + "/v1/service/smscode",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "telephone": telephone,
                    "signcode": $rootScope.signcode,
                    "smstype": smstype
                })
            }).then(function(data) {
                return data.data;
            })
        },
        token: function() {
            return $http({
                url: config.url + "/v1/service/token",
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: angular.extend({}, config.common_params, {
                    "token": localStorageService.get("token")
                })
            }).then(function(data) {
                localStorageService.set("token", data.result.token);
            })
        },
        forgetPassword: function(telephone, smscode, password) {
            return $http({
                url: config.url + "/v1/service/findpassword",
                method: "PUT",
                params: angular.extend({}, config.common_params, {
                    "telephone": telephone,
                    "smscode": smscode,
                    "signcode": $rootScope.signcode,
                    "password": password
                })
            }).then(function(data) {
                return data.data;
            })
        },
    }
});