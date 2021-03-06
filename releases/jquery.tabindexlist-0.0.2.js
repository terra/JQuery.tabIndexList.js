/**
 * JQuery tabIndexList - v 0.0.2 - 2013-08-05
 * Copyright (c) Mar, G. (Terra Networks Brasil); Licensed MIT
 */

(function($){
	'use strict';

	var pluginName = 'tabIndexList',
		version = '0.0.2',
		defaults = {
		/**
		 * a name can be associated to more with one element,
		 * if this parameter are flagged true only first element with this name is added to tabindex order,
		 * therwise all elements are added in tablist, will ordered according found in the html.
		 */
		onlyFirst : false
	};

	var _tabIndexList = function(itensList, options) {

		if (options) {
			$.extend(defaults, options);
		}

		var c = 0,
			l = itensList.length;

		for (var i=0; i<l; ++i) {

			var element = $("*[name='"+itensList[i]+"']");

			if (element.length > 0) {
				element[0].tabIndex = ++c;

				if (element.length > 1) {
					var le = element.length;

                    for (var j=1; j<le; ++j) {
                        element[j].tabIndex = defaults.onlyFirst ? -1 : ++c;
                    }
				}
			}
		}
    };

	$.tabIndexList = function(itensList, options) {
        _tabIndexList(itensList, options);
    };

})(jQuery);
