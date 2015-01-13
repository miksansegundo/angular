(function() {

    SWSPortal.provider('route', route);

    function route(CONFIG) {

		this.getViewByName = function(params) {
			var viewName = params.viewName;
			return CONFIG.viewsFolder + '/' + viewName + '/' + viewName + '.html';
		};

		this.$get = ['CONFIG', function () {

			return new route(CONFIG);
		}];
    }

}());    