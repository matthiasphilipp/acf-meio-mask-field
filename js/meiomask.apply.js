jQuery(function($) {
	/*
	*  acf/setup_fields
	*
	*  This event is triggered when ACF adds any new elements to the DOM. 
	*
	*  @type	function
	*  @since	1.0.0
	*  @date	01/01/12
	*
	*  @param	event		e: an event object. This can be ignored
	*  @param	Element		postbox: An element which contains the new HTML
	*
	*  @return	N/A
	*/
	$(document).live('acf/setup_fields', function(e, postbox){
		
		$(postbox).find('.meio_mask').each(function(){
			
			datamask = $(this).attr('data-mask');
		datatype = $(this).attr('data-type');
		
		if (typeof datamask !== "undefined")
			$(this).setMask({mask: datamask});
		if (typeof datatype !== "undefined" && typeof datamask !== "undefined")
			$(this).setMask({mask: datamask,type: datatype});

			
		});
	
	});

});