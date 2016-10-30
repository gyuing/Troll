myApp.controller('staticCtrl',function($scope){
	$scope.category={
		loading:false,
		error:false
	};
	$scope.$on("categoryChangeStart",function(event,data){
		$scope.category.loading=true;
		$scope.category.error=false;
	});
	$scope.$on("categoryChangeError",function(event,data){
		$scope.category.loading=false;
		$scope.category.error=true;
		$scope.category.errorCode=data.errorCode;
		$scope.category.errorMessage=data.errorMessage;
	});
	$scope.$on("categoryChangeSuccess",function(event,data){
		$scope.category.loading=false;
		$scope.category.error=false;
	});



	$scope.main={
		view:"loading"
	};
	$scope.$on("mainChangeStart",function(event,data){
		$scope.main.view="loading";
	});
	$scope.$on("mainChangeError",function(event,data){
		$scope.main.view="error";
		$scope.main.errorCode=data.errorCode;
		$scope.main.errorMessage=data.errorMessage;
	});
	$scope.$on("mainChangeSuccess",function(event,data){
		$scope.main.view=data;
	});
});