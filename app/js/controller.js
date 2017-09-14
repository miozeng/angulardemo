var msControllers = angular.module('msControllers',[]);

msControllers.controller('centerCtr', [ '$scope', '$translate','$rootScope','msServices',
	function($scope, $translate, $rootScope,msServices) {

	$scope.name  = "mio";

		
	} ]);

msControllers.controller('ctrl', [ '$scope', '$translate','$rootScope','msServices',
	function($scope, $translate, $rootScope,msServices) {

		var lang = "cn";
		$translate.use( lang);
	    $rootScope.language  = lang;
	    msServices.setLanguage(lang);

		$scope.setLang = function(langKey) {
			$translate.use(langKey);
			msServices.setLanguage(langKey);
			$rootScope.language = langKey;
		};

		
	} ]);



    msControllers.controller('sliderCtr', ['$scope', '$log', function ($scope, $log) {

        $scope.testOptions = {
            min: 1000,
            max: 1000000,
            step: 1000,
            precision: 2,
            orientation: 'horizontal',  // vertical
            handle: 'round', //'square', 'triangle' or 'custom'
            tooltip: 'show', //'hide','always'
            tooltipseparator: ':',
            tooltipsplit: false,
            enabled: true,
            naturalarrowkeys: false,
            range: false,
            ngDisabled: false,
            reversed: false
        };
        $scope.value = 500000;
        $scope.add = function () {
        	if($scope.value < 1000000){
        		 $scope.value +=1000;
         	}
        	
        };
   
        $scope.subtraction = function () {
        	if($scope.value > 1000){
       		 $scope.value -=1000;
        	}
        };


    }]
);

msControllers.controller('tableCtr', [ '$scope','$rootScope','$http','msServices','DTOptionsBuilder','DTColumnBuilder','DTColumnDefBuilder',
	function($scope,$rootScope,$http,msServices,DTOptionsBuilder, DTColumnBuilder,DTColumnDefBuilder) {


		$scope.dtOptions = DTOptionsBuilder.newOptions()
		.withOption('paging', false)
		.withOption('searching', true)
		.withOption('info', true)
		.withButtons([
		{
			extend : "csvHtml5",
			text : '<i class="fa fa-file-text-o"></i> csv',
			filename:  "city",
			exportOptions : {columns:[0,1,2,3,4]}
		},
		{
			extend : 'print',
			text : '<i class="fa fa-print" aria-hidden="true"></i> Print',
			titleAttr : 'Print'
		} ]);

		msServices.findAllUser().then(function(res){    
			$scope.persons  = res.data;
        });

	} ]);

msControllers.controller('formsCtr', [ '$scope', '$rootScope','msServices',
	function($scope, $rootScope,msServices) {
	$scope.products =  [
		{ productId: "1",productName:"sports" },
		{ productId: "2",productName:"music" },
		{ productId: "3" ,productName:"read"}
	];
	
	$scope.saveUser=function(){
		var isproduct = true;
		if ($scope.userForm.$invalid) {
			$scope.valid = true;
		} else {
			$scope.valid = false;
		}
		
			
		if ($('input[name="areaOfInterest"]:checked').length <= 0) {
			isproduct = false;
			$("#aoiMsg").show();
		} else {
			isproduct = true;
			$("#aoiMsg").hide();
		}

		if (!( isproduct && !$scope.userForm.$invalid)) {
			
			return;
		}
		
		var areaOfInterests="";
			$('input[name="areaOfInterest"]:checked').each(function(){
				areaOfInterests += "{"+ $(this).val() + "}";
			});

			alert(areaOfInterests);
			alert($scope.user);
		
			
	
	}
		
	} ]);

msControllers.controller('sortableCtr', [ '$scope', '$rootScope','msServices',
	function($scope, $rootScope,msServices) {

	   $scope.items = [
           {name: "female or male agent"},
           {name: "agent’s character"},
           {name: "passions"}
       ];
       $scope.sortableOptions = {
           containment: '#scrollable-container',
       };
	
	} ]);


msControllers.controller('dragdropCtr', [ '$scope', '$rootScope','msServices',
	function($scope, $rootScope,msServices) {

		
	} ]);


/*
msControllers.controller('chooseTime',['$scope','$rootScope','msServices',
	function($scope,$rootScope,msServices){
	
  
	    $scope.$on('ngRepeatFinished',function(){
	    	if(msServices.getTimeslotIndex()  !=null && msServices.getTimeslotIndex() !=""){
		    	$('input[name="timeslot"]:eq('+(msServices.getTimeslotIndex())+')').attr("checked",true);
		    	$('input[name="timeslot"]:eq('+(msServices.getTimeslotIndex())+')').parent('label').addClass("active");
			}else{
			  	$('input[name="timeslot"]:first').attr("checked",true);
				$('input[name="timeslot"]:first').parent('label').addClass("active");
			}

	    })


	}]);

*/



msControllers.controller('uiauthCtr', [ '$scope','$rootScope','$http','msServices',
	function($scope,$rootScope,$http,msServices) {

	} ]);



msControllers.controller('ngtableCtr', [ '$scope','$rootScope','$http','msServices','NgTableParams',
	function($scope,$rootScope,$http,msServices,NgTableParams) {
	
	   
	msServices.findAllQuotation().then(function(res){    
	$scope.persons  = res.data;
	 $scope.quotableParams = new NgTableParams({
	    }, {
	      dataset: res.data
	    });
});

	 

	 
	} ]);

msControllers.controller('smarttableCtr', [ '$scope','$rootScope', '$filter','$http',
	function($scope,$rootScope,$filter,$http) {
	$scope.rowCollection = [
	        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
	        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
	        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'},
	        {firstName: 'Laurent2', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
	        {firstName: 'Blandine2', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
	        {firstName: 'Francoise2', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'},
	        {firstName: 'Laurent3', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
	        {firstName: 'Blandine3', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
	        {firstName: 'Francoise3', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
	    ];
	
	$scope.rowCollection1 = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102}
    ];
	
	$scope.rowCollection2 = [
        {firstName: 'Laurent', lastName: 'Renard'},
        {firstName: 'Blandine', lastName: 'Faivre'}
    ];
	
	$http.get('js/data/smarttest2.json').success(function(res){
		$scope.smart  = res;
		}).error(function(err){    console.log(err);   });
	
	
	
	} ]);



msControllers.controller('conversationalCtr', [ '$scope','$rootScope', '$filter','$http',
	function($scope,$rootScope,$filter,$http) {

	var lastnameCheck = function(dto, success, error){
		console.log("testValidation, dto:", dto, success, error);
		if(dto.text.toLowerCase().indexOf("zeng") != -1)
			return success();
		return error();
	};
	window.onload = function(){
		var conversationalForm = window.cf.ConversationalForm.startTheConversation({
			formEl: document.getElementById("form"),
			context: document.getElementById("cf-context"),
			flowStepCallback: function(dto, success, error){
				
				if(dto.tag.id == "firstname"){
					var fn =dto.tag.value;
					if(fn.length >2 &&fn.length <15){
						return success();
					}else{
						return error();
					}
					//conversationalForm.stop("Stopping form, but added value");
				}else if(dto.tag.id == "lastname"){
					var fn =dto.tag.value;
					if(fn.length >2 &&fn.length <15){
						return success();
					}else{
						return error();
					}
				}else if(dto.tag.name == "gender"){
					if(dto.tag.value[0] != ""){
						return success();
					}else{
						return error();
					}
				}
				return success();
			},
			submitCallback: function(){
				// remove Conversational Form
				alert("success done!")
			}
		});
	};
	
	
	} ]);

msControllers.controller('testCtr', [ '$scope','$rootScope','$http','msServices',
	function($scope,$rootScope,$http,msServices) {
	
	 if($("form[class='dform']").length>0){
		alert("aa");
	}

	 
	} ]);