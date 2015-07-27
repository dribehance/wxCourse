var reviewsController = function($scope, $routeParams, localStorageService, parserServices, courseServices, errorServices, toastServices, config) {
    $scope.student_id = $routeParams.student_id;
    $scope.course_id = $routeParams.course_id;
    $scope.deleteable = false;
    $scope.releaseable = false;
    if (localStorageService.get("role") == config.role.TRAINER) {
        $scope.deleteable = true;
        $scope.releaseable = true;
    }
    $scope.remove = function(review) {
        toastServices.show();
        courseServices.removeReview({
            'student_id': $scope.student_id,
            'course_id': $scope.course_id
        }).then(function(data) {
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                toastServices.hide();
                var index = $scope.reviews.indexOf(review);
                $scope.reviews.splice(index,1)
            } else {
                errorServices.autoHide("服务器错误")
            }
        });
    };
    // multiy page load
    var page = 1,
        page_size = 5,
        no_more = false;
    $scope.reviews = [];
    $scope.load_more_message = "点击加载更多";
    $scope.loadMore = function() {

        if (no_more) {
            $scope.load_more_message = "OooO,没有了!";
            return;
        }
        toastServices.show();
        $scope.load_more_message = "加载中...";
        courseServices.queryReviewByStudent($scope.student_id, $scope.course_id, page, page_size).then(function(data) {
            toastServices.hide();
            $scope.review_amount = data.totalRow;
            $scope.load_more_message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.reviews = $scope.reviews.concat(parserServices.parseReviews(data.Learn.list));
            }
            if (page < data.Learn.totalPage) {
                page++;
            } else {
                no_more = true;
            }
            if (data.Learn.totalPage == 0) {
                $scope.load_more_message = "OooO,没有了!";
            }
        })
    }
    $scope.loadMore();
}
