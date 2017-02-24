var errorServices = angular.module('errorServices', []);

errorServices.factory('HttpInterceptor', [ '$q', HttpInterceptor ]);

function HttpInterceptor($q) {
	return {
		request : function(config) {
			
			return config;
		},
		requestError : function(err) {
			return $q.reject(err);
		},
		response : function(res) {
			var b = res.headers()['error'];
			if(b == "nologin"){
				 window.location.href = "../../ctm";
			}
			return res;
		},
		responseError : function(err) {
//			 window.location.href = "404.html";
			if (-1 === err.status) {
				window.location.href = "404.html";
			} else if (500 === err.status) {
				 window.location.href = "500.html";
			} else if (404 === err.status) {
				 window.location.href = "404.html";
			}
			return $q.reject(err);
		}
	};
}

errorServices.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push(HttpInterceptor);
} ]);