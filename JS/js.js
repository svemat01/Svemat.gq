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

function svemat() {
    $('#svemat').goTo();
}

function photohome() {
    $('#photohome').goTo();
}

function viggeyt() {
    $('#viggeyt').goTo();
}
$('body').scrollspy({ target: '#navbar' })