(function(window, $) {

	$(document).ready(function() {
		var oDesk = null;
		var oDeskMessage = null;
		var oDeskTopNavigation = null;
		window.oDesk.init(function(result) {
			oDesk = result;
			oDeskMessage = window.oDeskMessage.init();
			oDeskTopNavigation = window.oDeskTopNavigation.init();
			if (window.location.href.indexOf("https://www.odesk.com/mc/") == 0) {
				oDeskMessage.fakeMessageHandler();
		}
		});
	});
})(window, jQuery);