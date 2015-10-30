angular.module("WxCourse").factory("commentServices", function($http, localStorageService, config) {
    return {
        // 评价列表
        query: function(page, page_size, course_id) {
            return $http({
                url: config.url + "/app/Course/comments",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "page_size": page_size,
                    "pn": page,
                    "course_id": course_id
                }
            }).then(function(data) {
                return data.data.Response;
            })
        },
        release: function (comment) {
            return $http({
                url: config.url + "/app/Course/comment",
                method: "GET",
                params: {
                    "token": localStorageService.get("token"),
                    "course_id": comment.course_id,
                    // "user_id": comment.user_id,
                    "content": comment.content
                }
            }).then(function(data) {
                return data.data.Response;
            })
        }
    }
});
