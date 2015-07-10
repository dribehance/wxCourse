angular.module("WxCourse").factory("trainerServices", function($http, config) {
    return {
        // 查询培训方信息
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
        // 更新头像
        updateAvatar: function() {
        	return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data;
            })
        },
        // 更新培训方信息入口  ---除了头像
        update: function(obj) {
            for (key in obj ) {
             var state = key;
            }
            switch (state) {
                case "type":
                    this.updateType(obj);
                    break;
                case "name":
                    this.updateName(obj);
                    break;
                case "intro":
                    this.updateIntro(obj);
                    break;
                case "address":
                    this.updateAdrress(obj);
                    break;
                case "contact":
                    this.updateContact(obj);
                    break;
                case "telephone":
                    this.updateTelephone(obj);
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
            // 	return data.data;
            // })
        },
        // 更新培训类型
        updateType: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data;
            })
        },
        // 更新培训方名称
        updateName: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data;
            })
        },
        // 更新培训方简介
        updateIntro: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data;
            })
        },
        // 更新培训方地址
        updateAdrress: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data;
            })
        },
        // 更新培训方联系人
        updateContact: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data;
            })
        },
        // 更新培训方联系方式
        updateTelephone: function(obj) {
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
