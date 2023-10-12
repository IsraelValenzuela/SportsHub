window.addEventListener('load', function(){
    new Glider (document.querySelector('.carousel2__lista'),{
        slidesToShow: 4,
     slidesToScroll: 4,
    dots: '.carousel2__indicadores',
    arrows: {
        prev: '.carousel2__anterior',
        next: '.carousel2__siguiente'
  }
    });
});