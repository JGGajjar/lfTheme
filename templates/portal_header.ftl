<div class="row">
	
	<header id="banner" role="banner" class="header-sec">
	<#assign foDirectoryURL = theme_display.getURLPortal() + '/fo-directory'/>
		<div class="container">
			
			<div class="row">
			
				<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
				
					<div id="heading">
					
						<h1 class="header-sec__title">
						
							<a class="${logo_css_class}" href="${site_default_url}" title="<@liferay.language_format arguments="${site_name}" key="go-to-x" />">
							
								<img alt="${logo_description}" class="hidden-xs" src="${images_folder}/portal-logo.jpg" />

								<img alt="${logo_description}" class="visible-xs" src="${images_folder}/portal-logo-mobile.png" />
								
							</a>
				
						</h1>
						
					</div>
					
				</div>
				
				<div class="col-md-5">
					
					<div class="header-sec__links hidden-xs hidden-sm hidden-md">
						
						<nav class="nav navbar-default">
							
							<ul>
								
								<li><a href="#">FO Posting</a></li>
								<li><a href="${foDirectoryURL}">FO Directory</a></li>
								<li><a href="#">FO Websites</a></li>
								<li><a href="#">Holiday Calendar</a></li>
							
							</ul>
						
						</nav>
						
					</div>
					
				</div>
				
				<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 notification-section">
					<div class="mobile-icon pull-right text-right visible-xs visible-sm visible-md">
                        <ul class="tab-navigation list-style-none pull-right">
							<li class="active ham"><a href="#" id="hamburgerNav" class="hamburger" data-target=".primary-links"><span class="kaicon-mobile-menu main-icon"></span><span class="kaicon-close-big close-icon"></span></a></li>
						</ul>
                    </div>
					<div class="user-noti-section pull-right">
						<#assign VOID = freeMarkerPortletPreferences.setValue("portletSetupPortletDecoratorId", "decorate") />
							<@liferay_portlet["runtime"]
								defaultPreferences="${freeMarkerPortletPreferences}"
								portletProviderAction=portletProviderAction.VIEW
								portletName="com_pm_portlet_UserNotificationPortlet" />
								${freeMarkerPortletPreferences.reset()}
					</div>
					
				</div>
				
			</div>
			
		</div>
	
	</header>
	
</div>