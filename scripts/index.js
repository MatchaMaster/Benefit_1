/* 메인페이지 슬라이더 */
const mainSwiper = new Swiper('.mainSwiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    speed: 900,
    allowTouchMove: true,
    pagination: {
        el: '.custom-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
});
/* 베스트셀러 슽라이더 */
const bestSwiper = new Swiper('.bestSwiper', {
    slidesPerView: 5,       // 한 화면에 5개 보이게
    loop: true,
    allowTouchMove: true,
    pagination: {
        el: '.bestseller-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    breakpoints: {
        1400: { slidesPerView: 5 },
        1200: { slidesPerView: 4 },
        992:  { slidesPerView: 3 },
        768:  { slidesPerView: 2 },
        480:  { slidesPerView: 1 }
    }
});
const collabSwiper = new Swiper('.collabSwiper', {
    slidesPerView: 5,
    loop: true,
    allowTouchMove: true,

    pagination: {
        el: '.collab-pagination',   // ⭐⭐ 여기만 바꾸면 해결
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },

    breakpoints: {
        1400: { slidesPerView: 5 },
        1200: { slidesPerView: 4 },
        992:  { slidesPerView: 3 },
        768:  { slidesPerView: 2 },
        480:  { slidesPerView: 1 }
    }
});



