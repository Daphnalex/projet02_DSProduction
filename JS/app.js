app.directive("navBar", function(){
	return{
		restrict: 'E,A',
		templateUrl: "partials/common/nav.html"
	}
});

app.directive("piedPage", function(){
	return{
		restrict: 'E,A',
		templateUrl: "partials/common/footer.html"
	}
});
