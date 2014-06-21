jQuery(document).ready(function() {

    $('#nav-menu').delegate('li', 'click', function() {
        var curID = $(this).attr('id');
        console.log(curID);
        
        if ($('#content>div:first').attr('id') !== curID)
        {
            $("#content").load($(this).attr('id') + ".html");
        }
    });
});