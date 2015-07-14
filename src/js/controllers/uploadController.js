angular.module("WxCourse").controller("uploadController",function($scope){
    $scope.$on("flow::fileAdded",function(event, flow, flowFile){
        flow.opts.target = "http://120.25.225.14:8080/admin/FileUpload/index";
        flow.opts.testChunks = false;
        flow.opts.query = {
            name:"sdfsdf"
        }
        flow.upload();
    })
});