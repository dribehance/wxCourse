var teacherController = function($scope, $http, teacherServices, errorServices, toastServices, SharedState, config) {
    $scope.teacher = new _m_teacher();
    $scope.teacher.type = "语文";
    $scope.teacher.name = "北大青鸟软件实训";
    $scope.teacher.intro = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, sequi porro dignissimos, eum sunt incidunt blanditiis magni cupiditate dicta provident, quibusdam! Magni beatae natus enim repellat culpa, quo rem aliquid!";
    $scope.teacher.address = "深圳财富港国际中心D座";
    $scope.teacher.contact = "沈文涛";
    $scope.teacher.telephone = "13468132373";
    teacherServices.queryById().then(function(data) {

    });
    $scope.edit = function(m) {
        for (key in m) {
            $scope.editable_content = m[key];
        }
        SharedState.turnOn("editable_panel");
    }
}
