// by dribehance <dribehance.kksdapp.com>
var trainerPreviewController = function($scope, $routeParams, parserServices, trainerServices, errorServices, toastServices, config) {
    toastServices.show();
    trainerServices.preview($routeParams.company_id).then(function(data) {
        toastServices.hide();
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.trainer = parserServices.parseTrainer(data);
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
}
