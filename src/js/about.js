export function about() {
    const carouselElementsLtl = document.querySelectorAll(".ltl");
const carouselElementsrtl = document.querySelectorAll(".rtl");


// 각 캐러셀 요소를 반복합니다.
carouselElementsLtl.forEach((carouselElement) => {
  // 각 캐러셀에 대해 새 슬라이드 인스턴스를 초기화합니다.
  const splide = new Splide(carouselElement, {
    type: "loop",
    drag: true,
    autoWidth: true,
    gap: 30,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1.5,
      pauseOnHover: true,
    },
  });

  // 스플릿 인스턴스 마운트
  splide.mount(window.splide.Extensions);
});
carouselElementsrtl.forEach((carouselElement) => {
  // 각 캐러셀에 대해 새 슬라이드 인스턴스를 초기화합니다.
  const splide = new Splide(carouselElement, {
    direction: 'rtl',
    type: "loop",
    // drag: true,
    autoWidth: true,
    gap: 30,
    //  pagination: true,
    // arrows: false,
    autoScroll: {
      speed: 2,
      pauseOnHover: true,
    },
  });

  // 스플릿 인스턴스 마운트
  splide.mount(window.splide.Extensions);
});
}