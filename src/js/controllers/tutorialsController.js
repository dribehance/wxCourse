var tutorialsController = function($scope,$rootScope, localStorageService, parserServices, courseServices, errorServices, toastServices, config) {
    // $scope.like = false;
    $scope.toggle_like = function(course) {
        courseServices.toggleLike(course).then(function(data) {
            if (data.code == config.request.SUCCESS) {
                course.is_like = course.is_like == "1" ? "0" : "1";
                course.like_amount = data.zans || "0";
            }
        })
    }
    if (config.role.STUDENT == localStorageService.get("role")) {
        $scope.is_student = true;
    } else {
        $scope.is_student = false;
    }
    // multiy page load,init page params
    $scope.page = {
        number: 1,
        size: 10,
        type_id: $rootScope.type_id ||   "",
        no_more: false,
        message: "点击加载更多"
    }
    $scope.courses = [];
    $scope.queryByType = function(type_id) {
        $rootScope.type_id = type_id;
        if ($scope.page.type_id == type_id) {
            return;
        }
        // reset page
        $scope.page = {
            number: 1,
            size: 10,
            type_id: type_id,
            no_more: false,
            message: "点击加载更多"
        }
        $scope.courses = [];
        $scope.loadMore();
    }
    $scope.loadMore = function() {

        if ($scope.page.no_more) {
            return;
        }
        toastServices.show();
        $scope.page.message = "加载中...";
        courseServices.query($scope.page).then(function(data) {
            toastServices.hide();

            if (!(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS)) {
                errorServices.autoHide("服务器错误")
                return;
            }
            data.types = data.types.slice(0,4)
            if (data.types.length > 0 ) {
                $scope.types = data.types;
                // $scope.page.type_id = $scope.types[0].type_id;
            }
            if (data.courses.list.length > 0) {
                $scope.page.message = "点击加载更多";
                $scope.courses = $scope.courses.concat(parserServices.parseCourses(data.courses.list));
                $scope.page.number++;
            } else {
                $scope.page.no_more = true;
                $scope.page.message = "OooO,没有了!";
            }
        })
    }
    $scope.loadMore();
    if (localStorageService.get("token")) {
        $scope.is_login = true;
    }
    else {
        $scope.is_login = false;
    }
}
