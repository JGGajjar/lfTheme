AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {

		$(document).ready(function() {

			gOb={};

			/* Main Navigation bheaviour function */
			window.updateNaivgation = function() {
			//function updateNaivgation(){
				if($('html').hasClass('view-desktop')){
					
					$("#navigation .dropdown").unbind( "click" );
	
					$("#navigation .lfr-nav-item").hover(function () {
							$(this).addClass("hover open");
						},
						function () {
							$(this).removeClass("hover open");
						}
					);
				} else {
					$("#navigation .dropdown").unbind( "click" );
	
					$("#navigation .dropdown").on('click', function (e) {
							currentNode = $(this);
							if(e.target.className == "icon-caret-down" || e.target.className == "icon-caret-right"){
								e.preventDefault();
								e.stopPropagation();
							}
							
							if(e.target.nodeName.toLowerCase() != "span" && e.target.nodeName.toLowerCase() != "a"){
								if($(this).hasClass('open')){
									$(this).parent().find('.dropdown').removeClass("hover open");
								} else {
									$(this).parent().find('.dropdown').removeClass("hover open");
									$(this).addClass("hover open");
								}
							}
								
					});
				}
			};

			window.updateNaivgation();

			$(window).resize(function() {
				window.updateNaivgation();
			});

			/* Main Navigation bheaviour function End */

			/* responsive hamburger and search menu navigation - start */
			window.mobileNaivgation = function() {

				$('#hamburgerNav, #searchNav').unbind( "click" );

				$('#hamburgerNav, #searchNav').on('click', function(e){
					e.stopPropagation();
					e.preventDefault();
					currentNode = $(this); 
					navId = currentNode.attr('data-target');
					
					if(currentNode.attr('id') == "searchNav"){
						closeItem = "#hamburgerNav";
					} else {
						closeItem = "#searchNav";
					}
					closeOtherMenu(closeItem);
					//closeMainNav();
					
					if ($(navId).hasClass('menu-active')) {
						// close menu
						currentNode.removeClass('menu-active');
						currentNode.closest('li').removeClass('menu-active');
						$(navId).removeClass('menu-active');
					} else {
						// opne menu
						currentNode.addClass('menu-active');
						currentNode.closest('li').addClass('menu-active');
						$(navId).addClass('menu-active');
						
						/* close menu on outside click - start */
						$(window).click(function(e) {
							currentWindowNode = $(e.target);
							if(currentWindowNode.closest('.menu-active').length == false && !currentWindowNode.hasClass('menu-active')){
								closeOtherMenu('#hamburgerNav');
								closeOtherMenu('#searchNav');
							}
						});
						/* close menu on outside click - end */
					}
				});
			};
			
			function closeOtherMenu(closeItem){
				if($(closeItem).length > 0){

					closeItemNode = $(closeItem); 
					closeItemNavId = closeItemNode.attr('data-target');
					closeItemNode.removeClass('menu-active');
					closeItemNode.closest('li').removeClass('menu-active');

					if($(closeItemNavId).length > 0){

						$(closeItemNavId).removeClass('menu-active');

					}
				}

				// close user notification dropdown
				$('.custom-user.open .dropdown-toggle').dropdown('toggle');

			}

			// close main menu on user dropdown open
			$('.custom-user').on('show.bs.dropdown', function () {
				closeOtherMenu('#hamburgerNav');
			})

			window.mobileNaivgation();

			/* responsive hamburger and search menu navigation - end */
		
			/* carousel-sec start */
			var bannerOne = '.carousel-sec-one .swiper-container';
			if($(bannerOne).length > 0) {				
				var paginationOne = '.carousel-sec-one .carousel__pagination-bullets';
				var swiperOne = new Swiper(bannerOne, {
					pagination: paginationOne,
					paginationClickable: true,
					mousewheelControl: false,
					loop: true,
					speed: 800,
					spaceBetween: 0,
					autoplay: true,
					calculateHeight: false,
					autoplayDisableOnInteraction: false,
					autoHeight: true //enable auto height					
				});
				
				/* stop - start autoplay on hover */
				$(bannerOne).on('mouseenter', function(e){
					swiperOne.stopAutoplay();
				})
				$(bannerOne).on('mouseleave', function(e){
					swiperOne.startAutoplay();
				})
			}
			/* carousel-sec end */

			/* carousel-sec-two start */
			var bannerTow = '.carousel-sec-two .swiper-container';
			if($(bannerTow).length > 0) {				
				var swiperTwo = new Swiper(bannerTow, {
					mousewheelControl: false,
					loop: true,
					speed: 800,
					spaceBetween: 0,
					autoplay: true,
					calculateHeight: false,
					autoplayDisableOnInteraction: false,
					autoHeight: true, //enable auto height
					nextButton: bannerTow + ' .carousel__button-next',
					prevButton: bannerTow + ' .carousel__button-prev',
				});
				
				/* stop - start autoplay on hover */
				$(bannerTow).on('mouseenter', function(e){
					swiperTwo.stopAutoplay();
				})
				$(bannerTow).on('mouseleave', function(e){
					swiperTwo.startAutoplay();
				})
			}
			/* carousel-sec-two end */

			/* carousel-sec-three start */
			var bannerThree = '.carousel-sec-three .swiper-container';
			if($(bannerThree).length > 0) {				
				var swiperThree = new Swiper(bannerThree, {
					mousewheelControl: false,
					loop: false,
					speed: 800,
					spaceBetween: 0,
					autoplay: false,
					calculateHeight: false,
					autoplayDisableOnInteraction: false,
					autoHeight: true, //enable auto height
					nextButton: '.carousel-sec-three .carousel__button-next',
					prevButton: '.carousel-sec-three .carousel__button-prev',
				});
				
				/* stop - start autoplay on hover */
				$(bannerThree).on('mouseenter', function(e){
					swiperThree.stopAutoplay();
				})
				$(bannerThree).on('mouseleave', function(e){
					swiperThree.startAutoplay();
				})
			}
			/* carousel-sec-three end */

			/* birthday__users dynamic show based on available width - start */
			window.birthdayUsers = function(){
				if($(".birthday__users img").length > 0) {
					
					$(".birthday__users li").css({
						visibility : 'hidden',
						width : 0,
						height : 0
					});

					$(".birthday__users li").hide( 50, function() {
						var outerWidth = $(".birthday__users ul").width();
						var objWidth = $(".birthday__users ul li:first-child img").outerWidth(true);
						var adjustObj = Math.floor(outerWidth / objWidth);

						//console.log('outerWidth... ' + outerWidth);
						//console.log('objWidth... ' + objWidth);
						//console.log('adjustObj... ' + adjustObj);
						
						for (i = 0; i < adjustObj; i++) { 
							//text += cars[i] + "<br>";
							$($(".birthday__users li")[i]).show();
						}

						$(".birthday__users li").css({
							visibility : 'visible',
							width : '',
							height : ''
						});
						
					});					

					/*
					var outer = $(".birthday__users ul");
					outer.find("img").show();
					var objHeight = outer.find("img:first-child").outerHeight(true);

					if (outer.find('.last-tab').length <= 0) {
						outer.append('<li class="last-tab"></li>');
					};

					var outerHeight = outer.outerHeight();

					function autocollapseInner(){
						if (outerHeight > objHeight) {
							var children = outer.children('img:visible');
							var count = children.size();
							$(children[count - 1]).hide();

							outerHeight = outer.outerHeight();

							if (outerHeight > objHeight) {
								autocollapseInner();
							}
						}
					}

					autocollapseInner();
					*/

				};
			};
			
			window.birthdayUsers();			

			$(window).resize(function() {
				window.birthdayUsers();
			});

			/* birthday__users dynamic show based on available width - end */

			/* datepicker start */
			if ($('.datepicker').length > 0) {
				
				gOb.datePicker = $('.datepicker').datepicker({
					autoclose: true,
					format : 'dd/mm/yyyy',
				});
				
			}
			/* datepicker End */

			/* Custom Select box start */
			if ($('.selectpicker').length > 0) {
				gOb.selectPicker = $('.selectpicker').selectpicker();
			}
			/* Custom Select box end */
			
			/* Attach the `fileselect` event to all file inputs on the page */
			$(document).on('change', ':file', function() {
				var input = $(this),
			    numFiles = input.get(0).files ? input.get(0).files.length : 1,
			    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			    input.trigger('fileselect', [numFiles, label]);
			});
			/* Attach the `fileselect` event to all file inputs on the page End */

			/* Clone row - start */
			$(document).on("click", ".add-row", function(e) {
				e.preventDefault();
				if($(this).hasClass('disable')) return false;
				currentNode = $(this);
				currentRow = currentNode.parents('[data-clone="row"]');
				parentWrapper = currentNode.parents('[data-clone-wrapper="wrapper"]');
				cloneLimit = parseInt(parentWrapper.attr('data-clone-limit'));
				totalRow = parentWrapper.find('[data-clone="row"]').length;

				if(totalRow < cloneLimit){
					newRow = currentRow.clone();
					newRow.find('input').val('');
					newRow.find('textarea').val('');
					newRow.find('select').val('');
					newRow.find('.datepicker').each(function(index, element) {
						$(this).datepicker({
							autoclose: true,
							format : 'dd/mm/yyyy',
						});
					});
					currentRow.after(newRow);
				};

				if(cloneLimit != ""){
					updateIcon(parentWrapper);
				}

			});

			$(document).on("click", ".remove-row", function(e) {
				e.preventDefault();
				currentNode = $(this);
				currentRow = currentNode.parents('[data-clone="row"]');
				parentWrapper = currentNode.parents('[data-clone-wrapper="wrapper"]');
				cloneLimit = parseInt(parentWrapper.attr('data-clone-limit'));
				currentRow.remove();

				if(cloneLimit != ""){
					updateIcon(parentWrapper);
				}
			});

			function updateIcon(parentWrapper){
				totalRow = parentWrapper.find('[data-clone="row"]').length;
				cloneLimit = parseInt(parentWrapper.attr('data-clone-limit'));
				parentWrapper.removeClass('hide-add');
				parentWrapper.find('.add-row').removeClass('disable');
				if(totalRow == cloneLimit){
					parentWrapper.addClass('hide-add');
					parentWrapper.find('.add-row').addClass('disable');
				}
			}

			/* Clone row - end */

			/* Custom Scrollbar start */
			if ($('.custom-m-scrollbar').length > 0) {
				gOb.CustomScrollbar = $('.custom-m-scrollbar').mCustomScrollbar({
					theme:"light",
					autoHideScrollbar:false,
					alwaysShowScrollbar:0,
					mouseWheel:{
						enable:true
					}
				});
			}
			/* Custom Scrollbar end */

				var showPopover = function (e) {
					$('.popoverData').not(this).popover('hide');
					$(this).popover('show');
				};
				
				var $poped = $('.popoverData');
				
				var hidePopover = function (e) {
					//$(this).popover('hide');
					
					currentWindowNode = $(e.target);
					if(!currentWindowNode.hasClass('.popover') && currentWindowNode.closest('.popover').length == false && !currentWindowNode.hasClass('.popoverData') && currentWindowNode.closest('.popoverData').length == false){
						$poped.popover('hide');
						//$(this).popover('hide');
					} else {
						 e.preventDefault();
						 e.stopPropagation();
						 e.stopImmediatePropagation();
						 return false;
					}
				};
				
				$(".popoverData").popover({
					html : true,
					container:'body #wrapper',
					delay: {show: 50, hide: 400},
					//trigger: 'click',
					trigger: 'manual',
					content: function() {
						var cotentid = $(this).attr('data-cotentid');
						return $('.popoverContent'+cotentid).html();
					}
				}).click(showPopover);
				//}).click(showPopover).hover(showPopover, hidePopover);
				
				$(window).hover(function(e) {
					hidePopover(e);
				});
				
			$( ".select-custom" ).select2({
				tags: true,
				container:'body #wrapper',
				dropdownParent: $('.myModal'),
				tokenSeparators: [',', ' ']
			});
		}); /* document ready end */
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	}
);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
	}
);

Liferay.on(
	'beforeNavigate', 
	
	/*
	Fires before navigation starts. This event passes a JSON object with 
	the path to the content being navigated to and whether to update 
	the history. Below is an example event payload:
	{ path: '/pages/page1.html', replaceHistory: false }
	*/
	
	function(event) {
//		console.log("Get ready to navigate to :- " + event.path);
	}

);

Liferay.on(
		'startNavigate', 
		
		/*
		Fires when navigation begins. Below is an example event payload:
		{ form: '<form name="form"></form>', path: '/pages/page1.html', replaceHistory: false }
		*/
		
		function(event) {
//			console.log("Get ready to startNavigate to :- " + event.path);
		}

);

Liferay.on(
		'endNavigate', 
		
		/*
		Fired after the content has been retrieved and inserted onto the page.
		This event passes the following JSON object:
		{ form: '<form name="form"></form>', path: '/pages/page1.html' }
		*/
		
		function(event) {
//			console.log("Get ready to endNavigate to :- " + event.path);
			
			window.updateView();
			window.updateNaivgation();
			window.mobileNaivgation();
			window.birthdayUsers();			
			
		}

);