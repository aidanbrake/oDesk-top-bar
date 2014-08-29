(function(window, $) {
	'use strict';

	var oDeskTopNavigation = function() {
		this._curNav = null;
		this._portraitURL = "https://odesk-prod-portraits.s3.amazonaws.com/Users:shipra:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=LL7Z2IcU%2FOWFWezrv48wKrTXS8U%3D";
		this._navString = "";
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
			var oDesk = window.oDesk;
			this._navString = "<nav role='navigation' class='oPageCentered oNavInline'>" + 
							"<ul class='oNavTablist'>" + 
								"<li class='logo-container'>" +
									"<a href='/'><span class='logo'></span></a>" +
						    	"</li>" +
								"<li class='nav-item'>" +
									"<a href='/e/jobs/' class='oNavTab  isCurrent'>Jobs</a>" +
								"</li>" +
								"<li class='nav-item'>" +
									"<a href='/e/my-contractors/hired' class='oNavTab  isCurrent'>Freelancers</a>" +
								"</li>" +
								"<li class='nav-item'>" +
									"<a href='/reports/company/summary' class='oNavTab  isCurrent'>Reports</a>" +
								"</li>" +
								"<li class='nav-item' id='nav-item-messages'>" +
									"<a href = '/mc' class='oNavTab  isCurrent'>Messages<span class='msg-cnt'>(10)</san></a>" +
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
										"<div>" +
											"<span class='nav-link notification'>" +
											"</span>" +
										"</div>" +
									"</a>" +
									"<a href='#'>" +
										"<div>" +
											"<span class='nav-link support'>" +
											"</span>" +
										"</div>" +
									"</a>" +
								"</div>" +
								"<div class='oDropdown oCompanyDropdown' id='simpleCompanySelector'>" +
									"<span class='oDropdownValue' title='" + 
										oDesk._firstname + " " + oDesk._lastname + "' data-reference='" +
										oDesk._username + "'>" +
										"<span class='portrait'></span>" +
										"<span class='full-name'>" +
											oDesk._firstname + " " + oDesk._lastname + 
										"</span>" +
									"</span>" +
									"<ul class='oDropdownList hide'>" +
										"<li title='" + oDesk._firstname + " " + oDesk._lastname + "'>" +
											"<a href='#' class='oDropdownItem isCurrent'><img class='oCompanyLogoTiny' alt='" + oDesk._firstname + " " + oDesk._lastname + "' src='/images/REL58799ecf3628ba78c08344ee6f294ad9/svg-icons/user.svg'>Aidan Brake</a>" +
										"</li>" +
										"<li class='oDropdownFooter unselectable'>" +
											"<span class='oNavMutedText'>" + oDesk._username + "</span>" +
											"<a class='oLogout' href='/logout'>Log out</a>" +
										"</li>" +
									"</ul>" +
								"</div>" +
							"</div>" +
						"</nav>";
			this.removeOriginNavigation();
			this.addNewStyleNavigation();
			$('.oCompanyDropdown>.oDropdownValue span.portrait').css({
				"background": "url(" + oDesk._photoURL + ") no-repeat center center",
				"background-size": "100% 100%"
			});
			this.initEvents();
		},

		initEvents: function() {
			$('div#simpleCompanySelector').click(function() {
				event.preventDefault();
				$('.oDropdownList').toggleClass("hide");
			});

			$(document).click(function() {
				if ( ($(event.target).parents("#simpleCompanySelector").length == 0) && ($(event.target).attr('id') != "simpleCompanySelector") )
					$('.oDropdownList').addClass("hide");
			});
		}
	}

	var self = window.oDeskTopNavigation = new oDeskTopNavigation();
})(window, jQuery);