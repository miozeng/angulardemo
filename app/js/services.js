var msServices = angular.module('msServices', []);

msServices.service('msServices',[ '$http','$window',function($http,$window){

	this.language="en";

	var config = new Config();
	
/*
	
	this.getSession = function(){
		return $http.get(config.getSessionId()).success(function(res){
			 $window.sessionStorage.setItem("_session",JSON.stringify(res));  
		    return res;
		}).error(function(err){    console.log(err);   });
	}*/
	
	this.findAllUser = function(){
//		return $http.get(config.findAllUser()).success(function(res){
//		return res;
//		}).error(function(err){    console.log(err);   });
		
		return $http.get('js/data/user.json').success(function(res){
			return res;
			}).error(function(err){    console.log(err);   });
	}
	
	/*
	this.findAgents = function(){
		var data = {cityId:this.getCityId(),bookingDate:this.getBookingDate(),timeslotId:this.getTimeslot(),
				gender:this.getGender(),characterId:this.getCharacter(),passions:this.getPassions(),important:this.getImportant()}
		return $http({
			url: config.findAllAgent(),
			data: data,
			method: 'post',
			dataType: 'json'
		}).success(function(res){
			return res;
		}).error(function(err){    console.log(err);   });
	}
	*/


	//===========================set param============================


	this.setLanguage= function(language){
		this.language = language;
	}
	
	//===========================get param============================
	this.getLanguage= function(){
		return this.language;
	}
	
    
}]);