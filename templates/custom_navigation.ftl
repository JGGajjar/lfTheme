<#assign VOID = freeMarkerPortletPreferences.setValue("portletSetupPortletDecoratorId", "borderless")>

	<div class="row hidden-xs hidden-sm hidden-md primary-links">
		
		<#if has_navigation && is_setup_complete>
		
			<nav class="${nav_css_class} navigation-sec clearfix" id="navigation" role="navigation">
			
				<div class="container">
					
					<div class="row">
						
						<div class="col-md-12">
						
						    <@liferay.navigation_menu default_preferences="${freeMarkerPortletPreferences}" />
							    
						</div>
			
					</div>
				
				</div>
				
			</nav>

			<div class="header-sec__links visible-xs visible-sm visible-md">
						
				<nav class="nav navbar-default">
					
					<ul class="list-style-none">
						
						<li><a href="#">FO Posting</a></li>
						<li><a href="#">FO Directory</a></li>
						<li><a href="#">FO Websites</a></li>
						<li><a href="#">Holiday Calendar</a></li>
					
					</ul>
				
				</nav>
				
			</div>
		
		</#if>
		
	</div>
