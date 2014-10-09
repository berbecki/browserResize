;(function($){
    'strict mode';
    $.fn.browsersizemin = function(options) {
        
        var settings = $.extend({
            minWidth: 800,
            minHeight: 600,
            infoBoxBackgroundColor: '#b2ada7',
            infoText: "this window is to small",
            infoTextWidth: 300,
            infoTextColor: '#686562',
            infoTextShadowColor: '#c9c3bd'
        }, options);

        var $sizeWarningBox,
            $sizeWarningInfo;

        function initialize() {
            initSizeWarning();
            $( window ).resize( function() {
                controlSize();
            });
        }

        function initSizeWarning() {
            $sizeWarningInfo = $('<span id="browser-size-warning-info" style="color:' + settings.infoTextColor + '">' + settings.infoText + '</span>');
            $sizeWarningBox = $('<div id="browser-size-warning-box" style="display: none;background:' + settings.infoBoxBackgroundColor + ';"></div>');

            $sizeWarningBox.append($sizeWarningInfo);

            $sizeWarningBox.css({
                'position': 'fixed',
                'z-index': 1000,
                'top': 0,
                'left': 0,
                'box-shadow': 'inset 0 0 60px 0 rgba(104,101,98,0.1)',
                'width': $(window).width(),
                'height': $(window).height()
            });

            $sizeWarningInfo.css({
                'width': settings.infoTextWidth,
                'display': 'block',
                'position': 'absolute',
                'text-align': 'center',
                'text-shadow': settings.infoTextShadowColor,
                'left': ( ($(window).width() / 2) - (settings.infoTextWidth / 2) ),
                'bottom': ( $(window).height() / 2 - 10 )
            });

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
            $sizeWarningBox.css({
                'display': 'block',
                'width': $(window).width(),
                'height': $(window).height()
            });
            $sizeWarningInfo.css({
                'left': ( ($(window).width() / 2) - (settings.infoTextWidth / 2) ),
                'bottom': ( $(window).height() / 2 - 10 )
            });
        }

        function hideSizeWarning() {
            $sizeWarningBox.css({
                'display': 'none'
            });
        }

        initialize();

    }
}(jQuery));