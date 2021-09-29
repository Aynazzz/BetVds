$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1000,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.svg"></button>',
    nextArrow: '<button style: type="button" class="slick-next"><img src="icons/next.svg"></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
    });

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });


        $(".menuToggle").click(function() {
          $(this).toggleClass("active");
          $('.nav').slideToggle(300, function(){
            if($(this).css('display') === "none"){
              $(this).removeAttr('style');
            }
          });
        });
     
});