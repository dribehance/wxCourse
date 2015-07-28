var courseController = function($rootScope, $scope, $location, $routeParams, courseServices, parserServices, commentServices, localStorageService, toastServices, errorServices, config) {
    $scope.course_id = $routeParams.course_id;
    // course detail
    // $scope.courses = []
    courseServices.queryTutorialById($scope.course_id).then(function(data) {
        if (data.code == config.request.SUCCESS) {
            $scope.course = parserServices.parseCourse(data);
            $scope.course.from = data.start_day;
            $scope.course.to = data.end_day;
            $scope.course.time = angular.extend({}, $scope.course.time, {
                start: data.course_time[0].start_time,
                end: data.course_time[0].end_time,
                repeater: data.course_time[0].week
            })
            console.log()
        } else {
            errorServices.autoHide("服务器错误")
        }
    });
    // comment
    // multiy page load
    var page = 1,
        page_size = 5,
        no_more = false;
    $scope.comments = [];
    $scope.load_more_message = "点击加载更多";
    $scope.loadMore = function() {

        if (no_more) {
            $scope.load_more_message = "OooO,没有了!";
            return;
        }
        toastServices.show();
        $scope.load_more_message = "加载中...";
        commentServices.query(page, page_size, $scope.course_id).then(function(data) {
            toastServices.hide();
            $scope.comment_amount = data.Comments.totalRow || 0;
            $scope.load_more_message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.comments = $scope.comments.concat(parserServices.parseComments(data.Comments.list));
            }
            if (page < data.Comments.totalPage) {
                page++;
            } else {
                no_more = true;
            }
            if (data.Comments.totalPage == 0) {
                $scope.load_more_message = "OooO,没有了!";
            }
        })
    }
    $scope.loadMore();
}
