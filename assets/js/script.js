(function($) {

  "use strict";

  var $html = $("html"),
      loaderIntro = '<div class="preloader-bg"><div class="preloader-inner"></div></div>',
      $headerHeight = $('#header').outerHeight(),
      windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      $content = $('#content-wrap'),
      shareHolder = $('#side-holder'),
      socialShareIcons = $("#social-share-icons"),
      postNav = $('.post-nav a'),
      $fwiWrapper = $('#wrapper').eq(0);


  var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };

  var pt_update = {
    init: function() {
      var self = this;
      self.preLoader();
      self.linkTransition();
      self.scrollUpHeader();
      self.catFilterDropdown();
      self.newsletterPopup();
      self.searchPopup();
      self.mobileMenuTrigger();
      self.contentWrap();
      self.bgParallax();
      self.fixedFooter();
      self.featuredSlider();
      self.toggleAccordion();
      self.tabs();
      self.equalHeight();
      self.emptySpace();
      self.notificationClose();
      self.scrollAffixShareHolder();
      self.scrollAffixPostNav();
      self.fullWidthImage();
      self.gallery();
      self.formControl();
      self.scrollBar();
      self.fitVid();
      self.matchHeight();
      self.instaFeed();
      self.twitterFeed();
      self.photoSwipeLightbox();
      self.googleMap();
    },

    preLoader: function() {

      $(window).on('load', function() {
          $('.preloader').delay(1000).fadeOut('slow');
      });

    },

    linkTransition: function() {

      var i = document.querySelector("body");
      setTimeout(function() {
          i.classList.add("transition")
      }, 1000);
      setTimeout(function() {
          $("body").removeClass("fade-in-page")
      }, 1000);

      var transLinks = $('a:not([href^="#"]):not([href^="tel"]):not([href^="mailto"]):not([href=""]):not([target="_blank"]):not([class*="-openpopup"]):not([href*=youtube]):not([href*=vimeo])');

      if (transLinks.on('click', function(e) {
        function t() {
          window.location = i
        }

        e.preventDefault();

        setTimeout(function() {
          $("body").addClass("page-transition")
        }, 1000);

        var i = this.href;

        $("#header").animate({
          top: "-300"
        }, {
          duration: 200,
          complete: function() {
            $("body").fadeOut(600, t)
          }
        })
      }));

      $(window).on("pageshow", function(e) {
          $("body").removeClass("page-transition")
      });

    },

    scrollUpHeader: function() {

      var previousScroll = 0, // previous scroll position
          menuOffset = $('#header').outerHeight(), // height of menu (once scroll passed it, menu is hidden)
          detachPoint = ($('body.mobile').length > 0) ? 150 : 450, // point of detach (after scroll passed it, menu is fixed)
          // detachPoint = 650, // point of detach (after scroll passed it, menu is fixed)
          hideShowOffset = 6; // scrolling value after which triggers hide/show menu

      // on scroll hide/show menu
      function hhunCalcs(e) {
        var currentScroll = $(this).scrollTop(), // gets current scroll position
            scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling

        // if scrolled past menu
        if (currentScroll > menuOffset) {
          // if scrolled past detach point add class to fix menu
          if (currentScroll > detachPoint) {
            if (!$('#header').hasClass('detached')) {
              $('#header').addClass('detached');
            }
          }

          // if scrolling faster than hideShowOffset hide/show menu
          if (scrollDifference >= hideShowOffset) {
            if (currentScroll > previousScroll) {
              // scrolling down; hide menu
              if (!$('#header').hasClass('invisible')) {
                $('#header').addClass('invisible');
                $('#header').find('.filter').removeClass('nav-is-visible');
              }
            } else {
              // scrolling up; show menu
              if ($('#header').hasClass('invisible')) {
                $('#header').removeClass('invisible');
              }
            }
          }
        } else {
          // only remove “detached” class if user is at the top of document (menu jump fix)
          if (currentScroll <= 0) {
            $('#header').removeClass('detached');
          }
        }

        // if user is at the bottom of document show menu
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          // $('#header').removeClass('invisible');
        }

        // replace previous scroll position with new one
        previousScroll = currentScroll;
      }

      hhunCalcs();
      $(window).scroll(hhunCalcs);

    },

    catFilterDropdown: function() {

      if ($('.filter').length > 0) {
        var stretchyNavs = $('.filter');

        stretchyNavs.each(function() {
          var stretchyNav = $(this),
              stretchyNavTrigger = stretchyNav.find('.cat-filter');

          stretchyNavTrigger.on('click', function(event) {
            event.preventDefault();
            stretchyNav.toggleClass('nav-is-visible');
          });
        });

        $(document).on('click', function(event) {
          (!$(event.target).is('.cat-filter') && !$(event.target).is('.cat-filter span')) && stretchyNavs.removeClass('nav-is-visible');
        });
      }

    },

    newsletterPopup: function() {

      //open popup
      $('.nl-popup-trigger').on('click', function(event) {
        event.preventDefault();
        $('.nl-popup').addClass('is-visible');
        setTimeout(function() {
          $('.nl-popup').find('#input-email-signup').focus()
        }, 350);
      });

      //close popup
      $('.nl-popup').on('click', function(event) {
        if ($(event.target).is('.nl-popup-close') || $(event.target).is('.nl-popup-close svg') || $(event.target).is('.nl-popup-close path') || $(event.target).is('.nl-popup')) {
          event.preventDefault();
          $(this).removeClass('is-visible');
        }
      });
      //close popup when clicking the esc keyboard button
      $(document).keyup(function(event) {
        if (event.which === '27') {
          $('.nl-popup').removeClass('is-visible');
        }
      });

    },

    searchPopup: function() {

      //open popup
      $('.search-popup-trigger').on('click', function(event) {
        event.preventDefault();
        var activeToggle = null;
        $('.search-popup').addClass('is-visible');
        setTimeout(function() {
          $('.search-popup').find('#search-popup').focus()
        }, 350);
      });

      //close popup
      $('.search-popup').on('click', function(event) {
        if ($(event.target).is('.search-popup-close') || $(event.target).is('.search-popup-close svg') || $(event.target).is('.search-popup-close path') || $(event.target).is('.search-popup')) {
          event.preventDefault();
          $(this).removeClass('is-visible');
        }
      });
      //close popup when clicking the esc keyboard button
      $(document).keyup(function(event) {
        if (event.which === '27') {
          $('.search-popup').removeClass('is-visible');
        }
      });

    },

    mobileMenuTrigger: function() {

      var $menu_trigger = $('#mobile-menu-trigger'),
          $content_wrapper = $('#content-wrap'),
          $navigation = $('#header'),
          $footer = $('#footer');

      $("#wrapper").append("<div class='site-overlay'></div>");

      //open-close menu clicking on the menu icon
      $menu_trigger.on('click', function(event) {
        event.preventDefault();

        // $('body').toggleClass('no-scroll');
        $menu_trigger.toggleClass('is-clicked');
        $navigation.toggleClass('side-tray-open');
        $footer.toggleClass('side-tray-open');
        $('.site-overlay').toggleClass('side-tray-open');
        $content_wrapper.toggleClass('side-tray-open');
        $('#side-tray-wrapper').toggleClass('side-tray-open');

        //check if transitions are not supported - i.e. in IE9
        if ($('html').hasClass('no-csstransitions')) {
          $('body').toggleClass('overflow-hidden');
        }
      });

      //close menu clicking outside the menu itself
      $('.site-overlay, #side-tray-wrapper .side-tray-close').on('click', function(event) {
        event.preventDefault();
        if (!$(event.target).is('#mobile-menu-trigger, #mobile-menu-trigger span')) {
          $('.site-overlay').removeClass('side-tray-open');
          $menu_trigger.removeClass('is-clicked');
          $navigation.removeClass('side-tray-open');
          $footer.removeClass('side-tray-open');
          $content_wrapper.removeClass('side-tray-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            $('body').removeClass('overflow-hidden');
          });
          $('#side-tray-wrapper').removeClass('side-tray-open');
          //check if transitions are not supported
          if ($('html').hasClass('no-csstransitions')) {
            $('body').removeClass('overflow-hidden');
          }
        }

      });

      //close menu when clicking the esc keyboard button
      $(document).keyup(function(event) {
        if (event.which === '27') {
          $('.site-overlay').removeClass('side-tray-open');
          $menu_trigger.removeClass('is-clicked');
          $navigation.removeClass('side-tray-open');
          $footer.removeClass('side-tray-open');
          $content_wrapper.removeClass('side-tray-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            $('body').removeClass('overflow-hidden');
          });
          $('#side-tray-wrapper').removeClass('side-tray-open');
          //check if transitions are not supported
          if ($('html').hasClass('no-csstransitions')) {
            $('body').removeClass('overflow-hidden');
          }
        }
      });

      //open (or close) submenu items in the menu. Close all the other open submenu items.
      $('.item-has-children').children('a').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
      });

    },

    contentWrap: function() {

      $('#content-wrap').each(function() {
        var $this = $(this),
            headerHeight = $('#header').not('.detached').outerHeight();

        function contentWrapPadding() {
          if ($this.children('#featured-post-slider-wrap').length > 0) {
            $this.children('#featured-post-slider-wrap').css('paddingTop', headerHeight + 'px');
          } else {
            $this.css('paddingTop', headerHeight + 'px');
          }
        }

        contentWrapPadding();

      });

    },

    bgParallax: function() {
      var offsets     = {};

      $('div, section, #footer').each(function() {
        var $this       = $(this),
            bgImage     = $this.attr('data-bg-image'),
            bgColor     = $this.attr('data-bg-color'),
            parSpeed    = $this.attr('data-parallax-speed') || 0.20,
            newHeight   = Math.round(($this.outerHeight() + (windowHeight * parSpeed)) / $this.outerHeight() * 100);

        if( bgImage ) {
          if($this.css("position") !== 'absolute') { $this.css({"position":"relative"}); }
          if ($this.hasClass('parallax-section')) {
            $this.prepend('<div class="parallax-content" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;overflow:hidden;"><div class="parallax-image" style="background-image: url(' + bgImage + ');background-position:50% 50%;background-size:cover; width:100%;height:'+newHeight+'%;position:absolute;"></div></div>');
          } else {
            $this.css({
              "background-image": "url(" + bgImage + ")",
              "background-position": "center center",
              "background-attachment": "inherit",
              "background-size": "cover"
            });
          }
        }

        if( bgColor ) {
          $this.css({
            "background-color": "#" + bgColor
          });
        }
        else {
          return;
        }
      });

      function scrollEvent(){

        $('.parallax-content').each(function(){
          var $this       = $(this),
              scrollTop   = $(window).scrollTop(),
              parSpeed    = $this.parents().attr('data-parallax-speed') || 0.20,
              bottom      = windowHeight + scrollTop,
              offset      = parseInt($this.offset().top, 10),
              height      = $this.outerHeight();

          // Check if above or below viewport
          if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
            return;
          }

          var position    = - Math.round((offset - scrollTop) * parSpeed * 10000) / 10000;

          if ( $this.parents().hasClass('parallax-section') && !$('body').hasClass('mobile') ) {
            $this.find('.parallax-image').css({'transform':'translate3d(0, ' + position +'px,0)',
            '-webkit-transform':'translate3d(0, ' + position +'px,0)'});
          } else {
            $this.find('.parallax-image').css({'transform':'translate3d(0,0,0)',
            '-webkit-transform':'translate3d(0,0,0)'});
          }
        });

      }

      $(window).on('load', function() {
        $(window).scroll(function(){
          if (isMobile.any()) {
            return;
          } else {
            scrollEvent();
          }
        });
      });
      window.onresize = function(offset) {
        $(window).scroll(function(){
          if (isMobile.any()) {
            return;
          } else {
            scrollEvent();
          }
        });
      };
    },

    fixedFooter: function() {

      var fixedFooters = function() {
        if ($('footer').size() === 0) return;

        if ($('#footer.footer-fixed').length > 0) {
          if ($(window).width() <= 1000) {
            $('footer').css({
              position: ''
            });
            $content.css({
              marginBottom: ''
            });
            return;
          }
          $('footer').css({
            position: 'fixed'
          });
          $content.css({
            marginBottom: $('footer').outerHeight()
          })
        }
      };
      fixedFooters();

      $(window).on('load', function() {
        fixedFooters();
      });

      $(window).smartresize(function() {
        fixedFooters();
      });

    },

    featuredSlider: function() {

      $('.featured-post-slider').each(function() {
        var $this = $(this),
            autoplay = $this.parents('.gallery-slider').data('autoplay'),
            autoheight = $this.parents('.gallery-slider').data('autoheight'),
            navigation = $this.parents('.gallery-slider').data('navigation'),
            pagination = $this.parents('.gallery-slider').data('pagination');

        $this.slick({
          slide: 'article',
          autoplay: false,
          infinite: true,
          speed: 500,
          useTransform: true,
          centerMode: true,
          centerPadding: '20%',
          draggable: true,
          initialSlide: 0,
          dots: false,
          prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<i><svg class="" viewBox="0 0 35 10"><use xlink:href="images/ui-icons.svg#arrow-left-long-icon"></use></svg></i></button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<i><svg class="" viewBox="0 0 35 10"><use xlink:href="images/ui-icons.svg#arrow-right-long-icon"></use></svg></i></button>',
          touchThreshold: 20,
          slidesToShow: 1,
          cssEase: 'cubic-bezier(0.28, 0.12, 0.22, 1)',
          focusOnSelect: true,
          responsive: [{
            breakpoint: 1399,
            settings: {
              autoplay: false,
              centerPadding: '15%'
            }
          }, {
            breakpoint: 1199,
            settings: {
              autoplay: false,
              centerPadding: '10%'
            }
          }, {
            breakpoint: 991,
            settings: {
              autoplay: true,
              draggable: true,
              centerPadding: 0,
              arrows: false
            }
          }]
        });

        // show slider after init
        setTimeout(function() {
            $this.closest('.featured-slider-wrap').css({
                opacity: 1
            });
        }, 1000);
      });

    },

    toggleAccordion: function() {

      $('.accordion-wrap .toggle').children('.toggle-title').on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('active').next('.toggle-content').slideToggle(300).end().parent('.toggle').siblings('.toggle').children('.toggle-title').removeClass('active').next('.toggle-content').slideUp(300);
      });

      $(".toggle-wrap .toggle").find(".toggle-title").addClass("toggle-header").on('click', function () {
        $(this).toggleClass("active").next().toggleClass("toggle-content-active").slideToggle(200);
        return false
      }).next().addClass("toggle-content");
    },

    notificationClose: function() {

      $('.message-box .close').on('click',  function() {
        $(this).parent().parent().fadeTo(400, 0.001).slideUp();
      });

    },

    tabs: function() {

      $(".tabs-nav").each(function() {
        $(this).next().children(".tab-content").hide(); //Hide all content
        $(this).children("li").first().addClass("active").show(); //Activate first tab
        $(this).next().children(".tab-content").first().show(); //Show first tab content
      });

      //On Click Event
      $(".tabs-nav li").on('click', function(e) {
        $(this).siblings().removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(this).parent().next().children(".tab-content").hide(); //Hide all tab content

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        $(this).parent().next().find(activeTab).fadeIn(); //Fade in the active ID content
        e.preventDefault();
      });

      $(".tabs-nav li a").on('click', function(e) {
        e.preventDefault();
      });

    },

    equalHeight: function() {

      $(window).on('load', function() {
        $('.equal-col-height > [class*="col-"]').equalHeightBlock();
      });

      $(window).smartresize(function() {
        $('.equal-col-height > [class*="col-"]').equalHeightBlock();
      });

    },

    emptySpace: function() {

      $('.empty-space').each(function() {
        var $this = $(this),
            elHeight = $this.attr('data-height');

        if (elHeight) {
          $this.css({
            "height": elHeight + 'px'
          });
        }
      });

    },

    notificationClose: function() {

      $('.message-box .close').on('click',  function() {
        $(this).parent().parent().fadeTo(400, 0.001).slideUp();
      });

    },

    scrollAffixShareHolder: function() {

      //function to check if an element exists
      $.fn.exists = function(callback) {
        var args = [].slice.call(arguments, 1);

        if (this.length) {
          callback.call(this, args);
        }

        return this;
      };

      $(function() {

        var checkOverlap = function($element) {
          if ($element.length) {
            // var results = $element.overlaps(".image-holder.full-width");
            var results = $element.overlaps("");

            $element.removeClass('overlap');
            clearTimeout($element.data('scrollTimer'));

            $element.data('scrollTimer', setTimeout(function() {
              // do something
              if (results.length > 0) {
                //console.log('something is overlapping');
                $element.addClass('overlap');
              }
              //console.log("Haven't scrolled in 500ms!");
            }, 500));

            //hide for sure if over related projects
            var footerOverlap = $element.overlaps(".image-holder.full-width, #related-post, #comments-wrap, #footer:not('.footer-fixed'), .instafeed-section, .newsletter-section");
            if (footerOverlap.length > 0) {
              //console.log('something is overlapping');
              $element.addClass('footer-overlap');
            } else {
              $element.removeClass('footer-overlap');
            }
          }
        }

        shareHolder.exists(function() {
          //mouse proximity
          var mX, mY, distance,
              $distance = shareHolder,
              $element = $('#social-share-icons');

          function calculateDistance(elem, mouseX, mouseY) {
            return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
          }

          $(document).mousemove(function(e) {
            mX = e.pageX;
            mY = e.pageY;
            distance = calculateDistance($element, mX, mY);
            //$distance.text(distance);

            if (distance < 250) {
              $($element).addClass('hover');
            } else {
              $($element).removeClass('hover');
            }
          });
        });

        $(window).scroll(function(event) {

          /*check to see if social share icons is overlapping images*/
          socialShareIcons.exists(function() {
            //checkOverlap($(".close_share"));
            checkOverlap(socialShareIcons);
          });
          /*end*/

        });

        $(window).scroll(function() {
          $('#social-share-icons').exists(function() {
            var yPos = $(window).scrollTop(),
                offset = $('#side-holder').offset(),
                startPos = offset.top - $headerHeight,
                shareIconsWrapper = $('#social-share-icons');

            if (yPos < startPos) {
              shareIconsWrapper.removeClass('affix');
            } else if ((yPos > startPos)) {
              shareIconsWrapper.addClass('affix');
            }
          });
        });

      });

    },

    scrollAffixPostNav: function() {

      $(function() {
        var checkOverlap = function($element) {
          if ($element.length) {
            //hide for sure if over related proejcts
            var footerOverlap = $element.overlaps(".single-post-header, .image-holder.full-width, #related-post, #comments-wrap, #footer, .instafeed-section, .newsletter-section");
            if (footerOverlap.length > 0) {
              //console.log('something is overlapping');
              $element.addClass('overlap');
            } else {
              $element.removeClass('overlap');
            }
          }
        }

        $(window).scroll(function(event) {
          /*check to see if post navigation is overlapping images*/
          var postNav = $(".post-nav a");
          postNav.exists(function() {
            //checkOverlap($(".close_share"));
            checkOverlap(postNav);
          });
          /*end*/
        });

      });

    },

    fullWidthImage: function() {

      $('.single-post .post-content .image-holder.full-width').each(function() {
        var $this = $(this);

        $this.css({
          'width': $fwiWrapper.width(),
          'max-width': $fwiWrapper.width(),
          'left': -($this.offset().left - $fwiWrapper.offset().left) + 'px',
          'visibility': 'visible',
          'position': 'relative'
        });

        $(window).smartresize(function() {
          $this.css({
              'left': '0px'
          });
          $this.css({
            'width': $fwiWrapper.width(),
            'max-width': $fwiWrapper.width(),
            'left': -($this.offset().left - $fwiWrapper.offset().left) + 'px',
            'visibility': 'visible'
          });
        });
      });

    },

    gallery: function() {

      $('.gallery-item').each(function() {
        var $this = $(this);
        $this.parent().append(loaderIntro);
        $this.waitForImages({

          finished: function() {
            $this.imagesLoaded(function () {

              // console.log('All images have loaded.');
              $this.parent().find('.preloader-bg').fadeOut('100', function() {
                $this.parent().find('.preloader-bg').remove();
              });

            });
          },
          waitForAll: true
        });
      });

      $('.gallery-slider .gallery-item').each(function() {
        var $this = $(this),
            autoplay = $this.parents('.gallery-slider').data('autoplay'),
            autoheight = $this.parents('.gallery-slider').data('autoheight'),
            navigation = $this.parents('.gallery-slider').data('navigation'),
            pagination = $this.parents('.gallery-slider').data('pagination');

        $this.parent().append(loaderIntro);

        $this.waitForImages({

          finished: function() {
            $this.imagesLoaded(function () {

              // console.log('All images have loaded.');
              $this.parent().find('.preloader-bg').fadeOut('100', function() {
                $this.parent().find('.preloader-bg').remove();
              });

              var totalItems = $('.gallery-item figure').length,
                  currentIndex = $('.slick-active').index() + 1,
                  $status = $('.slides-number'),
                  $slickElement = $('.gallery-slider .gallery-item');

              $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1;
                $status.html(i + '<span> ' + local.of + ' </span>' + slick.slideCount);
              });

              $this.slick({
                dots: pagination || false,
                arrows: navigation || false,
                autoplay: autoplay || false,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<i><svg class="" viewBox="0 0 18.6 32"><use xlink:href="images/ui-icons.svg#angle-left-icon"></use></svg></i>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<i><svg class="" viewBox="0 0 18.6 32"><use xlink:href="images/ui-icons.svg#angle-right-icon"></use></svg></i></button>',
                infinite: true,
                fade: true,
                cssEase: 'linear',
                adaptiveHeight: autoheight || false,
                speed: 300,
                slidesToShow: 1,
                respondTo: 'slider',
                appendArrows: '.gallery-navigation'
              });

              $this.fadeIn('slow');

            });
          },
          waitForAll: true
        });
      });

    },

    formControl: function() {

      // Add a class whenever the input has some content/value.
      [].forEach.call(document.querySelectorAll('input, textarea'), function(input, i) {
          input.addEventListener('keyup', function(e) {
            input.classList.toggle('has-value', input.value !== '');
          });
      });

      $(document)
      .one('focus.textarea', 'textarea.form-control', function() {
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
      })
      .on('input.textarea', 'textarea.form-control', function() {
        var minRows = this.getAttribute('data-min-rows') | 0,
            rows;
        this.rows = minRows;
        console.log(this.scrollHeight, this.baseScrollHeight);
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 20);
        this.rows = minRows + rows;
      });

    },

    scrollBar: function() {

      $('.scrollbar-macosx').scrollbar();

    },

    fitVid: function() {

      $("#main-content").fitVids();

    },

    matchHeight: function() {

      // function init_match_heights() {
      var windowWidth = $(window).width();

      if (windowWidth > 600) {
        $('.blog-grid .post .post-content').matchHeight({
          byRow: true,
          property: 'height',
          target: null,
          remove: false
        });
      } else {
        $('.blog-grid .post .post-content').matchHeight({
          remove: true
        });
      }

    },

    instaFeed: function() {

      $('#instafeed').each(function() {
        var $this = $(this),
            user_id = '4624380368',
            access_token = '4624380368.101b64e.ffe7feed603b41c180034725fc300420';

        var feed = new Instafeed({
          get: 'user',
          userId: user_id,
          accessToken: access_token,
          target: 'instafeed',
          resolution: 'standard_resolution',
          sortBy: 'most-recent',
          limit: 20,
          links: false,
          template: '<a href="{{link}}" class="thumbnail" target="_blank" id="{{id}}"><div class="caption"><span class="caption-likes"><i><svg class="" viewBox="0 0 32 32"><use xlink:href="images/ui-icons.svg#love-icon"></use></svg></i> {{likes}}</span></div><img src="{{image}}" />',
          after: function() {
            $this.slick({
              arrows: true,
              infinite: false,
              speed: 400,
              useTransform: true,
              draggable: true,
              prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<i><svg class="" viewBox="0 0 25 10"><use xlink:href="images/ui-icons.svg#arrow-left-icon"></use></svg></i></button>',
              nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<i><svg class="" viewBox="0 0 25 10"><use xlink:href="images/ui-icons.svg#arrow-right-icon"></use></svg></i></button>',
              touchThreshold: 20,
              cssEase: 'cubic-bezier(.165,.84,.44,1)',
              slidesToShow: 4,
              appendArrows: '.instafeed-navigation',
              responsive: [{
                  breakpoint: 767,
                  settings: {
                      slidesToShow: 3
                  }
              }]
            });
          }
        });
        feed.run();

      });

      $('#instafeed-side-tray').each(function() {
        var $this = $(this),
            user_id = '4624380368',
            access_token = '4624380368.101b64e.ffe7feed603b41c180034725fc300420';

        var feed = new Instafeed({
          get: 'user',
          userId: user_id,
          accessToken: access_token,
          target: 'instafeed-side-tray',
          resolution: 'standard_resolution',
          sortBy: 'most-recent',
          limit: 8,
          links: false,
          template: '<a href="{{link}}" class="thumbnail" target="_blank" id="{{id}}"><img src="{{image}}" />'
        });
        feed.run();

      });

    },

    twitterFeed: function() {

      // TWITTER //
      if (typeof twitterFetcher !== 'undefined' && ($('.twitter-wrap').length > 0)) {

        $('.twitter-wrap').each(function(index) {

          var accountId = $(this).attr('data-account-id'),
              items = $(this).attr('data-count'),
              newID = 'tweets-list-' + index;

          $(this).attr('id', newID);

          var config = {
            "id": accountId,
            "domId": newID,
            "maxTweets": items || 1,
            "showRetweet": false,
            "showTime": true,
            "showUser": false,
            "showInteraction": false,
            "enableLinks": true,
            "showPermalinks": false
          };

          twitterFetcher.fetch(config);
        });

        var interval = setInterval(function() {
          if ($('.twitter-wrap.tweet-slider ul').length > 0) {
            clearInterval(interval);
            $('.twitter-wrap.tweet-slider ul').each(function() {
              var $this = $(this),
                  autoplay = $this.parents('.twitter-wrap').data('autoplay'),
                  autoheight = $this.parents('.twitter-wrap').data('autoheight'),
                  navigation = $this.parents('.twitter-wrap').data('navigation'),
                  pagination = $this.parents('.twitter-wrap').data('pagination');

              $this.slick({
                dots: pagination || false,
                arrows: false,
                autoplay: autoplay || false,
                infinite: true,
                fade: true,
                cssEase: 'linear',
                adaptiveHeight: autoheight || false,
                speed: 300,
                slidesToShow: 1,
                respondTo: 'slider'
              });
            });
          }
        }, 100);

      }

    },

    photoSwipeLightbox: function() {

      initPhotoSwipe('.pswp-figure', 'img');

    },

    googleMap: function() {
      if ($('.map').length > 0) {
        $('.map').each(function(index) {
            var $this = $(this),
                mapid = $this.attr('id'),
                elHeight = $this.attr('data-height'),
                latitude = parseFloat($this.attr('data-lat')),
                longitude = parseFloat($this.attr('data-lng')),
                zoomLevel = parseFloat($this.attr('data-zoomLevel')),
                markerIcon = $this.attr('data-markerIcon'),
                mapData = $this.attr('data-map-info'),
                enableZoom = $this.attr('data-enableZoom'),
                mapStyle = jQuery(this).attr('data-style'),
                mapApiKey = $this.attr('data-api');

            if (elHeight) {
                $this.css({
                  "height": elHeight + 'px'
                });
            }

            if (isNaN(zoomLevel)) {
              zoomLevel = 12;
            }
            if (isNaN(latitude)) {
              latitude = -37.81779;
            }
            if (isNaN(longitude)) {
              longitude = 144.96466;
            }

            //define the basic color of your map, plus a value for saturation and brightness
            var main_color = '',
                saturation_value = 7,
                brightness_value = 1;

            //we define here the style of the map
            var style = [{
              //set saturation for the labels on the map
              elementType: "labels",
              stylers: [{
                  saturation: -100
              }]
              }, { //poi stands for point of interest - don't show these lables on the map
                featureType: "poi",
                elementType: "labels",
                stylers: [{
                  visibility: "off"
                }]
              }, {
                //don't show highways lables on the map
                featureType: 'road.highway',
                elementType: 'labels',
                stylers: [{
                  visibility: "off"
                }]
              }, {
                //don't show local road lables on the map
                featureType: "road.local",
                elementType: "labels.icon",
                stylers: [{
                  visibility: "off"
                }]
              }, {
                //don't show arterial road lables on the map
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{
                  visibility: "off"
                }]
              }, {
                //don't show road lables on the map
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{
                  visibility: "off"
                }]
              },
              //style different elements on the map
              {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }, {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: 20
                }, {
                  saturation: 7
                }]
              }, {
                featureType: "poi.government",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }, {
                featureType: "poi.sport_complex",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }, {
                featureType: "poi.attraction",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }, {
                featureType: "poi.business",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }, {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }, {
                featureType: "transit.station",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }, {
                featureType: "landscape",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: 20
                }, {
                  saturation: 20
                }]
              }, {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                  hue: main_color
                }, {
                  visibility: "on"
                }, {
                  lightness: brightness_value
                }, {
                  saturation: saturation_value
                }]
              }
            ];

            var styles = {
              black: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 17
                }]
              }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 20
                }]
              }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 17
                }]
              }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 29
                }, {
                  "weight": 0.2
                }]
              }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 18
                }]
              }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 16
                }]
              }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 21
                }]
              }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                  "visibility": "on"
                }, {
                  "color": "#000000"
                }, {
                  "lightness": 16
                }]
              }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                  "saturation": 36
                }, {
                  "color": "#000000"
                }, {
                  "lightness": 40
                }]
              }, {
                "elementType": "labels.icon",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 19
                }]
              }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 20
                }]
              }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 17
                }, {
                  "weight": 1.2
                }]
              }],
              greyscale: [{
                "featureType": "landscape",
                "stylers": [{
                  "saturation": -100
                }, {
                  "lightness": 65
                }, {
                  "visibility": "on"
                }]
              }, {
                "featureType": "poi",
                "stylers": [{
                  "saturation": -100
                }, {
                  "lightness": 51
                }, {
                  "visibility": "simplified"
                }]
              }, {
                "featureType": "road.highway",
                "stylers": [{
                  "saturation": -100
                }, {
                  "visibility": "simplified"
                }]
              }, {
                "featureType": "road.arterial",
                "stylers": [{
                  "saturation": -100
                }, {
                  "lightness": 30
                }, {
                  "visibility": "on"
                }]
              }, {
                "featureType": "road.local",
                "stylers": [{
                  "saturation": -100
                }, {
                  "lightness": 40
                }, {
                  "visibility": "on"
                }]
              }, {
                "featureType": "transit",
                "stylers": [{
                  "saturation": -100
                }, {
                  "visibility": "simplified"
                }]
              }, {
                "featureType": "administrative.province",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "on"
                }, {
                  "lightness": -25
                }, {
                  "saturation": -100
                }]
              }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                  "hue": "#ffff00"
                }, {
                  "lightness": -25
                }, {
                  "saturation": -97
                }]
              }],
              midnight: [{
                "featureType": "water",
                "stylers": [{
                  "color": "#021019"
                }]
              }, {
                "featureType": "landscape",
                "stylers": [{
                  "color": "#08304b"
                }]
              }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#0c4152"
                }, {
                  "lightness": 5
                }]
              }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                  "color": "#000000"
                }]
              }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                  "color": "#0b434f"
                }, {
                  "lightness": 25
                }]
              }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                  "color": "#000000"
                }]
              }, {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [{
                  "color": "#0b3d51"
                }, {
                  "lightness": 16
                }]
              }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#000000"
                }]
              }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                  "color": "#ffffff"
                }]
              }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                  "color": "#000000"
                }, {
                  "lightness": 13
                }]
              }, {
                "featureType": "transit",
                "stylers": [{
                  "color": "#146474"
                }]
              }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                  "color": "#000000"
                }]
              }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                  "color": "#144b53"
                }, {
                  "lightness": 14
                }, {
                  "weight": 1.4
                }]
              }],
              standard: [],
              bluewater: [{
                "featureType": "water",
                "stylers": [{
                  "color": "#46bcec"
                }, {
                  "visibility": "on"
                }]
              }, {
                "featureType": "landscape",
                "stylers": [{
                  "color": "#f2f2f2"
                }]
              }, {
                "featureType": "road",
                "stylers": [{
                  "saturation": -100
                }, {
                  "lightness": 45
                }]
              }, {
                "featureType": "road.highway",
                "stylers": [{
                  "visibility": "simplified"
                }]
              }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                  "color": "#444444"
                }]
              }, {
                "featureType": "transit",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "poi",
                "stylers": [{
                  "visibility": "off"
                }]
              }]
            };

            window.initializeMap = function() {
              var latlng = new google.maps.LatLng(latitude, longitude);
              var mapOptions = {
                zoom: zoomLevel,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                draggable: true,
                zoomControl: true,
                zoomControlOptions: {
                  style: google.maps.ZoomControlStyle.SMALL,
                  position: google.maps.ControlPosition.RIGHT_CENTER
                },
                panControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                scrollwheel: false,
                disableDoubleClickZoom: false,
                styles: styles[mapStyle]
              };

              var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
              setMarkers(map);
            }

            function setMarkers(map) {
              if ($this.data('markerIcon') !== '') {
                var markerLatLng = new google.maps.LatLng(latitude, longitude);
                var marker = new google.maps.Marker({
                  position: markerLatLng,
                  map: map,
                  animation: google.maps.Animation.DROP,
                  icon: markerIcon,
                  optimized: false
                });
              }

              var infowindow = new google.maps.InfoWindow({
                content: mapData,
                maxWidth: 300
              });

              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
              });

              function toggleBounce() {
                if (marker.getAnimation() != null) {
                  marker.setAnimation(null);
                } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
                }
              }

              // Add click listener to toggle bounce
              google.maps.event.addListener(marker, 'click', function() {
                toggleBounce();
                infowindow.open(map, marker);
                setTimeout(toggleBounce, 1500);
              });

            }

            function loadScriptMaps() {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.src = "http://maps.google.com/maps/api/js?key=" + mapApiKey + "&callback=initializeMap";
              document.body.appendChild(script);
            }

            function loadScripts() {
              $(".address").find("a.load-map").on('click', function(e) {
                e.preventDefault();
                latitude = $(this).attr("data-lat");
                longitude = $(this).attr("data-lng");
                mapData = $(this).attr("map-info");

                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                  if ($('#header').hasClass('no-sticky') && target.length) {
                    $("html,body").animate({
                      scrollTop: target.offset().top
                    }, 800, "easeInOutExpo", function() {
                      $("#map_canvas").css("z-index", "50").animate({
                        opacity: 1
                      }, 500);
                      initializeMap(latitude, longitude, mapData);
                    });
                  } else if (!$('body').hasClass('mobile') && target.length) {
                    $("html,body").animate({
                        scrollTop: target.offset().top - 55
                    }, 800, "easeInOutExpo", function() {
                      $("#map_canvas").css("z-index", "50").animate({
                        opacity: 1
                      }, 500);
                      initializeMap(latitude, longitude, mapData);
                    });
                  } else if ($('body').hasClass('mobile') && target.length) {
                    $("html,body").animate({
                      scrollTop: target.offset().top - 60
                    }, 800, "easeInOutExpo", function() {
                      $("#map_canvas").css("z-index", "50").animate({
                        opacity: 1
                      }, 500);
                      initializeMap(latitude, longitude, mapData);
                    });
                  }
                  return false;
                }
                $("html,body").animate({
                  scrollTop: 0
                }, 800, "easeInOutExpo", function() {
                  $("#map_canvas").css("z-index", "50").animate({
                    opacity: 1
                  }, 500);
                  initializeMap(latitude, longitude, mapData);
                });
              });
            }
            $(window).on('load', function() {
              loadScriptMaps();
              loadScripts();
            });
        });
      }

    },

  };

  $(document).ready(function($) {
    pt_update.init();
  });

  $(window).smartresize(function() {
    pt_update.contentWrap();
  }); // END WINDOW RESIZE EVENT

})(jQuery);
