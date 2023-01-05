
const checkVisible = (elm) => {

    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);

}

const numbersAnimation = () => {
    
    const counters = document.querySelectorAll('.numbers-col-number');
    let speed = 500;

    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-value');
        if (value < 100) {
            speed = 500;
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

$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

    $('.banner-homepage').owlCarousel({
        items:1,
        loop:true,
        rewind:true,
        navText:["<img src='img/arrow-banner.png' alt='slider arrow' class='banner-prev'>","<img src='img/arrow-banner.png' alt='slider arrow' class='banner-next'>"],
        margin:1,
        nav:true,
        dots:true
    });

    $('.section-block-textimage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:["<img src='img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-prev'>","<img src='img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-next'>"],
        margin:1,
        nav:true,
        dots:true
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
            576: {
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
$(window).scroll(function () { 
    if ($('.numbers-col-text').length) {
        if (checkVisible(document.querySelector('.numbers-col-text')) && !run) {
            run = true;
            setTimeout(function(){
            numbersAnimation();
            }, );
        }
    }
});

