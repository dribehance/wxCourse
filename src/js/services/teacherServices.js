angular.module("WxCourse").factory("teacherServices", function($http, localStorageService, config) {
    return {
        // 查询老师 按培训方查询
        queryByTrainer: function() {
            return $http({
                url: config.url + "/app/Organization/selectTeacher",
                method: "GET",
                params: {
                    "token": localStorageService.get("token")
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 查询老师详情
        queryById: function(teacher_id) {
            return $http({
                url: config.url + "/app/Organization/teacher_info",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "teacher_id":teacher_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 增加老师
        create: function() {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 删除老师
        remove: function(teacher_id) {
            return $http({
                url: config.url + "/app/Organization/deleteTeacher",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "teacher_id":teacher_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新老师资料
        update: function(obj,teacher_id) {
            for (key in obj ) {
             var state = key;
            }
            switch (state) {
                case "type":
                    return this.updateType(obj,teacher_id);
                    break;
                case "name":
                    return this.updateName(obj,teacher_id);
                    break;
                case "intro":
                    return this.updateIntro(obj,teacher_id);
                    break;
                default:
                    ;
            }
        },
        // 更新培训类型
        updateType: function(obj,teacher_id) {
            return $http({
                url: config.url + "/app/UserCenter/updateTeacherType",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "type":obj.type,
                    "teacher_id":teacher_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新老师名称
        updateName: function(obj,teacher_id) {
            return $http({
                url: config.url + "/app/UserCenter/updateTeacherNickname",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "name":obj.name,
                    "teacher_id":teacher_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新老师简介
        updateIntro: function(obj,teacher_id) {
            return $http({
                url: config.url + "/app/UserCenter/updateTeacherInfo",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "info":obj.intro,
                    "teacher_id":teacher_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        }
    }
});
