var tutorialController = function($scope, $location, localStorageService, errorServices, config) {
    $scope.joinin = function() {
        if (!localStorageService.get("token")) {
            $location.path("/signin");
            return;
        }
        if (config.role[localStorageService.get("role")] != "学生") {
            errorServices.autoHide("只有学生才可以报名");
            return;
        }
        // joinin code
    }
}
