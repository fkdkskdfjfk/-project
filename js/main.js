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