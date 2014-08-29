(function(window, $) {

	$(document).ready(function() {
		var oDeskTopNavigation = window.oDeskTopNavigation.init();
		var oDeskMessage = window.oDeskMessage.init();

		if (window.location.href.indexOf("https://www.odesk.com/mc/") == 0) {
			oDeskMessage.fakeMessageHandler();
		}
		else {
			oDeskMessage.bindToNavigation(".oNavTablist>li.nav-item#nav-item-messages");
		}
	});
})(window, jQuery);