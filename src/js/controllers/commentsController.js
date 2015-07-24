var commentsController = function($scope,$routeParams, parserServices, commentServices, errorServices, toastServices, config) {
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
        commentServices.query(page, page_size,$routeParams.course_id).then(function(data) {
            toastServices.hide();
            $scope.comment_amount = data.totalRow;
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
