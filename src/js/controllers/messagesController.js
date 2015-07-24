var messagesController = function($scope, parserServices, messageServices, errorServices, toastServices, config) {
    // multiy page load
    var page = 1,
        page_size = 1,
        no_more = false;
    $scope.messages = [];
    $scope.load_more_message = "点击加载更多";
    $scope.loadMore = function() {

        if (no_more) {
            $scope.load_more_message = "OooO,没有了!";
            return;
        }
        toastServices.show();
        $scope.load_more_message = "加载中...";
        messageServices.query(page, page_size).then(function(data) {
            toastServices.hide();
            $scope.load_more_message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.messages = $scope.messages.concat(parserServices.parseMessages(data.messages.list));
            }
            if (page < data.messages.totalPage) {
                page++;
            } else {
                no_more = true;
            }
            if (data.messages.totalPage == 0) {
                $scope.load_more_message = "OooO,没有了!";
            }
        })
    }
    $scope.loadMore();
}
