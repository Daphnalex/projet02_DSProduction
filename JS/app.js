(function(){

	var app = angular.module('dsProd', []);

//Mise à jour copyright 
app.controller('dateController', function(){
	this.date = new Date();

});



app.directive("bloc1", function(){
	return{
		restrict: 'EA',
		name: 'bloc1',
		templateUrl: "/partials/services/bloc1.html"
	}
})

app.directive("bloc2", function(){
	return{
		restrict: 'EA',
		name: 'bloc2',
		templateUrl: "/partials/services/bloc2.html"
	}
})


app.directive("bloc3", function(){
	return{
		restrict: 'EA',
		name: 'bloc3',
		templateUrl: "/partials/services/bloc3.html"
	}
})


app.directive("bloc4", function(){
	return{
		restrict: 'EA',
		name: 'bloc4',
		templateUrl: "/partials/services/bloc4.html"
	}
})



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

app.controller('ServController', function(){
	
});	
