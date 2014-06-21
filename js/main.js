
jQuery(document).ready(function() {


    $("#header").load("header.html");

    if (document.location.hash.substring(1).length === 0) {
        $("#content").load('content-books.html');
    } else {
        $("#content").load('content-' + document.location.hash.substring(1) + '.html');
    }
});

