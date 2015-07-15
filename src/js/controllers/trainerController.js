var trainerController = function($scope, $http, trainerServices, errorServices, toastServices, SharedState, config) {
    $scope.trainer = new _m_trainer();
    $scope.trainer.type = "语文";
    $scope.trainer.name = "北大青鸟软件实训";
    $scope.trainer.intro = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, sequi porro dignissimos, eum sunt incidunt blanditiis magni cupiditate dicta provident, quibusdam! Magni beatae natus enim repellat culpa, quo rem aliquid!";
    $scope.trainer.address = "深圳财富港国际中心D座";
    $scope.trainer.contact = "沈文涛";
    $scope.trainer.telephone = "13468132373";
    trainerServices.query().then(function(data) {

    });
    $scope.edit = function(m) {
        for (key in m) {
            $scope.editable_content = m[key];
        }
        SharedState.turnOn("editable_panel");
    }
    $scope.ajaxForm = function() {
        console.log("ajax form for cors")
        $http({
            url: "http://120.25.225.14:8080/admin/FileUpload/normal",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {
                "name": "hello world"
            }
        })
    }
}
