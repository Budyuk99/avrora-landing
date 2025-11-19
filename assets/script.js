$(document).ready(function(){
    // Инициализация Owl Carousel
    $("#slider-1").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
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

    $("#slider-2").owlCarousel({
        items: 2,              // показываем два слайда одновременно
        loop: true,
        margin: 12,            // расстояние между слайдами
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        navText: [
            '<img src="/assets/images/arrow-circle-left.svg" alt="prev" class="custom-arrow">',
            '<img src="/assets/images/arrow-circle-right.svg" alt="next" class="custom-arrow">'
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1441: { items: 3 },
            1920: { items: 4 }
        }
    });

    const burger = document.querySelector('.burger');
    const sideMenu = document.querySelector('.side-menu');
    const closeMenu = document.querySelector('.side-menu .close-menu');
    const overlay = document.querySelector('.overlay');

    // Открытие меню
    burger.addEventListener('click', () => {
        sideMenu.classList.add('active');
        overlay.classList.add('active');
    });

    // Закрытие меню по кнопке ✕ или клику на фон
    closeMenu.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // ----------- Динамическое меню по полу -----------
    const menuItems = {
        women: [
            "Home chic & cruise",
            "Вечная классика",
            "Вечерняя мода",
            "Милитари роза",
            "Коллекция бабочки",
            "Family look",
            "Подарки",
            "Аксессуары"
        ],
        men: [
            "Home chic & cruise",
            "Вечная классика",
            "Вечерняя мода",
            "Милитари роза",
            "Family look",
            "Подарки",
            "Аксессуары"
        ],
        kids: [
            "Family look",
            "Коллекция бабочки",
            "Home chic & cruise",
            "Подарки",
            "Аксессуары"
        ]
    };

    const genderLinks = document.querySelectorAll('.gender-link');
    const sideMenuList = document.querySelector('.side-menu-list');

    // Функция обновления списка с ссылками
function renderMenu(gender) {
    sideMenuList.innerHTML = ""; // очищаем меню
    menuItems[gender].forEach(item => {
        const li = document.createElement('li');

        // создаём основную ссылку
        const a = document.createElement('a');
        a.textContent = item;
        a.href = "#"; // ссылка на сам пункт
        a.classList.add("side-menu-link");

        // создаём отдельную ссылку-стрелку
        const arrowLink = document.createElement('a');
        arrowLink.href = "#"; // ссылка для стрелки
        arrowLink.classList.add('side-menu-arrow');
        const arrowImg = document.createElement('img');
        arrowImg.src = '/assets/images/arrow_right.svg';
        arrowImg.alt = 'arrow';
        arrowLink.appendChild(arrowImg);

        li.appendChild(a);        // вставляем текст
        li.appendChild(arrowLink); // вставляем стрелку
        sideMenuList.appendChild(li);
    });
}

    // Инициализация: Женщинам
    renderMenu("women");

    // Клики по кнопкам
    genderLinks.forEach(btn => {
        btn.addEventListener('click', () => {
            genderLinks.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const gender = btn.dataset.gender;
            renderMenu(gender);
        });
    });

    $(window).on('scroll resize', function() {
        const $btn = $('.floating-button');
        const $footer = $('footer');

        const scrollBottom = $(window).scrollTop() + $(window).height();
        const footerTop = $footer.offset().top;

        if(scrollBottom >= footerTop) {
            $btn.addClass('hidden'); // плавно скрываем
        } else {
            $btn.removeClass('hidden'); // плавно показываем
        }
    });

    $("#two-images-carousel").owlCarousel({
        items: 2,             // показываем по 2 слайда на экране
        loop: true,
        margin: 18,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1441: { items: 3 },
            1920: { items: 4 }
        }
    });
});
