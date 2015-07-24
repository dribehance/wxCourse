var tutorialsController = function($scope,localStorageService, parserServices, courseServices, errorServices, toastServices, config) {
    // $scope.like = false;
    $scope.toggle_like = function(course) {
        courseServices.toggleLike(course).then(function(data){
        	if (data.code == config.request.SUCCESS) {
                course.is_like = course.is_like == "1"?"0":"1";
                course.like_amount = data.zans || "0";
            }
        })
    }
    if (config.role.STUDENT ==  localStorageService.get("role") ) {
        $scope.is_student = true;
    } else {
        $scope.is_student = false;
    }
    // multiy page load
    var page = 1,
        page_size = 10,
        type_id = 1,
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
        courseServices.query(page, page_size, type_id).then(function(data) {
            toastServices.hide();
            $scope.load_more_message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.courses = $scope.courses.concat(parserServices.parseCourses(data.courses.list));
            }
            if (page < data.courses.totalPage) {
                page++;
            } else {
                no_more = true;
            }
            if (data.courses.totalPage == 0) {
                $scope.load_more_message = "OooO,没有了!";
            }
        })
    }
    $scope.loadMore();
}
