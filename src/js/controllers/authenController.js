var authenController = function($scope, userServices, localStorageService, parserServices, errorServices, toastServices, config) {
    $scope.is_authen = false;
    if (localStorageService.get("authen") == config.authen.PASS) {
        $scope.is_authen = true;
        userServices.queryAuthenInfo().then(function(data) {
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.authens = parserServices.parseAuthenInfo(data.result);
            } else {
                errorServices.autoHide("服务器错误")
            }
        });
    }
}
angular.module("WxCourse").controller("authenUploadController", function($scope, localStorageService, errorServices, config) {

    $scope.ajaxForm = function(flow) {
        if (flow.files.length > 2) {
            flow.cancel();
            errorServices.autoHide("上传文件个数过多");
            return;
        }
        // upload
        flow.opts.target = config.url + "/app/UserCenter/identity";
        flow.opts.testChunks = false;
        flow.opts.fileParameterName = "identify_cards";
        flow.opts.query = {
            "token": localStorageService.get("token")
        };
        flow.upload();
    };
})
