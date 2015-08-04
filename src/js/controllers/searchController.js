var searchController = function($scope, courseServices, toastServices, parserServices, errorServices, localStorageService, config) {
    $scope.recents = localStorageService.get("recents") || [];
    // localStorageService.set("recents",)
    $scope.page = {
        keyword: localStorageService.get("keyword"),
        number: 1,
        size: 10,
        no_more: false,
        message: "最近无搜索记录",
        dirty:false
    }
    $scope.queryByRecord = function(record) {
        $scope.page.keyword = record;
        $scope.queryByKeyword()
    }
    $scope.queryByKeyword = function() {
        $scope.page.dirty = true;
        if (!$scope.page.keyword) {
            return;
        }
        // record recents
        if (!$scope.recents.contains($scope.page.keyword)) {
            $scope.recents.unshift($scope.page.keyword);
            if ($scope.recents.length > 6) {
                $scope.recents = $scope.recents.slice(0, 6);
            }
            localStorageService.set("recents", $scope.recents);
        }
        $scope.page.number = 1;
        $scope.page.size = 10;
        $scope.page.no_more = false;
        $scope.page.message = "";
        $scope.courses = [];
        $scope.loadMore();
    }
    $scope.loadMore = function() {

        if ($scope.page.no_more) {
            return;
        }
        toastServices.show();
        $scope.page.message = "加载中...";
        courseServices.queryByKeyword($scope.page).then(function(data) {
            toastServices.hide();

            if (!(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS)) {
                errorServices.autoHide("服务器错误")
                return;
            }
            if (data.courses.list.length > 0) {
                $scope.page.message = "点击加载更多";
                $scope.courses = $scope.courses.concat(parserServices.parseCourses(data.courses.list));
                $scope.types = data.types;
                $scope.page.number++;
            } else {
                $scope.page.no_more = true;
                $scope.page.message = "OooO,没有了!";
            }
        })
    }
    $scope.clear = function() {
        $scope.recents = [];
        localStorageService.remove("recents");
    }
    $scope.queryByKeyword();
}
