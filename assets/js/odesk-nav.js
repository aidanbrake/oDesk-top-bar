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

		renderNavigation: function() {
			var $nav = $('<nav/>', {"role": "navigation", "class": "oPageCentered oNavInline"}),
				$ul = $('<ul/>', {class: 'oNavTablist'}),
				$li_logo = $('<li/>', {class:'logo-container'}).append($('<a/>', {href: '#'}).append('<span/>', {class: 'logo'})),
				$li_jobs = $('<li/>', {class: 'nav-item'}).append($('<a/>', {href: '/e/jobs/', class: 'oNavTab isCurrent'}).text('Jobs')),
				$li_freelancers = $('<li/>', {class: 'nav-item'}).append($('<a/>', {href: '/e/my-contractors/hired/', class: 'oNavTab'}).text('Freelancers')),
				$li_reports = $('<li/>', {class: 'nav-item'}).append($('<a/>', {href: '/reports/company/summary/', class: 'oNavTab'}).text('Reports')),
				$li_messages = $('<li/>', {class: 'nav-item', id: 'nav-item-messages'}).append($('<a/>', {href: '/mc/', class: 'oNavTab'}).text('Messages').append($('<span/>', {class:'msg-cnt'}).text('(10)'))),
				$li_navItemFormBox = $('<li/>', {class: 'nav-item-form-box'}),
				$div_searchFormContainer = $('<div/>', {class: 'search-form-container'}),
				$form = $('<form/>', {method: 'post', action: '#'}).append(
						$('<input/>', {name: 'search-form-keyword', placeholder: 'Your jobs, freelancers, messages or someone new', id: 'search-form-keyword'})
					),
				$div_oNavContainer = $('<div/>', {class: 'oNavContainer'}),
				$div_navLinksContainer = $('<div/>', {class: 'nav-links-container'}).append(
						$('<a/>', {href: "#"}).append($(
								$('<div/>').append($('<span/>', {class: 'nav-link notification'}))
							)),
						$('<a/>', {href: "#"}).append($(
								$('<div/>').append($('<span/>', {class: 'nav-link support'}))
							))
					),
				$div_SimpleCompanySelector = $('<div/>', {class: 'oDropdown oCompanyDropdown', id: 'simpleCompanySelector'}),
				$span_oDropdownValue = 
					$('<span/>', {
									class: 'oDropdownValue', 
									title: (oDesk._firstname + " " + oDesk._lastname),
									'data-reference': oDesk._username
								}).append(
						$('<span/>', {class: 'portrait'}),
						$('<span/>', {class: 'full-name'}).text(oDesk._firstname + " " + oDesk._lastname)
					),
				$ul_oDropdownList = $('<ul/>', {class: 'oDropdownList hide'}).append(
						$('<li/>', {class: 'status online isCurrent'}).append(
								$('<span/>', {class:'mark online'}),
								$('<span/>', {class: 'status-text'}).text('Online'),
								$('<span/>', {class: 'checkmark'})
							),
						$('<li/>', {class: 'status busy'}).append(
								$('<span/>', {class:'busy mark'}),
								$('<span/>', {class: 'status-text'}).text('Busy'),
								$('<span/>', {class: 'checkmark'})
							),
						$('<li/>', {class: 'status offline'}).append(
								$('<span/>', {class:'offline mark'}),
								$('<span/>', {class: 'status-text'}).text('Offline'),
								$('<span/>', {class: 'checkmark'})
							),
						$('<li/>', {class: 'devider'}).text('Acount'),
						$('<li/>', {
									title: (oDesk._firstname + " " + oDesk._lastname)
								}).append(
									$('<a/>', {href: 'https://www.odesk.com/UserSettins/Profile', class: 'oDropdownItem isCurrent'}).append(
											$('<img/>', {
															class: 'oCompanyLogoTiny', 
															src: '/images/REL58799ecf3628ba78c08344ee6f294ad9/svg-icons/user.svg',
															alt: oDesk._firstname + " " + oDesk._lastname
														}),
											$('<span/>')
												.text(oDesk._firstname + " " + oDesk._lastname)
												.css('margin-left', '10px'),
											$('<span/>', {class: 'link-info'}).append(
													$('<span/>', {class: 'blue'}).text('Settings'),
													$('<span/>', {class: ''}).text(' - '),
													$('<span/>', {class: 'blue'}).text('Profile')
												)
										)
									),
						$('<li/>', {
									title: ('Design Agency')
								}).append(
									$('<a/>', {href: '#', class: 'oDropdownItem'}).append(
											$('<img/>', {
															class: 'oCompanyLogoTiny', 
															src: '/images/REL58799ecf3628ba78c08344ee6f294ad9/svg-icons/user.svg',
															alt: 'Design Agency'
														}),
											$('<span/>')
												.text("Design Agency")
												.css('margin-left', '10px')
										)
									),
						$('<li/>', {
									title: ('Client Company')
								}).append(
									$('<a/>', {href: '#', class: 'oDropdownItem'}).append(
											$('<img/>', {
															class: 'oCompanyLogoTiny', 
															src: '/images/REL58799ecf3628ba78c08344ee6f294ad9/svg-icons/user.svg',
															alt: 'Client Company'
														}),
											$('<span/>')
												.text("Client Company")
												.css('margin-left', '10px')
										)
									),
						$('<li/>', {class: 'oDropdownFooter unselectable'}).append(
								$('<span/>', {class: 'oNavMutedText'}).text(oDesk._username),
								$('<a/>', {class: 'oLogout', href: '/logout'}).text('Log out')
							)
					);

			$ul.append(
				$li_logo, 
				$li_jobs, 
				$li_freelancers, 
				$li_reports, 
				$li_messages,
				$li_navItemFormBox.append($div_searchFormContainer.append($form))
				);
			$div_oNavContainer.append(
					$div_navLinksContainer,
					$div_SimpleCompanySelector.append(
							$span_oDropdownValue,
							$ul_oDropdownList
						)
				);
			$nav.append($ul, $div_oNavContainer);

			if ($('header.oHeader').children().length == 0)
				$nav.appendTo($('header.oHeader'));
		},

		renderLoadingIcon: function() {
			if($('aside.oIndicatorMsg').length == 0) {
				var string = '<aside class="oIndicatorMsg">Request is taking a bit longer than expected...</aside>'
				$(string).appendTo($('body'));
			}
		},

		showLoadingIcon: function() {
			$('aside.oIndicatorMsg').show();
		},

		hideLoadingIcon: function() {
			$('aside.oIndicatorMsg').hide();
		},

		init: function() {
			addStyleInfo(this._cssFiles);

			this.removeOriginNavigation();
			
			// this._navString = "<nav role='navigation' class='oPageCentered oNavInline'>" + 
			// 				"<ul class='oNavTablist'>" + 
			// 					"<li class='logo-container'>" +
			// 						"<a href='/'><span class='logo'></span></a>" +
			// 			    	"</li>" +
			// 					"<li class='nav-item'>" +
			// 						"<a href='/e/jobs/' class='oNavTab  isCurrent'>Jobs</a>" +
			// 					"</li>" +
			// 					"<li class='nav-item'>" +
			// 						"<a href='/e/my-contractors/hired' class='oNavTab  isCurrent'>Freelancers</a>" +
			// 					"</li>" +
			// 					"<li class='nav-item'>" +
			// 						"<a href='/reports/company/summary' class='oNavTab  isCurrent'>Reports</a>" +
			// 					"</li>" +
			// 					"<li class='nav-item' id='nav-item-messages'>" +
			// 						"<a href = '/mc' class='oNavTab  isCurrent'>Messages<span class='msg-cnt'>(10)</san></a>" +
			// 					"</li>" +
			// 					"<li class='nav-item-form-box'>" +
			// 						"<div class='search-form-container'>" +
			// 							"<form method='post' action='#'>" +
			// 								"<input name='search-form-keyword' placeholder='Your jobs, freelancers, messages or someone new' id='search-form-keyword'>" +
			// 							"</form>" +
			// 						"</div>" +
			// 					"</li>" +
			// 				"</ul>" +

			// 				"<div class='oNavContainer'>" +
			// 					"<div class='nav-links-container'>" +
			// 						"<a href='#'>" +
			// 							"<div>" +
			// 								"<span class='nav-link notification'>" +
			// 								"</span>" +
			// 							"</div>" +
			// 						"</a>" +
			// 						"<a href='#'>" +
			// 							"<div>" +
			// 								"<span class='nav-link support'>" +
			// 								"</span>" +
			// 							"</div>" +
			// 						"</a>" +
			// 					"</div>" +
			// 					"<div class='oDropdown oCompanyDropdown' id='simpleCompanySelector'>" +
			// 						"<span class='oDropdownValue' title='" + 
			// 							oDesk._firstname + " " + oDesk._lastname + "' data-reference='" +
			// 							oDesk._username + "'>" +
			// 							"<span class='portrait'></span>" +
			// 							"<span class='full-name'>" +
			// 								oDesk._firstname + " " + oDesk._lastname + 
			// 							"</span>" +
			// 						"</span>" +
			// 						"<ul class='oDropdownList hide'>" +
			// 							"<li title='" + oDesk._firstname + " " + oDesk._lastname + "'>" +
			// 								"<a href='#' class='oDropdownItem isCurrent'><img class='oCompanyLogoTiny' alt='" + oDesk._firstname + " " + oDesk._lastname + "' src='/images/REL58799ecf3628ba78c08344ee6f294ad9/svg-icons/user.svg'>Aidan Brake</a>" +
			// 							"</li>" +
			// 							"<li class='oDropdownFooter unselectable'>" +
			// 								"<span class='oNavMutedText'>" + oDesk._username + "</span>" +
			// 								"<a class='oLogout' href='/logout'>Log out</a>" +
			// 							"</li>" +
			// 						"</ul>" +
			// 					"</div>" +
			// 				"</div>" +
			// 			"</nav>";
			
			// this.addNewStyleNavigation();
			this.renderNavigation();
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

				if ($('.oDropdownList').hasClass("hide")) {
					$('.oCompanyDropdown>.oDropdownValue span.portrait').removeClass("red-border");
				} else {
					$('.oCompanyDropdown>.oDropdownValue span.portrait').addClass("red-border");
				}
			});

			$(document).click(function() {
				if ( ($(event.target).parents("#simpleCompanySelector").length == 0) && ($(event.target).attr('id') != "simpleCompanySelector") ) {
					$('.oDropdownList').addClass("hide");
					$('.oCompanyDropdown>.oDropdownValue span.portrait').removeClass("red-border");
				}
			});
		}
	}

	var self = window.oDeskTopNavigation = new oDeskTopNavigation();
	var oDesk = window.oDesk;
})(window, jQuery);