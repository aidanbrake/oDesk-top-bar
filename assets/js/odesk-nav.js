(function(window, $) {
	'use strict';

	var oDeskTopNavigation = function() {
		this._curNav = null;
		this._portraitURL = "https://odesk-prod-portraits.s3.amazonaws.com/Users:shipra:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=LL7Z2IcU%2FOWFWezrv48wKrTXS8U%3D";
		this._navString = "<nav role='navigation' class='oPageCentered oNavInline'>" + 
							"<ul class='oNavTablist'>" + 
								"<li class='logo-container'>" +
									"<a href='/'><span class='logo'></span></a>" +
						    	"</li>" +
								"<li class='nav-item'>" +
									"<a href='/find-work-home/' class='oNavTab  isCurrent'>Jobs</a>" +
								"</li>" +
								"<li class='nav-item'>" +
									"<a href='/find-work-home/' class='oNavTab  isCurrent'>Freelancers</a>" +
								"</li>" +
								"<li class='nav-item'>" +
									"<a href='/find-work-home/' class='oNavTab  isCurrent'>Reports</a>" +
								"</li>" +
								"<li class='nav-item' id='nav-item-messages'>" +
									"<a class='oNavTab  isCurrent'>Messages</a>" +
								"</li>" +
								"<li class='nav-item-form-box'>" +
									"<div class='search-form-container'>" +
										"<form method='post' action='#'>" +
											"<input name='search-form-keyword' placeholder='Your jobs, freelancers, messages or someone new' id='search-form-keyword'>" +
										"</form>" +
									"</div>" +
								"</li>" +
							"</ul>" +

							"<div class='oNavContainer'>" +
								"<div class='nav-links-container'>" +
									"<a href='#'>" +
										"<span class='nav-link notification'>" +
										"</span>" +
									"</a>" +
									"<a href='#'>" +
										"<span class='nav-link support'>" +
										"</span>" +
									"</a>" +
								"</div>" +
								"<div class='oDropdown oCompanyDropdown' id='simpleCompanySelector'>" +
									"<span class='oDropdownValue' title='Aidan Brake' data-reference='da89f92c'>" +
										"<span class='portrait'></span>" +
										"<span class='full-name'>Aidan Brake</span>" +
									"</span>" +
									"<ul class='oDropdownList'>" +
										"<li title='Aidan Brake'>" +
											"<a href='#' class='oDropdownItem isCurrent'><img class='oCompanyLogoTiny' alt='Aidan Brake' src='/images/REL58799ecf3628ba78c08344ee6f294ad9/svg-icons/user.svg'>Aidan Brake</a>" +
										"</li>" +
										"<li class='oDropdownFooter unselectable'>" +
											"<span class='oNavMutedText'>da89f92c</span>" +
											"<a class='oLogout' href='/logout'>Log out</a>" +
										"</li>" +
									"</ul>" +
								"</div>" +
							"</div>" +
						"</nav>";
		this._cssFiles = ["assets/css/top-nav.css"];
	}

	oDeskTopNavigation.prototype = {
		removeOriginNavigation: function() {
			if($('header.oHeader').children().length > 0)
				$('header.oHeader').children().remove();
		},

		addNewStyleNavigation: function() {
			if ($('header.oHeader').children().length == 0)
				$(this._navString).appendTo($('header.oHeader'));
		},

		init: function() {
			addStyleInfo(this._cssFiles);
			this.removeOriginNavigation();
			this.addNewStyleNavigation();
		}
	}

	var self = window.oDeskTopNavigation = new oDeskTopNavigation();
})(window, jQuery);