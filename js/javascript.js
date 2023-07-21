
const checkVisible = (elm) => {

    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);

}

const numbersAnimation = () => {
    
    const counters = document.querySelectorAll('.numbers-number span');
    let speed = 500;

    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-value');
        if (value < 50) {
            speed = 1000;
        } else if (value < 100) {
            speed = 95;
        } else if (value < 200) {
            speed = 75;
        } else {
            speed = 50;
        }
        const data = +counter.innerText;
        
        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 20);
            }
            else{
            counter.innerText = value;
            }
        }
        
        animate();

    });
}

const faqSection = () => {
    
    $(".form-default-dropdown-body").each(function (index, element) {
        $(element).css("max-height", $(element).height());
        $(element).closest(".form-default-dropdown").addClass("non-active");
    });

}

$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $(".form-default-checkboxDropdowns-item-click").click(function (e) { 
        e.preventDefault();
        let content = $(this).parent().children(".form-default-checkboxDropdowns-item-content");
        let input = $(this).children("input");
        if (input.prop("checked")) {
            content.removeClass("d-block");
            input.prop("checked", false);
        }
        else {
            content.addClass("d-block");
            input.prop("checked", true);
        }
    });

    $(".form-default-dropdown-header").click(function (e) { 
        if ($(this).parent().hasClass("non-active")) {
            $(this).parent().removeClass("non-active");
        }else {
            $(this).parent().addClass("non-active");
        }
    });

    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

    let owlreviews = $('.owl-reviews').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        nav:false,
        dots:false,
        responsive: {
            0: {
                items:1
            },
            993: {
                items:2
            }
        }
    });
    $('.reviews-nav-prev').click(function() {
        owlreviews.trigger('prev.owl.carousel');
    })
    $('.reviews-nav-next').click(function() {
        owlreviews.trigger('next.owl.carousel');
    })

    document.querySelector('.navbar-toggler').addEventListener('click', function () {

        document.querySelector('.animated-icon').classList.toggle('open');

    });

    $(".section-block-dropdowns-header").click(function (e) { 
        e.preventDefault();
        let body = $(this).parent();
        if (body.hasClass("active")) {
            body.removeClass("active");
        }else {
            body.addClass("active");
        }
    });
    
    $(".header-message-close").click(function (e) { 
        e.preventDefault();
        $(".header-message").addClass("d-none");
    });

    
});
var run = false;
$(document).ready(function () {
    if ($('.numbers-box').length) {
        if (checkVisible(document.querySelector('.numbers-box')) && !run) {
            run = true;
            setTimeout(function(){
            numbersAnimation();
            }, );
        }
    }
});
$(window).scroll(function () { 
    if ($('.numbers-box').length) {
        if (checkVisible(document.querySelector('.numbers-box')) && !run) {
            run = true;
            setTimeout(function(){
            numbersAnimation();
            }, );
        }
    }
});

