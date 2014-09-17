(function(window, $) {
	'use strict';

	var oDesk = function() {
		this._host = "https://www.odesk.com/";
		this._scriptFiles = ["assets/js/jquery-1.10.2.min.js"];
		this._username = "";
		this._firstname = "";
		this._lastname = "";
		this._contacts = {};
		this._profile = {};
		this._photoURL = $('div#simpleCompanySelector ul.oDropdownList li a.isCurrent img.oCompanyLogoTiny').attr('src') || "https://www.odesk.com/images/REL58799ecf3628ba78c08344ee6f294ad9/svg-icons/user.svg";
		this._contactsURL = "https://www.odesk.com/api/ab/v1/contacts.json?order=freq&page=0%3B500";
	}

	oDesk.prototype = {
		init: function(callback) {
			addScripts(this._scriptFiles);
			this.pullData();
			$.getJSON(self._contactsURL, function(data) {
				self._contacts[self._profile.username] = self._profile;
				self._firstname = data.auth_user.first_name;
				self._lastname = data.auth_user.last_name;
				var contacts = data.contacts.contact;
				for ( var i = 0; i < contacts.length; i++ ) {
					self._contacts[contacts[i].username] = contacts[i];
				}
				callback(self);
			});
		},

		/**
		 *	Pulling oDesk data from oDesk
		 */
		pullData: function() {
			this._username = this.getUsername();
			this._profile = {
				username: this._username,
				portrait_url: this._photoURL
			};
		},


		/**
		 * Getting oDesk username from page
		 */
		getUsername: function() {
			return $('div#simpleCompanySelector ul.oDropdownList li.oDropdownFooter.unselectable span.oNavMutedText').text();
		},
	}

	var self = window.oDesk = new oDesk();
})(window, jQuery);