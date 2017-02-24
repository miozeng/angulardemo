var msapp = angular.module('msapp', [
	'ngRoute',
	'ngMessages',
	'as.sortable',
	'ui.bootstrap',
	'ui.bootstrap-slider',
	'pascalprecht.translate',     
	'bsLoadingOverlay',
	'bsLoadingOverlayHttpInterceptor',
    'msControllers',
	'msServices',
	'mServiceServices',
	'errorServices',
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
			otherwise({
				templateUrl: 'templates/center.html',
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



