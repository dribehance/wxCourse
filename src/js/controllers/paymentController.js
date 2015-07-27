var paymentController = function($scope, $routeParams, courseServices, parserServices, errorServices, toastServices, SharedState, config) {
    // multiy page load
    var page = 1,
        page_size = 10,
        no_more = false;
    $scope.payments = [];
    $scope.load_more_message = "点击加载更多";
    $scope.course_id = $routeParams.course_id;
    $scope.loadMore = function() {

        if (no_more) {
            $scope.load_more_message = "OooO,没有了!";
            return;
        }
        toastServices.show();
        $scope.load_more_message = "加载中...";
        courseServices.queryStudentByCourse($scope.course_id, page, page_size).then(function(data) {
            toastServices.hide();
            $scope.load_more_message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.payments = $scope.payments.concat(parserServices.parsePayments(data.Users.list));
                $scope.payment = {
                    total: data.apply_count,
                    unpay: data.apply_unpay_count
                }
            }
            if (page < data.Users.totalPage) {
                page++;
            } else {
                no_more = true;
            }
            if (data.Users.totalPage == 0) {
                $scope.load_more_message = "OooO,没有了!";
            }
        })
    }
    $scope.loadMore();
    $scope.pay = function(payment, course_id) {
        
        courseServices.pay(payment,course_id).then(function(data) {
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                payment.status = payment.status == "1" ? "0" : "1";
                $scope.payment.unpay = data.unpay_count;
            } else {
                errorServices.autoHide("服务器错误")
            }
        })
    }
}
