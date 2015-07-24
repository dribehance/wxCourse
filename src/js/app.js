angular.module('WxCourse', [
    'ngRoute',
    'mobile-angular-ui',
    "mobile-angular-ui.core.capture",
    "mobile-angular-ui.core.activeLinks",
    "mobile-angular-ui.core.sharedState",
    "flow",
    "timer",
    "LocalStorageModule",
])

.config(function($routeProvider,$httpProvider,flowFactoryProvider) {
    $routeProvider
        .when('/index', {
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
            controller: trainerController,
            resolve:{
                factory: trainerOnlyInterceptor
            }
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
            controller: releaseCourseController,
            resolve:{
                factory:authenInterceptor
            }
        })
        .when('/courses', {
            templateUrl: 'courses.html',
            reloadOnSearch: false,
            controller: coursesController
        })
        .when('/course', {
            templateUrl: 'course.html',
            reloadOnSearch: false,
            controller: courseController
        })
        .when('/teachers', {
            templateUrl: 'teachers.html',
            reloadOnSearch: false,
            controller: teachersController
        })
        .when('/teachers/:teacher_id', {
            templateUrl: 'teacher.html',
            reloadOnSearch: false,
            controller: teacherController
        })
        .when('/add_teacher', {
            templateUrl: 'add_teacher.html',
            reloadOnSearch: false,
            controller: addTeacherController
        })
        .when('/messages', {
            templateUrl: 'messages.html',
            reloadOnSearch: false,
            controller: messagesController
        })
        .when('/course_setting/:course_id', {
            templateUrl: 'course_setting.html',
            reloadOnSearch: false,
            controller: courseSettingController
        })
        .when('/section_schedule', {
            templateUrl: 'section_schedule.html',
            reloadOnSearch: false,
            controller: sectionScheduleController
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
            controller: recordScheduleController
        })
        .when('/history_schedule', {
            templateUrl: 'history_schedule.html',
            reloadOnSearch: false,
            controller: historyScheduleController
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
            controller: releaseReviewController
        })
        .when('/tutorials', {
            templateUrl: 'tutorials.html',
            reloadOnSearch: false,
            controller: tutorialsController
        })
        .when('/tutorials/:tutorial_id', {
            templateUrl: 'tutorial.html',
            reloadOnSearch: false,
            controller: tutorialController
        })
        .when('/comments', {
            templateUrl: 'comments.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })
        .when('/release_comment', {
            templateUrl: 'release_comment.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })
        .when('/my_courses', {
            templateUrl: 'my_courses.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })
        .when('/my_courses/:course_id', {
            templateUrl: 'my_course.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })
        .when('/my_reviews', {
            templateUrl: 'my_reviews.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })
        .when('/my_reviews/:review_id', {
            templateUrl: 'my_review.html',
            reloadOnSearch: false,
            // controller: historyScheduleController
        })
        .otherwise({
            redirectTo: "/index"
        });
        $httpProvider.interceptors.push('tokenInterceptor');

}).run(function(appServices) {
    // init event such as routechangestart...
    appServices.init();
});
