$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });


    var header = $("#header"),
        introH = $("#hero").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
    }

    
    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Modal */ 
    
    const modalCall =  $("[data-modal]");
    const modalClose =  $("[data-close]");
    

    modalCall.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $(this).data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(() => {
            $(modalId).find(".modal__dialog").css({
            transform: "rotateX(0)"
            });
        }, 200);

    });


    modalClose.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $(this).parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(() => {
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
        }, 200);

    });


    $(".modal").on("click", function(event) {
        let $this =  $(this);
        $(this).find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(() => {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

});

