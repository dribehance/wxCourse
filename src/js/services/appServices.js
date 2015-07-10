// EventHandle
angular.module("WxCourse").factory("appServices", function($rootScope, $location, $window, SharedState, errorServices, toastServices, config) {
    var routeChangeStart = function(e) {
        // userServices.checkAuth();
    }
    var routeChangeSuccess = function(e, currentRoute, prevRoute) {
        toastServices.hide();
        errorServices.hide();
        navBarHandler(e, currentRoute, prevRoute);
    }
    var navBarHandler = function(e, currentRoute, prevRoute) {
        // navbar top
        var _navbars_t = ["/me"];
        if (_navbars_t.contains($location.path())) {
            // SharedState.turnOff("navbarTop");
            $rootScope.hasNavbarTop = false;
        } else {
            // SharedState.turnOn("navbarTop");
            $rootScope.hasNavbarTop = true;
        }
        // navbar bottom
        var _navbars_b = ["/"];
        if (!_navbars_b.contains($location.path())) {
            // SharedState.turnOff("navbarBottom");
            $rootScope.hasNavbarBottom = false;
        } else {
            // SharedState.turnOn("navbarBottom");
            $rootScope.hasNavbarBottom = true;
        }
    }
    var onBackKeyDown = function() {
        $rootScope.$apply(function() {
            $rootScope.back();
        });
    }
    return {
        init: function() {
            // handle android backkeydown
            document.addEventListener("backbutton", onBackKeyDown, false);
            // rootScope binding
            $rootScope.$on("$routeChangeStart", routeChangeStart);
            $rootScope.$on("$routeChangeSuccess", routeChangeSuccess);
            // init navbar 
            $rootScope.hasNavbarBottom = true;
            $rootScope.hasNavbarTop = true;
            // backaction
            $rootScope.back = function() {
                $window.history.back();
            }
        }
    }
});
