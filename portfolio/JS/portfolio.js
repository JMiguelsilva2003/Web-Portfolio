var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        320: {
            slidesPerView: 1,
        }
    }
});