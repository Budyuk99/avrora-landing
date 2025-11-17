$(document).ready(function(){
    // Инициализация Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        smartSpeed: 1000,
        navText: [
            '<img src="/assets/images/left_arrow.svg" alt="prev" class="custom-arrow">',
            '<img src="/assets/images/right_arrow.svg" alt="next" class="custom-arrow">'
        ]
    });

    // SVG линии для owl-dots
    function updateDots() {
        $('.owl-dot').each(function(){
            if($(this).hasClass('active')){
                $(this).html('<img src="/assets/images/line_active.svg" alt="active-line">');
            } else {
                $(this).html('<img src="/assets/images/line.svg" alt="line">');
            }
        });
    }
    updateDots();
    $(".owl-carousel").on('changed.owl.carousel', updateDots);

    // Обновление шапки при скролле
    function updateHeader() {
        if ($(window).scrollTop() === 0) {
            // Страница в самом верху
            $('#header').removeClass('sticky');
            $('.search img').attr('src', '/assets/images/search.svg');
            $('.icons_user img').attr('src', '/assets/images/user.svg');
            $('.icons_heart img').attr('src', '/assets/images/heart.svg');
            $('.icons_cart img').attr('src', '/assets/images/shopping-bag.svg');
            $('.icons_global img').attr('src', '/assets/images/global.svg');
        } else {
            // Любая прокрутка — делаем шапку sticky
            $('#header').addClass('sticky');
            $('.search img').attr('src', '/assets/images/search_sticky.svg');
            $('.icons_user img').attr('src', '/assets/images/user_sticky.svg');
            $('.icons_heart img').attr('src', '/assets/images/heart_sticky.svg');
            $('.icons_cart img').attr('src', '/assets/images/shopping-bag_sticky.svg');
            $('.icons_global img').attr('src', '/assets/images/global_sticky.svg');
        }
    }

    // Вызов при загрузке страницы и при скролле
    updateHeader();
    $(window).scroll(updateHeader);
});
