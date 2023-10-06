// JavaScript code for animations and interactive elements
(function ($) {
    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('#nav a, .scrolly').scrolly({
        speed: 1000,
        offset: function () { return $nav.height(); }
    });

    // Function to handle animations on scroll
    function handleAnimations() {
        $('.animated').each(function () {
            var $this = $(this);
            if ($this.visible(true)) {
                $this.addClass('appear');
            }
        });
    }

    // Initialize animations on page load
    handleAnimations();

    // Reveal animations when scrolling
    $window.scroll(function () {
        handleAnimations();
    });

    // JavaScript for mobile menu toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav");

    mobileMenu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // JavaScript code for form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        document.querySelector('#contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            e.target.elements.name.value = '';
            e.target.elements.email.value = '';
            e.target.elements.message.value = '';
          });

        // Get form data
        const formData = new FormData(this);

        // You can handle form submission here, for example, send the form data to a server using AJAX

        // Reset the form after submission
        this.reset();
    });

    // JavaScript for mobile navigation toggle
    document.getElementById("menu-icon").addEventListener("click", function () {
        var navContainer = document.querySelector(".nav .container");
        navContainer.classList.toggle("active");
    });
})(jQuery);
