(function ($) {
  'use strict';

  $.exists = function (selector) {
    return $(selector).length > 0;
  };
  $(window).on('load', function () {
    preloader();
  });
  $(function () {
    $(window).trigger('resize');
    mainNav();
    stickyHeader();
    accordianSetup();
    scrollUp();
    onePageNavigation();
    slickInit();
    stickyFooter();
    modal();
    review();
    if ($.exists('.wow')) {
      new WOW({
        mobile: false,
      }).init();
    }
  });

  $(window).on('load', function () {
    $(window).trigger('scroll');
    $(window).trigger('resize');
  });

  $(window).on('scroll', function () {
    showScrollUp();
    stickyHeader();
    hideMenu();
  });

  /*--------------------------------------------------------------
    1. Preloader
  --------------------------------------------------------------*/
  function preloader() {
    $('.cs_perloader').fadeOut();
    $('cs_perloader_in').delay(150).fadeOut('slow');
  }

  /*--------------------------------------------------------------
    2. Mobile Menu
  --------------------------------------------------------------*/
  function mainNav() {
    $('.cs_nav').append('<span class="cs_menu_toggle"><span></span></span>');
    $('.menu-item-has-children').append(
      '<span class="cs_munu_dropdown_toggle"><span></span></span>',
    );
    $('.cs_menu_toggle').on('click', function () {
      $(this)
        .toggleClass('cs_toggle_active')
        .siblings('.cs_nav_list')
        .toggleClass('toggle-menu');
    });
    $('.cs_menu_toggle')
      .parents('body')
      .find('.cs_side_header')
      .addClass('cs_has_main_nav');
    $('.cs_menu_toggle')
      .parents('body')
      .find('.cs_toolbox')
      .addClass('cs_has_main_nav');
    $('.cs_munu_dropdown_toggle').on('click', function () {
      $(this).toggleClass('active').siblings('ul').slideToggle();
      $(this).parent().toggleClass('active');
    });
  }

  /*--------------------------------------------------------------
    3. Sticky Header
  --------------------------------------------------------------*/
  function stickyHeader() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $('.cs_sticky_header').addClass('cs_sticky_active');
    } else {
      $('.cs_sticky_header').removeClass('cs_sticky_active');
    }
  }

  /*--------------------------------------------------------------
    4. One Page Navigation
  --------------------------------------------------------------*/
  function onePageNavigation() {
    var topLimit = 300,
      ultimateOffset = 200;

    $('.cs_onepage_nav').each(function () {
    });
  }

  /*----------------------------------------------------------
    5. Slick Slider
  -----------------------------------------------------------*/
  function slickInit() {
    $('.cs_slider').slick({
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '290px',
      arrows: false,
      dots: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            centerPadding: '200px',
          },
        },
        {
          breakpoint: 1400,
          settings: {
            centerPadding: '160px',
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            centerMode: false,
            focusOnSelect: false,
            centerPadding: '0px',
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            focusOnSelect: false,
            centerPadding: '0px',
            slidesToShow: 1,
          },
        },
      ],
    });
    
    $('.cs_slider1').slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 2,
    });
  }

  /*--------------------------------------------------------------
   6. Accordian
 --------------------------------------------------------------*/
  function accordianSetup() {
    var $this = $(this);
    $('.cs_accordian').children('.cs_accordian_body').hide();
    $('.cs_accordian.active').children('.cs_accordian_body').show();
    $('.cs_accordian_title').on('click', function () {
      $(this)
        .parent('.cs_accordian')
        .siblings()
        .children('.cs_accordian_body')
        .slideUp(250);
      $(this).siblings().slideDown(250);
      /* Accordian Active Class */
      $(this).parents('.cs_accordian').addClass('active');
      $(this).parent('.cs_accordian').siblings().removeClass('active');
    });
  }

  /*--------------------------------------------------------------
   7. Modal
 --------------------------------------------------------------*/
  function modal() {
    $('.cs_modal_btn').on('click', function () {
      var modalData = $(this).attr('data-modal');
      $(`[data-modal='${modalData}']`).addClass('active');
      $(this).parents('.cs_modal').removeClass('active');
    });
    $('.cs_close_modal, .cs_close_overlay').on('click', function () {
      var modalData = $(this).parents('.cs_modal').attr('data-modal');
      $(`[data-modal='${modalData}']`).removeClass('active');
    });
  }

  /*--------------------------------------------------------------
    8. Scroll Up
  --------------------------------------------------------------*/
  function scrollUp() {
    $('#cs_backtotop').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate(
        {
          scrollTop: 0,
        },
        0,
      );
    });
  }
  //For Scroll Up
  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 450) {
      $('#cs_backtotop').addClass('active');
    } else {
      $('#cs_backtotop').removeClass('active');
    }
  }

  /*--------------------------------------------------------------
    9. Sticky Footer 
  --------------------------------------------------------------*/
  function stickyFooter() {
    // Sticky Footer
    var footerHeight = $('.cs_sticky_footer').height();
    var footerHeightPx = footerHeight + 'px';
    $('.cs_content').css('margin-bottom', footerHeightPx);
  }

  /*--------------------------------------------------------------
    10. Review
  --------------------------------------------------------------*/
  function review() {
    $('.cs_rating').each(function () {
      var review = $(this).data('rating');
      var reviewVal = review * 20 + '%';
      $(this).find('.cs_rating_percentage').css('width', reviewVal);
    });
  }

  /*--------------------------------------------------------------
    11. Hide Mobile Menu
  --------------------------------------------------------------*/
  function hideMenu() {
    let scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $('.cs_nav_list').removeClass("cs_active");
      $('.cs_menu_toggle').removeClass("cs_toggle_active");
    }  
  }
})(jQuery); // End of use strict


// gsap start

gsap.to(".mobile-sale-wrap ul",{
  transform: "translateX(-150%)",
  scrollTrigger:{
    trigger:".mobile-sale-sec",
    scroller: "body",
    // markers: true,
    start: "top 8%",
    end : "top -150%",
    scrub:3,
    pin:true
  }
})


// infinite img slider 

// function createAnimation(itemSelector, centerProps, defaultProps, duration, onCompleteCallback) {
//   const animation = {};

//   const boxes = gsap.utils.toArray(itemSelector);
//   if (boxes.length === 0) {
//     console.error("No elements found for the provided selector.");
//     return animation;
//   }

//   const width = gsap.getProperty(boxes[0], "width");
//   const totalLength = boxes.length;
//   const loopLength = Math.floor(totalLength / 3);
//   const list = boxes[0].parentNode;
//   const startIndex = loopLength;
//   const endIndex = 2 * loopLength;
//   let currentIndex = startIndex;
//   let direction = 0;
//   let disableBtn = false;

//   gsap.set(boxes[0].firstChild, centerProps);

//   const scaledWidth = gsap.getProperty(boxes[0], "width");
//   const windowWidth = gsap.getProperty('body', 'width');

//   gsap.set(list, {
//     x: (windowWidth - scaledWidth) / 2
//   });

//   const createSegment = (i) => {
//     return gsap.timeline()
//       .to(boxes[i].firstChild, { ...defaultProps, duration, ease: 'none', immediateRender: false })
//       .to(boxes[i + 1].firstChild, { ...centerProps, duration, ease: 'none', immediateRender: false }, "<")
//       .to(list, { x: `-=${width}`, duration, ease: 'none', onComplete: onSegmentComplete, onReverseComplete: onSegmentComplete }, "<");
//   };

//   const fullAnim = gsap.timeline({ paused: true });

//   const onSegmentComplete = () => {
//     if (currentIndex === endIndex + 1) {
//       currentIndex = startIndex + 1;
//       fullAnim.currentLabel(`Label${currentIndex}`);
//     } else if (currentIndex === startIndex - 1) {
//       currentIndex = endIndex - 1;
//       fullAnim.currentLabel(`Label${currentIndex}`);
//     }
//     if (onCompleteCallback) onCompleteCallback();
//   };

//   fullAnim.addLabel('Label0');
//   boxes.forEach((box, index) => {
//     if (index === totalLength - 1) return;
//     fullAnim.add(createSegment(index)).addLabel(`Label${index + 1}`);
//   });

//   fullAnim.currentLabel(`Label${startIndex}`);

//   animation.scrollLeft = () => {
//     if (disableBtn) return;
//     disableBtn = true;

//     direction = -1;
//     fullAnim.tweenTo(`Label${currentIndex - 1}`, { duration: 0.5 });
//     currentIndex--;

//     setTimeout(() => {
//       disableBtn = false;
//     }, duration * 1000 + 100);
//   };

//   animation.scrollRight = () => {
//     if (disableBtn) return;
//     disableBtn = true;

//     direction = 1;
//     fullAnim.tweenTo(`Label${currentIndex + 1}`, { duration: 0.5 });
//     currentIndex++;

//     setTimeout(() => {
//       disableBtn = false;
//     }, duration * 1000 + 100);
//   };

//   animation.currentIndex = () => currentIndex;

//   return animation;
// }


// let autoplay = true
// let timer = null
// const autoplayStatusEl = document.querySelector('.autoplay-status')

// const onComplete = () => {}

// const infiScrollAnim = createAnimation('.box', {
//   scale: 1.25,
//   margin: '0 64 0 64',
//   boxShadow: '#FF9800 0px 50px 100px -20px, #FF9800 0px 30px 60px -30px'
// }, {
//   scale: 1,
//   margin: '0 20 0 20',
//   boxShadow: 'none'
// }, 0.5, onComplete)


// const leftAnim = () => {
//   clearTimeout(timer)
//   infiScrollAnim.scrollLeft()
//   if (autoplay) {
//     timer = setTimeout(rightAnim, 2500)
//   }
// }

// const rightAnim = () => {
//   clearTimeout(timer)
//   infiScrollAnim.scrollRight()
//   if (autoplay) {
//     timer = setTimeout(rightAnim, 2500)
//   }
// }

// if (autoplay) {
//   timer = setTimeout(rightAnim, 2500)
// }

// function handleAutoplay () {
//   autoplay = !autoplay
  
//   if (autoplay) {
//     autoplayStatusEl.innerHTML = 'ON'
//     timer = setTimeout(rightAnim, 2500)
//   } else {
//     autoplayStatusEl.innerHTML = 'OFF'
//     clearTimeout(timer)
//   }
// }

// const prevBtn = document.querySelector('.prev');
// prevBtn.addEventListener('click', leftAnim);
// const nextBtn = document.querySelector('.next');
// nextBtn.addEventListener('click', rightAnim);
// const autoplayBtn = document.querySelector('.autoplay-container');
// autoplayBtn.addEventListener('click', handleAutoplay);

// infinite img slider end 



var serCard = document.querySelectorAll(".website-service-card");
serCard.forEach(function(Scard) {
  Scard.addEventListener("mousemove", function(move) {
    var cardImg = Scard.querySelector(".card-icon");
    var rect = Scard.getBoundingClientRect();
    var directx = move.clientX - rect.left - 100;

    gsap.to(cardImg, {
      x: directx,
      rotate: directx / 90
    });
  });

  Scard.addEventListener("mouseenter", function() {
    var cardImg = Scard.querySelector(".card-icon");
    gsap.to(cardImg, {
      scale: 1,
      duration: 0.5
    });
  });

  Scard.addEventListener("mouseleave", function() {
    var cardImg = Scard.querySelector(".card-icon");
    gsap.to(cardImg, {
      scale: 0,
      duration: 0.5
    });
  });
});
