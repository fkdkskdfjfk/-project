
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
  // to-top
const toTopEl = document.querySelector('#to-top');
console.log(toTopEl);
toTopEl.addEventListener('click', function () {
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

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8 
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
