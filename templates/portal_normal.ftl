<!DOCTYPE html>

<#include init />

<html class="${root_css_class} ${custom_html_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>${the_title} - ${company_name}</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />

	<@liferay_util["include"] page=top_head_include />
</head>

<!-- Hide docbar for other users -->
<#assign hide_docbar_class = "" />
<#if !permissionChecker.isOmniadmin()>
	<#assign hide_docbar_class = "hide_docbar" />
</#if>
<body class="${css_class} ${hide_docbar_class}">

<@liferay_ui["quick-access"] contentId="#main-content" />

<@liferay_util["include"] page=body_top_include />

<@liferay.control_menu />

<div class="container-fluid" id="wrapper">

	<!-- Header Start -->
	
	<#include "${full_templates_path}/portal_header.ftl" />
		
	<!-- Header End -->
	
	<!-- Main Navigation Start -->
	
	<#if has_navigation && is_setup_complete>
				
		<#include "${full_templates_path}/custom_navigation.ftl" />
	
	</#if>
	
	<!-- Main Navigation End -->

	<section id="content">
		<h1 class="hide-accessible">${the_title}</h1>

		<#if selectable>
			<@liferay_util["include"] page=content_include />
		<#else>
			${portletDisplay.recycle()}

			${portletDisplay.setTitle(the_title)}

			<@liferay_theme["wrap-portlet"] page="portlet.ftl">
				<@liferay_util["include"] page=content_include />
			</@>
		</#if>
	</section>
		
	<!-- Header Start -->
	
	<#include "${full_templates_path}/portal_footer.ftl" />
		
	<!-- Header End -->
</div>

<@liferay_util["include"] page=body_bottom_include />

<@liferay_util["include"] page=bottom_include />

<!-- inject:js -->
<script type="text/javascript" src="${javascript_folder}/vendor/scripts.min.js?t=${theme_timestamp}"></script>
<!-- endinject -->

</body>

</html>