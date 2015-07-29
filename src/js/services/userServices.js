angular.module("WxCourse").factory("userServices", function($http, config, localStorageService, transformServices) {
    return {
        // 用户注册
        register: function(telephone, password, type) {
            return $http({
                url: config.url + "/app/UserCenter/registe",
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
                data: {
                    "telephone": telephone,
                    "password": password,
                    "type": transformServices.rever(config.message.role)[type],
                }
            }).then(function(data) {
                return data.data.Response;
            });
        },
        login: function(telephone, password) {
            return $http({
                url: config.url + "/app/UserCenter/login",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "telephone": telephone,
                    "password": password
                })
            }).then(function(data) {
                return data.data.Response;
            });
        },
        logout: function() {
            localStorageService.remove("token");
            localStorageService.remove("role");
            localStorageService.remove("authen");
            localStorageService.remove("user_id");
        },
        checkAuth: function() {
            if (localStorageService.get("token")) {
                return {
                    status:true,
                    role:localStorageService.get("role")
                }
            }
            return {
                status:false,
                role:localStorageService.get("role")
            };
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
                return data.data.Response;
            })
        },
        exist: function(telephone) {
            return $http({
                url: config.url + "/app/UserCenter/isTelephoneRegister",
                method: "GET",
                params: {
                    "telephone": telephone
                }
            }).then(function(data) {
                return data.data.Response;
            });
        },
        getSmscode: function(telephone, smstype) {
            return $http({
                url: config.url + "/app/UserCenter/getSMSCode",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "telephone": telephone,
                    "type": smstype
                })
            }).then(function(data) {
                return data.data.Response;
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
        forgetPassword: function(telephone, password) {
            return $http({
                url: config.url + "/app/UserCenter/updatePassword",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "telephone": telephone,
                    "password": password
                })
            }).then(function(data) {
                return data.data.Response;
            })
        },
        queryAuthenInfo:function() {
            return $http({
                url: config.url + "/app/UserCenter/identityInfo",
                method: "GET",
                params: {
                    "token": localStorageService.get("token")
                }
            }).then(function(data) {
                return data.data.Response;
            })
        }
    }
});
