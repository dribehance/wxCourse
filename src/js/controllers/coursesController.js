var coursesController = function($scope, parserServices, courseServices, errorServices, toastServices, config) {

    // multiy page load
    var page = 1,
        page_size = 10,
        no_more = false;
    $scope.courses = [];
    $scope.load_more_message = "点击加载更多";
    $scope.loadMore = function() {

        if (no_more) {
            $scope.load_more_message = "OooO,没有了!";
            return;
        }
        toastServices.show();
        $scope.load_more_message = "加载中...";
        courseServices.queryByTrainer(page, page_size).then(function(data) {
            toastServices.hide();
            $scope.load_more_message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.courses = $scope.courses.concat(parserServices.parseCourses(data.Courses.list));
                $scope.user_id = data.user_id;
            }
            if (page < data.Courses.totalPage) {
                page++;
            } else {
                no_more = true;
            }
            if (data.Courses.totalPage == 0) {
                $scope.load_more_message = "OooO,没有了!";
            }
        })
    }
    $scope.loadMore();
}
