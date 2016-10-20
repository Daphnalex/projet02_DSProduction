(function(){
	

var app = angular.module('dsProd', []);
	app.controller('dateController', function(){
			this.date = new Date();
		
	});



app.directive("navBar", function(){
	return{
		restrict: 'EA',
		templateUrl: "partials/common/nav.html"
	}
});

app.directive("piedPage", function(){
	return{
		restrict: 'EA',
		templateUrl: "partials/common/footer.html"
	}
});


})();


