angular.module("WxCourse").factory("courseServices", function($http, transformServices, localStorageService, config) {
    return {
        // 课程列表----查询所有(我要学习)
        query: function(page) {
            return $http({
                url: config.url + "/app/Course/courseToLearn",
                method: "GET",
                params: {
                    // token: localStorageService.get("token"),
                    pn: page.number,
                    page_size: page.size,
                    type_id: page.type_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程列表----根据培训方查询
        queryByTrainer: function(page, page_size) {
            return $http({
                url: config.url + "/app/Course/List",
                method: "GET",
                params: {
                    token: localStorageService.get("token"),
                    pn: page,
                    page_size: page_size
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程列表----根据关键字查询
        queryByKeyword: function(page) {
            return $http({
                url: config.url + "/app/Course/searchCourseToLearn",
                method: "GET",
                params: {
                    token: localStorageService.get("token"),
                    kw: page.keyword,
                    pn: page.number,
                    page_size: page.size
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程列表--- 学生报名
        queryByStudent: function(page, page_size) {
            return $http({
                url: config.url + "/app/Course/listForUser",
                method: "GET",
                params: {
                    token: localStorageService.get("token"),
                    pn: page,
                    page_size: page_size
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程详情--课程设置
        queryById: function(id) {
            return $http({
                url: config.url + "/app/Course/info",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "course_id": id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程详情--学生用户/培训方
        queryTutorialById: function(course_id,user_id) {
            return $http({
                url: config.url + "/app/Course/details",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "course_id": course_id,
                    "user_id": user_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 课程类型
        queryCourseType: function() {
            return $http({
                url: config.url + "/app/Course/types",
                method: "GET",
                params: {
                    token: localStorageService.get("token")
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
                    "course_count": course.section,
                    "type_id": course.type.id,
                    "teacher_id": course.teacher.id,
                    "run_type": course.endless,
                    "start_day": transformServices.transformDate(course.from),
                    "end_day": transformServices.transformDate(course.to),
                    "repetition": config.message.repeater[course.repeat],
                    "time": transformServices.transformTimes(course.time, course.repeat),
                    "address": course.address,
                    "fee": course.money,
                    "info": course.intro

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 更新课程
        update: function(course) {
            return $http({
                url: config.url + "/app/Course/update",
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
                    "course_id": course.id,
                    "name": course.name,
                    "count": course.capacity,
                    "course_count": course.section,
                    "type_id": course.type.id,
                    "teacher_id": course.teacher.id,
                    "run_type": course.endless,
                    "start_day": transformServices.transformDate(course.from),
                    "end_day": transformServices.transformDate(course.to),
                    "repetition": config.message.repeater[course.repeat],
                    "time": transformServices.transformTimes(course.time, course.repeat),
                    "address": course.address,
                    "fee": course.money,
                    "info": course.intro

                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 查询学员信息 付费情况 _m_payment
        queryStudentByCourse: function(course_id, page, page_size) {
            return $http({
                url: config.url + "/app/Course/applyList",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "pn": page,
                    "page_size": page_size,
                    "course_id": course_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 查询学员学习情况(review) 
        queryReviewByStudent: function(student_id, course_id, page, page_size) {
            return $http({
                url: config.url + "/app/Course/situation",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "pn": page,
                    "page_size": page_size,
                    "course_id": course_id,
                    "user_id": student_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 查询学员学习情况(review)详情
        queryReviewById: function(review_id) {
            return $http({
                url: config.url + "/app/Course/situationDetails",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "learn_id": review_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 发布学员学习情况(review)
        releaseReview: function(review) {
            return $http({
                url: config.url + "/app/Course/commitSituation",
                method: "GET",
                params: {
                    // "token": localStorageService.get("token"),
                    // "title": review.title,
                    // "content"
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 删除学员学习情况(review)
        removeReview: function(review) {
            return $http({
                url: config.url + "/app/Course/deleteSituation",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "user_id": review.student_id,
                    "course_id": review.course_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        // 赞、取消赞
        toggleLike: function(course) {
            if (course.is_like == "1") {
                return this._unlike(course.id);
            }
            return this._like(course.id);
        },
        _unlike: function(course_id) {
            return $http({
                url: config.url + "/app/Course/cancel_applause",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "course_id": course_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        _like: function(course_id) {
            return $http({
                url: config.url + "/app/Course/applause",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "course_id": course_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        joinin: function(course_id) {
            return $http({
                url: config.url + "/app/Course/apply",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "course_id": course_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        pay: function(payment, course_id) {
            if (payment.status == "1") {
                return this._cancel_pay(payment, course_id)
            }
            return this._pay(payment, course_id)
        },
        _pay: function(payment, course_id) {
            return $http({
                url: config.url + "/app/Course/pay",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "course_id": course_id,
                    "user_id": payment.student.id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        _cancel_pay: function(payment, course_id) {
            return $http({
                url: config.url + "/app/Course/unpay",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "course_id": course_id,
                    "user_id": payment.student.id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        release_check:function (){
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/Course/hasTeachers",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "token":localStorageService.get("token")
                })
            }).then(function(data) {
                return data.data.Response;
            });
        }
    }
});
