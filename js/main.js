// AI Service 슬라이드 기능
new Swiper('.aiService .swiper', {
  loop: true, 
  autoplay: false, 
  slidesPerView: 4, // 한번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 0, // 슬라이드 사이 여백(간격) px
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.aiService .swiper-button-next', // 다음 버튼 요소
    prevEl: '.aiService .swiper-button-prev'// 다음 버튼 요소
  }
});

// to-top
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 0 // 페이지의 0px 지점(최상단)으로 이동, ScrollTOPlugin을 연결해야 사용 가능한 옵션
  });
});

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 500 ) {
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0
    });
  } else {
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x:100
    });
  }
});