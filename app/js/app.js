var msapp = angular.module('msapp', [
	'ngRoute',
	'ngMessages',
	'as.sortable',
	'ui.bootstrap',
	'ui.bootstrap-slider',
	'ngTable',
	'smart-table',
	'pascalprecht.translate',     
	'bsLoadingOverlay',
	'bsLoadingOverlayHttpInterceptor',
    'msControllers',
	'msServices',
	'mServiceServices',
	'errorServices',
	'datatables.buttons',
	'datatables'
]);



msapp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/datatable',{
				templateUrl: 'templates/datatable.html',
				controller: 'tableCtr',
				title:"datatable | angualr demo",
				idtitle:"表格| angualr demo"
			}).
			when('/forms',{
				templateUrl: 'templates/forms.html',
				controller: 'formsCtr',
				title:"forms | angualr demo",
				idtitle:"表单| angualr demo"
			}).
			when('/slider',{
				templateUrl: 'templates/slider.html',
				controller: 'sliderCtr',
				title:"slider | angualr demo",
				idtitle:"滑动器 |angualr demo"
			}).
			when('/sortable',{
				templateUrl: 'templates/sortable.html',
				controller: 'sortableCtr',
				title:"sortable | angualr demo",
				idtitle:"排序 |angualr demo"
			}).
			when('/dragdrop',{
				templateUrl: 'templates/dragdrop.html',
				controller: 'dragdropCtr',
				title:"dragdrop | angualr demo",
				idtitle:"拖拽 |angualr demo"
			}).
			when('/uiauth',{
				templateUrl: 'templates/uiauth.html',
				controller: 'uiauthCtr',
				title:"uiauth | angualr demo",
				idtitle:"ui权限控制 |uiauth demo"
			}).
			when('/ngtable',{
				templateUrl: 'templates/ngtable.html',
				controller: 'ngtableCtr',
				title:"ngtable | angualr demo",
				idtitle:"ngtable表格 |ngtable demo"
			}).
			when('/smarttable',{
				templateUrl: 'templates/smarttable.html',
				controller: 'smarttableCtr',
				title:"smarttable | angualr demo",
				idtitle:"smarttable |uiauth demo"
			}).
			when('/conversational',{
				templateUrl: 'templates/conversational.html',
				controller: 'conversationalCtr',
				title:"conversational | conversational demo",
				idtitle:"conversational |conversational demo"
			}).
			when('/test',{
				templateUrl: 'templates/createAppointment2.html',
				controller: 'testCtr',
				title:"test | test demo",
				idtitle:"test |test demo"
			}).
			otherwise({
				templateUrl: 'templates/center.html',
				controller: 'centerCtr',
				title:"angualr demo",
				idtitle:"angualr demo"
			});
	}]);

msapp.config([ '$translateProvider', function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix : 'js/translations/ms_',
		suffix : '.json'
	});
	$translateProvider.preferredLanguage('en');
} ]);



msapp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        if (current.hasOwnProperty('$$route')) {
        	if($rootScope.language =="id"){
        		 $rootScope.title = current.$$route.idtitle;
        	}else{
        		 $rootScope.title = current.$$route.title;
        	}
           
        }
    });
}]);

/**/
msapp.directive('myAccess', ['msServices', 'removeElement', function (msServices, removeElement) {  
    return{  
        restrict: 'A',  
        link: function (scope, element, attributes) {  
   
            var hasAccess = false;  
            var allowedAccess = attributes.myAccess.split(",");  
            for (i = 0; i < allowedAccess.length; i++) {  
                if (msServices.userHasRole(allowedAccess[i])) {  
                    hasAccess = true;  
                    break;  
                }  
            }  
   
            if (!hasAccess) {  
                angular.forEach(element.children(), function (child) {  
                    removeElement(child);  
                });  
                removeElement(element);  
            }  
   
        }  
    }  
}]).constant('removeElement', function(element){  
    element && element.remove && element.remove();  
}); 


msapp.directive('pageSelect', function() {
    return {
      restrict: 'E',
      template: '<input type="text" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
      link: function(scope, element, attrs) {
        scope.$watch('currentPage', function(c) {
          scope.inputPage = c;
        });
      }
    }
  });

msapp.directive('myDirective', function() { 
	 return { 
		 restrict: 'EAC', 
		 templateUrl: 'hello.html', 
		 replace: true 
		 }; 
});
/*
msapp.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            if(scope.$last == true){
            	
            	
            	if(attr.ngRepeat == "agent in results"){
            		if($("#appointmentType").val() =="T"){
            			$("div[name='agentDiv']").first().show();
            		    $("div[name='agentDiv']").first().next().show();
            		}else{
            			 $("div[name='agentDiv']").show();
            		}
            		
          	     }
            	
            	if(attr.ngRepeat == "passion in passions" || attr.ngRepeat == "character in characters"){
            		scope.$emit('repeatFinished');
            		
	                $('input').iCheck({
	        		    checkboxClass: 'icheckbox_minimal',
	        		    radioClass: 'iradio_minimal',
	        		    increaseArea: '20%' // optional
	        		});
	            
	        	    $('input').on('ifChecked', function() {
	        		  $(this).parents('label').addClass("active");
	        		    if( $("input[name='sex']:checked").length>0 && $("input[name='someone']:checked").length>0 && $("input[name='passion']:checked").length>0){
	        		    	$('#selectAgent').removeClass("disabled");
	          			}else{
	          				$('#selectAgent').addClass("disabled");
	          			}
	        		});
	        		$('input').on('ifUnchecked', function() {
	        		  $(this).parents('label').removeClass("active");
	        		  if( $("input[name='sex']:checked").length>0 && $("input[name='someone']:checked").length>0 && $("input[name='passion']:checked").length>0){
	        				$('#selectAgent').removeClass("disabled");
	          			}else{
	          				$('#selectAgent').addClass("disabled");
	          			}
	        		});
	        	
	        		 scope.$emit('repeatFinished');
	            	
	            	
          	   }
            

        		
            }
        }
    }
})
*/



