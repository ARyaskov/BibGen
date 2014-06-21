function uiInit()
{
    
    $('#publication_location :selected').val('none');
    //$('#modification_synonim :selected').val('version');

    $(function() {
        $("#people_accordion").accordion(
                {
                    heightStyle: 'content'
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
    
    $(function() {
        $("#edition_notes_accordion").accordion(
                {active: false,
                    collapsible: true,
                    header: "h5"

                });
    });
    
    
    buildTooltips();
}



jQuery(document).ready(function() {

    uiInit();

    (function() {
        var newBib = buildBib();

        jQuery('#resultbox').text(newBib);
        setTimeout(arguments.callee, 500);
    })();

});