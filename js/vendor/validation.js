$(document).ready(function() {
	
	jQuery.validator.addMethod("continenCountrytName", function(value, element) {
		  return /^[A-Za-z][A-Za-z\(\)\'\s]{3,40}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("continentRegionCountryCode", function(value, element) {
		  return /^[0-9]{2}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("regionName", function(value, element) {
		return /^[a-zA-Z -]{2,30}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("stringCountryCode", function(value, element) {
		  return /^[0-9]{8}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("positionId", function(value, element) {
		  return value.includes("PS");
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("positiontitle", function(value, element) {
		  return /^[a-zA-Z]([a-zA-Z\&\(\)\s-,]){5,79}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("scale", function(value, element) {
		return /^[a-zA-Z][a-zA-Z\s]{1,30}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("scaleDescription", function(value, element) {
		return /^[A-Za-z0-9]([\s\!\@\#\$\%\^\&\*\(\)\?\:\"\'\<\>\-\_\+\=\a-zA-Z0-9]){1,500}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("catergoryType", function(value, element) {
		return /^[a-zA-Z]{1,10}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeType", function(value, element) {
		return /^[a-zA-Z][a-zA-Z\s]{3,10}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("circleName", function(value, element) {
		  return /(?=^.{3,30}$)^[A-Za-z][A-za-z\s]+$/.test( value );
			}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("circleCode", function(value, element) {
		return /^[0-9]{1,5}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("JoinCadreType", function(value, element) {
		  return /(?=^.{3,30}$)^[A-Za-z][A-za-z\s]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeName", function(value, element) {
		  return /(?=^.{2,50}$)^[A-Za-z][a-zA-Z\s\']+$/.test( value );
		}, 'Please enter a valid value.');
	
	 jQuery.validator.addMethod("employeePfHrmsIdAndAdsId", function(value, element) {
    return /^[A-Za-z0-9]{6,10}$/.test( value );
  }, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeTelephone", function(value, element) {
		  return /^[0-9]{11}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeIpTelephone", function(value, element) {
		  return /^[0-9]{8}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeIntercom", function(value, element) {
		  return /^[0-9]{6}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeEmail", function(value, element) {
		return /(?=^.{15,50}$)^([A-Za-z])(([A-Za-z0-9\.\_\-\&\@\#\$\%\^\&\*\(\)\!])+[@]([a-zA-Z])+([\.]([a-z])+)+)$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeAddress", function(value, element) {
		  return /(?=^.{20,80}$)^[A-Za-z][A-Za-z0-9\s\'\,\&\/\-]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeControllingOffice", function(value, element) {
		  return /(?=^.{3,50}$)^[A-Za-z][A-za-z0-9\&\-\(\)\{\}\[\]]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeRemark", function(value, element) {
		  return /(?=^.{1,80}$)^[A-Za-z][A-za-z0-9\s\!\@\#\$\%\^\&\*\(\)\_\-\/\'\.\,]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("employeeOtherQualification", function(value, element) {
		  return /^[A-Za-z\&\s\/\,]{0,50}$/.test( value );
		}, 'Please enter a valid value.');
		
	
	jQuery.validator.addMethod("branchName", function(value, element) {
		  return /(?=^.{5,60}$)^[A-Za-z][a-zA-Z\s\(\)\']+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("branchProfile", function(value, element) {
		  return /(?=^.{10,500}$)^[A-Za-z][A-za-z0-9\s\~\!\@\#\$\%\^\&\*\(\)\_\-\=\+\{\}\[\]\;\:\'\"\,\.\/\<\>\?\|]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("branchCode", function(value, element) {
		return /^[0-9]{5}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("branchSolId", function(value, element) {
		return /^[0-9]{2,3}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("branchAggregatingString", function(value, element) {
		return /^[0-9]{8}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("branchNoOfEmployee", function(value, element) {
		return /^[0-9]{1,1000}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("OfficeType", function(value, element) {
		return /(?=^.{2,15}$)^[A-Za-z][A-za-z\s]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("oversightType", function(value, element) {
		return /^[A-Za-z][A-Za-z\&\(\)\-]{2,59}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("ratingType", function(value, element) {
		return /(?=^.{3,15}$)^[A-Za-z][A-za-z\s\&\-]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("ratingTitle", function(value, element) {
		return /(?=^.{3,30}$)^[A-Za-z][A-Za-z\s\'\(\)]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("kraNumber", function(value, element) {
		return /^[0-9]{6}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("kraTitle", function(value, element) {
		return /(?=^.{3,50}$)^[A-Za-z][A-Za-z\s\&\-]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("kraDescription", function(value, element) {
  return /(?=^.{25,1000}$)^[A-Za-z0-9][A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\{\}\[\]\<\>\,\.\/\-\_\s]*$/.test( value );
  }, 'Please enter a valid value.');
 
	jQuery.validator.addMethod("kraUnitType", function(value, element) {
		return /(?=^.{5,50}$)^[a-zA-Z&-\s]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("kraPeriod", function(value, element) {
		return /(?=^.{3,30}$)^[A-Za-z][A-za-z\&\-\s]+$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("kraBusinessTechnicalLogic", function(value, element) {
		return /^[A-Za-z][A-za-z0-9\!\@\#\$\%\^\&\*\(\)\{\}\[\]\<\>\,\.\/\-\_\s\+\=\n\"\:]{50,3000}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("department", function(value, element) {
		return /^[A-Za-z][A-Za-z\s\&]{4,49}$/.test( value );
		}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("uniqueID", function(value, element) {
		return /^[0-9]{3,10}$/.test( value );
		}, 'Please enter a valid value.');	
		
	jQuery.validator.addMethod("rolesandresponsiblities", function(value, element) {
	return /(?=^.{5,1000}$)^[A-Za-z0-9][A-za-z0-9\s\!\@\#\$\%\^\&\*\(\)\?\:\"\'\<\>\-\_\+\=]+$/.test( value );
	}, 'Please enter a valid value.');
	
	jQuery.validator.addMethod("contributionTitle", function(value, element) {
		return /^[A-Za-z][A-Za-z0-9\&\s\.]*$/.test( value );
		}, 'Please enter a valid value.');
	jQuery.validator.addMethod("contributionDesignation", function(value, element) {
		return /^[A-Za-z][A-Za-z0-9\&\s\.]*$/.test( value );
		}, 'Please enter a valid value.');
	jQuery.validator.addMethod("contributionName", function(value, element) {
		return /^[A-Za-z][A-Za-z\&\s\.]*$/.test( value );
		}, 'Please enter a valid value.');
		
	jQuery.validator.addMethod("rolesandresponsiblitiesSub", function(value, element) {
		return /(?=^.{0,1000}$)^[A-Za-z0-9]*[A-za-z0-9\s\!\@\#\$\%\^\&\*\(\)\?\:\"\'\<\>\-\_\+\=]*$/.test( value );
		}, 'Please enter a valid value.');
		
	jQuery.validator.addMethod("currencyCode", function(value, element) {
		  return /^[A-Z]{3}$/.test( value );
		}, 'Please enter a valid value.');
		
	jQuery.validator.addMethod("employeeTelephoneAreaCode", function(value, element) {
    return /^[0-9]{2,3}$/.test( value );
  }, 'Please enter a valid value.');
  
  jQuery.validator.addMethod("employeeTelephoneSubscriberCode", function(value, element) {
    return /^[0-9]{3}$/.test( value );
  }, 'Please enter a valid value.');
  
  jQuery.validator.addMethod("employeeTelephoneNumber", function(value, element) {
    return /^[0-9]{11}$/.test( value );
  }, 'Please enter a valid value.');
  
 jQuery.validator.addMethod("employeeMobileAreaCode", function(value, element) {
    return /^[0-9]{3}$/.test( value );
  }, 'Please enter a valid value.');
  
 jQuery.validator.addMethod("employeeMobileNumber", function(value, element) {
    return /^[0-9]{11,13}$/.test( value );
  }, 'Please enter a valid value.');
  
  jQuery.validator.addMethod("feedbackDescription", function(value, element) {
		return /^[A-Za-z][A-za-z0-9\s\!\@\#\$\%\^\&\*\(\)\?\:\"\'\<\>\-\_\+\=]*$/.test( value );
		}, 'Please enter a valid value.');
		
  jQuery.validator.addMethod("foid", function(value, element) {
		  return /^[A-Z][A-Z0-9\_]{11}$/.test( value );
		}, 'Please enter a valid value.');
		
	jQuery.validator.addMethod("maxNumberOfEmployees", function(value, element) {
		  return /^([1-9][0-9]{0,2}|1000)$/.test( value );
		}, 'Please enter a valid value.');
	
});