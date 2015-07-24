angular.module("WxCourse").factory("transformServices", function($http, $rootScope, $q, $location, localStorageService, config) {
	return {
		rever:function(obj) {
			var n = {};
			for ( key in obj ) {
				n[obj[key]] = key;
			}
			return n;
		},
		getTime:function(time) {
			var time_string = "",
				hour_string = time.getHours()<10? "0"+time.getHours():time.getHours(),
				minutes_string = time.getMinutes()<10? "0"+time.getMinutes():time.getMinutes();
			time_string = hour_string +":"+minutes_string;

			return time_string;
		},
		transformTime:function(times,repeater){
			var time_string = this.getTime(times.start_time) +"-"+this.getTime(times.end_time);
			if (repeater == config.repeater.DATE) {
				time_string = "每天-"+ time_string;
			}
			if (repeater == config.repeater.WEEK) {
				time_string = times.week +"-"+time_string;
			}
			if (repeater == config.repeater.MONTH) {
				time_string = times.month +"-"+time_string;
			}
			return time_string;

		},
		transformTimes:function(times,repeater){
			var time_strings = "";
			for(var i =0;i<times.length;i++) {
				time_strings += this.transformTime(times[i],repeater)+"、";
			}
			return "{"+time_strings.substring(0,time_strings.length-1)+"}";
		},
		transformDate:function(date) {
			if(!date){
				return "";
			}
			var date_string = "",
				year_string = date.getFullYear(),
				month_string = date.getMonth()+1;
				month_string = month_string <10?"0"+date.getMonth():date.getMonth(),
				date_string = date.getDate()<10?"0"+date.getDate():date.getDate();
			return year_string +"-"+month_string+"-"+date_string;
		}
	}
});