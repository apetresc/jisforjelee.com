var resizeFloat = function() {
    $('#sidebar-float').width($('#sidebar').width());
    if (window.innerWidth <= 640) {
        $('#sidebar-float').addClass('floating-fixed-width-disabled');
    } else {
        $('#sidebar-float').removeClass('floating-fixed-width-disabled');
    }
}

$(window).resize(resizeFloat);
$(window).ready(resizeFloat);