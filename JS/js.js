(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);

function hem() {
    $('#hem').goTo();
}

function hem2() {
    $('#hem2').goTo();
}