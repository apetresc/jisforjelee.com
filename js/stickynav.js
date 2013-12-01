var resizeFloat = function() {
    $('#sidebar-float').width($('#sidebar').width());
}

$(window).resize(resizeFloat);
$(window).ready(resizeFloat);