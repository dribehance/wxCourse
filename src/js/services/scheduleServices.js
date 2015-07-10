angular.module("WxCourse").factory("scheduleServices",function($http,config){
	return {
		// 课程计划 按节
		querySection:function() {
			return $http({
				url:config.url + "",
				method:"GET",
				params:{

				}
			}).then(function(data){
				return data.data;
			})
		},
		// 课程计划 每节课签到情况
		queryAttendance:function() {
			return $http({
				url:config.url + "",
				method:"GET",
				params:{

				}
			}).then(function(data){
				return data.data;
			})
		},
		// 课程计划 统计记录 按人
		queryRecord:function() {
			return $http({
				url:config.url + "",
				method:"GET",
				params:{

				}
			}).then(function(data){
				return data.data;
			})
		},
		// 课程计划 统计学生每节课程到课情况 按时间(节)
		queryHistory:function() {
			return $http({
				url:config.url + "",
				method:"GET",
				params:{

				}
			}).then(function(data){
				return data.data;
			})
		},
	}
});