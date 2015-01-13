(function() {
	
	var status = {
			BOOKING: "BOOKING",
			MODIFIED: "MODIFIED",
			CANCELLED: "CANCELLED"
	};
	
	SWSPortal.directive('tuiClassByType', function () {
		return {
			restrict : 'A',
			scope: {
				tuiClassByType: '@'
			},
			link: function($scope, element,  attrs) {
				var type = $scope.tuiClassByType;
				
				if (type == status.BOOKING) {
					element.addClass("col col-md-4 available");
				} else if(type == status.MODIFIED){
					element.addClass("col col-md-4 modified");
				} else if(type == status.CANCELLED){
					element.addClass("col col-md-4 canceled");
				}
			}
		};
	});
})()
