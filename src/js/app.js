angular.module('WxCourse', [
    'ngRoute',
    'mobile-angular-ui',
    "mobile-angular-ui.core.capture",
    "mobile-angular-ui.core.activeLinks",
    "mobile-angular-ui.core.sharedState",
    "flow",
])

.config(function($routeProvider,flowFactoryProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            reloadOnSearch: false
        })
        .when('/signin', {
            templateUrl: 'signin.html',
            reloadOnSearch: false,
            controller:signinController
        })
        .when('/signup', {
            templateUrl: 'signup.html',
            reloadOnSearch: false,
            controller:signupController
        })
        .when('/forget', {
            templateUrl: 'forget.html',
            reloadOnSearch: false,
            controller:forgetController
        })
        .when('/trainer', {
            templateUrl: 'trainer.html',
            reloadOnSearch: false,
            controller: trainerController
        })
        .when('/student', {
            templateUrl: 'student.html',
            reloadOnSearch: false,
            controller: studentController
        })
        .when('/about', {
            templateUrl: 'about.html',
            reloadOnSearch: false,
            controller: aboutController
        })
        .when('/authen', {
            templateUrl: 'authen.html',
            reloadOnSearch: false,
            controller: authenController
        })
        .when('/release_course', {
            templateUrl: 'release_course.html',
            reloadOnSearch: false,
            controller: releaseCourseController
        })
        .when('/courses', {
            templateUrl: 'courses.html',
            reloadOnSearch: false,
            // controller: coursesController
        })
        .when('/course', {
            templateUrl: 'course.html',
            reloadOnSearch: false,
            // controller: courseController
        })
        .when('/teachers', {
            templateUrl: 'teachers.html',
            reloadOnSearch: false,
            controller: teachersController
        })
        .when('/teachers/:teacherId', {
            templateUrl: 'teacher.html',
            reloadOnSearch: false,
            controller: teacherController
        })
        .when('/messages', {
            templateUrl: 'messages.html',
            reloadOnSearch: false,
            controller: messagesController
        })
        .when('/course_setting', {
            templateUrl: 'course_setting.html',
            reloadOnSearch: false,
            controller: courseSettingController
        })
        .when('/section_schedule', {
            templateUrl: 'section_schedule.html',
            reloadOnSearch: false,
            // controller: sectionScheduleController
        })
        .when('/payments', {
            templateUrl: 'payments.html',
            reloadOnSearch: false,
            controller: paymentController
        })
        .when('/attendance_schedule', {
            templateUrl: 'attendance_schedule.html',
            reloadOnSearch: false,
            controller: attendanceScheduleController
        })
        .when('/record_schedule', {
            templateUrl: 'record_schedule.html',
            reloadOnSearch: false,
            // controller: recordScheduleController
        })
        .when('/history_schedule', {
            templateUrl: 'history_schedule.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })
        .when('/reviews', {
            templateUrl: 'reviews.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })
        .when('/reviews/:reviewId', {
            templateUrl: 'review.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })
        .when('/release_review', {
            templateUrl: 'release_review.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })

}).run(function(appServices) {
    // init event such as routechangestart...
    appServices.init();
});
