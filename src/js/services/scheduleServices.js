angular.module("WxCourse").factory("scheduleServices", function($http, localStorageService, config) {
    return {
        // 课程计划 按节
        querySection: function(course_id) {
            return $http({
                url: config.url + "/app/Course/schedule",
                method: "GET",
                params: {
                    token: localStorageService.get("token"),
                    course_id: course_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程计划 每节课签到情况
        queryAttendance: function(course_id, section) {
            return $http({
                url: config.url + "/app/Course/signupList",
                method: "GET",
                params: {
                    token: localStorageService.get("token"),
                    course_id: course_id,
                    part: section
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程计划 统计记录 按人
        queryRecord: function(course_id) {
            return $http({
                url: config.url + "/app/Course/genaralView",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "course_id":course_id,
                    "pn":1,
                    "page_size":1000
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程计划 统计学生每节课程到课情况 按时间(节)
        queryHistory: function(user_id,course_id) {
            return $http({
                url: config.url + "/app/Course/genaralViewOfStudent",
                method: "GET",
                params: {
                    "token":localStorageService.get("token"),
                    "user_id":user_id,
                    "course_id":course_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        attend: function(attendence, course_id, section) {
            if (attendence.status == "1") {
                return this._cancle_attend(attendence, course_id, section);
            }
            return this._attend(attendence, course_id, section);
        },
        _attend:function(attendence, course_id, section){
            return $http({
                url: config.url + "/app/Course/signup",
                method: "GET",
                params: {
                    token: localStorageService.get("token"),
                    user_id: attendence.id,
                    course_id: course_id,
                    part: section
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        _cancle_attend:function(attendence, course_id, section){
            return $http({
                url: config.url + "/app/Course/cancelSignUp",
                method: "GET",
                params: {
                    token: localStorageService.get("token"),
                    user_id: attendence.id,
                    course_id: course_id,
                    part: section
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
    }
});
