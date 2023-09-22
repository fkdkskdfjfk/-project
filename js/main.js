
new Swiper('.aiService .swiper', {
  loop: true, 
  autoplay: false, 
  slidesPerView: 4, // 한번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 0, // 슬라이드 사이 여백(간격) px
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.aiService .swiper-button-next', 
    prevEl: '.aiService .swiper-button-prev'
  }
});
window.onload = function(){
  // to-top
  const toTopEl = document.querySelector('#to-top');
  // console.log('tototo');
  toTopEl.addEventListener('click', function () {
    console.log('tototo');
    gsap.to(window, 0.6, {
      scrollTo: 0 
    });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500 ) {
      gsap.to(toTopEl, 0.6, {
        opacity: 1,
        x: 0
      });
    } else {
      gsap.to(toTopEl, 0.6, {
        opacity: 0,
        x: 100
      });
    }
  });

}