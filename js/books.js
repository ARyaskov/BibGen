
function uiInit()
{
    $('#authors_number').val('_1author');
    $('#book_type').val('none');
    $('#publication_location :selected').val('none');

    $(function() {
        $("#people_accordion").accordion(
                {
                    collapsible: true
                }
        );
    });

    $(function() {
        $("#edition_modifications_accordion").accordion(
                {
                    active: false,
                    collapsible: true
                });
    });

    $(function() {
        $("#edition_aux_accordion").accordion(
                {active: false,
                    collapsible: true,
                    header: "h5"

                });
    });
    
    buildTooltips();
	
	
	var clip = new ZeroClipboard( document.getElementById("copy-to-clipboard-button") );
	 clip.on( 'ready', function(event) {
        clip.on( 'copy', function(event) {
          event.clipboardData.setData('text/plain',  document.getElementById("resultbox").innerHTML);
        } );
		clip.on( 'aftercopy', function(event) {
         
        } );
      } );

}


jQuery(document).ready(function() {

    uiInit();

    (function() {
        var newBib = buildBib();

        jQuery('#resultbox').text(newBib);
        setTimeout(arguments.callee, 500);
    })();

});
