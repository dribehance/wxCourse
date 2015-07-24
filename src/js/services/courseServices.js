angular.module("WxCourse").factory("courseServices", function($http,transformServices, localStorageService, config) {
    return {
        // 课程列表----查询所有(我要学习)
        query: function() {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程列表----根据培训方查询
        queryByTrainer: function(page,page_size) {
            return $http({
                url: config.url + "/app/Course/List",
                method: "GET",
                params: {
                    token:localStorageService.get("token"),
                    pn:page,
                    page_size:page_size
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程列表----根据关键字查询
        queryByKeyword: function() {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程详情
        queryById: function() {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程详情
        queryCourseType: function() {
            return $http({
                url: config.url + "/app/Course/types",
                method: "GET",
                params: {
                    token:localStorageService.get("token")
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 发布课程
        release: function(course) {
            return $http({
                url: config.url + "/app/Course/publish",
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
                    "token": localStorageService.get("token"),
                    "name": course.name,
                    "count": course.capacity,
                    "course_count":course.section,
                    "type_id": course.type.id,
                    "teacher_id": course.teacher.id,
                    "run_type": course.endless,
                    "start_day": transformServices.transformDate(course.from),
                    "end_day": transformServices.transformDate(course.to),
                    "repetition": config.message.repeater[course.repeat],
                    "time": transformServices.transformTimes(course.time,course.repeat),
                    "address": course.address,
                    "fee": course.money,
                    "info": course.intro

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新课程
        update: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 查询学员信息 付费情况 _m_payment
        queryStudentByCourse: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 查询学员学习情况(review) 
        queryReviewByStudent: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 查询学员学习情况(review)详情
        queryReviewById: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 发布学员学习情况(review)
        releaseReview: function(obj) {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 删除学员学习情况(review)
        removeReview: function() {
            return $http({
                url: config.url + "",
                method: "GET",
                params: {

                }
            }).then(function(data) {
                return data.data.Response;
            })
        }
    }
});
