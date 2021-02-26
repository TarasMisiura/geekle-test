$(document).ready(function() {
    $('.header-burger').on('click', function(event){
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});