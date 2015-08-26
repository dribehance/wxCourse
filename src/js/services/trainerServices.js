angular.module("WxCourse").factory("trainerServices", function($http,localStorageService, config) {
    return {
        // 查询培训方信息
        query: function() {
            return $http({
                url: config.url + "/app/Organization/info",
                method: "GET",
                params: {
                    "token":localStorageService.get("token")
                },
                cache:true
            }).then(function(data) {
                return data.data.Response;
            })
        },
        preview:function(id){
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/Organization/info",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "company_id":id
                })
            }).then(function(data) {
                return data.data.Response;
            });
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
        // 更新培训方信息入口  ---除了头像
        update: function(obj) {
            for (key in obj ) {
             var state = key;
            }
            switch (state) {
                case "type":
                    return this.updateType(obj);
                    break;
                case "name":
                    return this.updateName(obj);
                    break;
                case "intro":
                    return this.updateIntro(obj);
                    break;
                case "address":
                    return this.updateAdrress(obj);
                    break;
                case "contact":
                    return this.updateContact(obj);
                    break;
                case "telephone":
                    return this.updateTelephone(obj);
                    break;
                default:
                    ;
            }

            // var _params = {};
            // for (key in obj ) {
            // 	_params[key] = obj[key];
            // }
            // return $http({
            // 	url:config.url + "",
            // 	method:"GET",
            // 	params:_params,
            // }).then(function(data){
            // 	return data.data.Response;
            // })
        },
        // 更新培训类型
        updateType: function(obj) {
            return $http({
                url: config.url + "/app/Organization/updateType",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "type":obj.type
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新培训方名称
        updateName: function(obj) {
            return $http({
                url: config.url + "/app/Organization/updateCompanyName",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "company_name":obj.name
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新培训方简介
        updateIntro: function(obj) {
            return $http({
                url: config.url + "/app/Organization/updateCompanyInfo",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "company_info":obj.intro
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新培训方地址
        updateAdrress: function(obj) {
            return $http({
                url: config.url + "/app/Organization/updateCompanyAddress",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "company_address":obj.address
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新培训方联系人
        updateContact: function(obj) {
            return $http({
                url: config.url + "/app/Organization/updateCompanyIncharge",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "company_incharge":obj.contact
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新培训方联系方式
        updateTelephone: function(obj) {
            return $http({
                url: config.url + "/app/Organization/updateCompanyTelephone",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "telephone":obj.telephone
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
    }
});
