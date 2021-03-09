$(document).ready(function() {
    $('header > section > ul > li').click(function(){
        $(this).find('.tendina').show();
    });

    $('header > section > ul > li').mouseleave(function(){
        $(this).find('.tendina').hide();
    });

});






