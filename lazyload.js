/**************************************************
 * Lazy Load
 *
 * Load assets when you need them.
 *
 * Instead of placing the image's URL in the src
 * attribute, place it within a data attribute
 * called data-url.
 *
 * Then give all the elements you need to lazy
 * load a class called "lazyload".
 *
 * Call the lazyload method to load your assets.
 *
 * @author Joel Regus
 **************************************************/

var lazyLoad = (function() {
    "use strict";

    var config = {
            attribute: "data-url",
            query: ".lazyload"
        };

    function lazyLoad() {
        var elements = document.querySelectorAll(config.query),
            elem;

        for (var i = 0, elmLen = elements.length; i < elmLen; i++) {
            elem = elements[i];
            elem.src = elem.getAttribute(config.attribute);
        }
    }

    return lazyLoad;

}());
