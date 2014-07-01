(function($){
    // TODO: add styles to text box
    $.fn.browsersizemin = function(options) {
        
        var settings = $.extend({
            minWidth : 800,
            minHeight : 600,
            infoText : "Okienko jest za małe by coś działało na nim"
        },options)

        var $sizeWarningBox;

        function initialize() {
            initSizeWarning();
            $(window).resize(function() {
                controlSize();
            });
        }

        function initSizeWarning() {
            $sizeWarningBox = $("<div class='browsersizewarning' style='visibility: hidden;background:#ccc;'>" + settings.infoText + "</div>");
            $sizeWarningBox.css({"position": "fixed","z-index": 1000, "top": 0, "left": 0, "width": $(window).width(), "height": $(window).height()});
            $("body").append($sizeWarningBox);
            controlSize();
        }

        function controlSize() {
            if ($(window).width() < settings.minWidth || $(window).height() < settings.minHeight) {
                showSizeWarning();
            } else {
                hideSizeWarning();
            } 
        }

        function showSizeWarning() {
            $sizeWarningBox.css("visibility", "show");
        }

        function hideSizeWarning() {
            $sizeWarningBox.css("visibility", "hidden");
        }

        initialize();
    }
}(jQuery));