/**
 * jQuery link to iFrame Plugin
 *
 * A small jQuery plugin to transform a hyperlink into an iframe with src
 * attribute equivalent to the original link's href attribute.
 *
 * @version 1.1
 * @author Christopher Torgalson <manager@bedlamhotel.com>
 * @param object overrides Configuration options:
 *
 *   --  height: height, in pixels, of iframe (units not required!)
 *   --  iframeHeading: Header, if any for the iframe
 *   --  iframeContainer: Container for iframe and heading
 *   --  width: width, in pixels, of iframe (units not required!)
 *
 * @example
 *
 * // Replaces the link with the id attribute 'iframe' with and iframe showing
 * // http://www.example.com:
 * $('#iframe').linkToIframe();
 */
(function($){
  $.fn.linkToIframe = function(overrides) {
    // Set default values:
    var defaults = {
      css: {},
      height: 300,
      iframeHeading: $('<h2>iFrame</h2>'),
      iframeParent: $('<div/>'),
      width: 400
    },
    settings = $.extend({}, defaults, overrides);
    
    // Work on the collection:
    return this.each(function(){
      // Do nothing if this is not a link:
      if (this.tagName.toLowerCase() == 'a') {
        // Default vars; build iframe:
        var $current = $(this), 
            iframe = $('<iframe/>')
              .attr({
                src: $current.attr('href'),
                height: settings.height,
                width: settings.width
              })
              .css(settings.css)
              .appendTo(settings.iframeParent.append(settings.iframeHeading));
        // Replace the incoming link with the new iframe:
        $current.replaceWith(settings.iframeParent);
      }
    });
  };
})(jQuery);
/* jquery.linkToIframe.js */