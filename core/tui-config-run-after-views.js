(function () {
 
    SWSPortal.factory('runAfterViews', runAfterViews);

    runAfterViews.$inject = [];

    function runAfterViews($q, $location) {
        var factory = {
            init: init,
            isResizing: false
        }

        return factory;

        ///////

        function init() {
            // Run this code after view for visual presentation pourpouse
            equalheight('.column, .equal');
        }

        function resize(selector) {
            if (factory.isResizing) {
                return;
            }

            $(window).resize(function(){
                equalheight(selector);
            });
            factory.isResizing = true;
        }

        function equalheight(selector) {
            
            resize(selector);

            var currentTallest = 0,
                 currentRowStart = 0,
                 rowDivs = new Array(),
                 $el,
                 topPosition = 0;

             $(selector).each(function() {
                   $el = $(this);
                   $($el).height('auto')
                   topPostion = $el.position().top;

                   if (currentRowStart != topPostion) {
                     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                       rowDivs[currentDiv].height(currentTallest);
                     }
                     rowDivs.length = 0; // empty the array
                     currentRowStart = topPostion;
                     currentTallest = $el.height();
                     rowDivs.push($el);
                   } else {
                     rowDivs.push($el);
                     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                  }
                   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                     rowDivs[currentDiv].height(currentTallest);
                   }
             });
        }

    }

})();