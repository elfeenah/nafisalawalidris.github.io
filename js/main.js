(function ($) {
    "use strict";
    
    // Loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Initiate WOW.js
    new WOW().init();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


// Skills
$('.skills').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});

document.addEventListener('DOMContentLoaded', function () {
    const skillPercentages = document.querySelectorAll('.skill-percentage');
    skillPercentages.forEach(function (element) {
        const value = parseInt(element.getAttribute('data-value'), 10);
        if (value > 100) {
            element.style.color = 'red';
        }
    });
});


    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

})(jQuery);



// Media filter
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('#media .gallery .image');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.querySelector('img').src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
            const closeButton = document.createElement('a');
            closeButton.href = '#';
            closeButton.classList.add('lightbox-close');
            closeButton.innerHTML = '&times;';
            lightbox.appendChild(closeButton);
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
});

// Features filter
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('active');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('active');
        });
    });
});

// Contact form
$(function() {
    $("#contactForm").submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "sendEmail.php",
            data: formData,
            success: function(response) {
                $("#success").html(response);
                $("#name").val("");
                $("#email").val("");
                $("#subject").val("");
                $("#message").val("");
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});

// Blog filters
$(function() {
    $('a.smooth-scroll').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var texts = document.querySelectorAll('#slideshow-text span');
    var index = 0;

    function showNextText() {
        texts[index].style.display = 'none';
        index = (index + 1) % texts.length;
        texts[index].style.display = 'inline';
    }

    texts[index].style.display = 'inline';
    setInterval(showNextText, 3000); // Change text every 3 seconds
});

