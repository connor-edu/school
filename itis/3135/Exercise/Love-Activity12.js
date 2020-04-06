$(document).ready(() => {
  $(`#slider`).bxSlider({
    auto: true,
    pause: 2000,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 250,
    slideMargin: 10,
    randomStart: true,
    captions: true,
    pagerType: `short`,
    pagerSelector: `#pager`,
  });
});
