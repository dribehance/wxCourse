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
    }
});
