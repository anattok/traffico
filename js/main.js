// //аккордеон faq секции на js
// const lists = document.querySelectorAll('.faq__list');

// lists.forEach((list) => {
//     list.addEventListener("click", (event) => {
//         const target = event.target;

//         if (target.classList.contains('faq__item') || target.classList.contains('faq__item-label')) {
//             const faqItem = target.closest('.faq__item');
//             const faqItems = document.querySelectorAll('.faq__item');

//             if (faqItem.classList.contains('active')) {
//                 faqItem.classList.remove('active');
//             } else if (!faqItem.classList.contains('active')) {
//                 faqItems.forEach((item) => {
//                     item.classList.remove('active');
//                 });
//                 faqItem.classList.add('active');
//             }
//         }
//     });
// });

// // Добавляем слушатель события на документ чтобы плашки закрывались по клику вне
// document.addEventListener('click', (event) => {
//     const target = event.target;
//     if (!target.closest('.faq__list')) {
//         const faqItems = document.querySelectorAll('.faq__item');
//         faqItems.forEach((faqItem) => {
//             faqItem.classList.remove('active');
//         });
//     }
// });

// аккордеон faq секции на jQuery
$(document).ready(function () {
    $('.faq__list').on('click', function (event) {
        const target = $(event.target);
        const faqItem = target.closest('.faq__item');
        const faqItems = $('.faq__item');

        if (target.hasClass('faq__item') || target.hasClass('faq__item-label')) {
            if (faqItem.hasClass('active')) {
                faqItem.removeClass('active');
            } else {
                faqItems.removeClass('active');
                faqItem.addClass('active');
            }
        }
    });

    $(document).on('click', function (event) {
        const target = $(event.target);
        if (!target.closest('.faq__list').length) {
            $('.faq__item').removeClass('active');
        }
    });
});

//управление слайдером
$(".slider__main").slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.slider__prev'),
    nextArrow: $('.slider__next'),
    variableWidth: true, //изменение ширины слайдов
    responsive: [
        {
            breakpoint: 1024, // - от какой ширины изменять настройки(1024 и ниже)
            settings: {
                // вносим изменения на ширине 1024 и ниже 
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480, // брекпоинтов может быть сколько угодно
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});





//burger
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const navItems = menu.querySelectorAll("a")

burger.addEventListener("click", () => {
    document.body.classList.toggle("stop-scroll")
    burger.classList.toggle("burger__active")
    menu.classList.toggle("menu__visible")
})

navItems.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.toggle("stop-scroll")
        burger.classList.toggle("burger__active")
        menu.classList.toggle("menu__visible")
    })
})


