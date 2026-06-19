(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

const searchItems = [
    { keywords: ["home"], target: "#header-carousel" },

    { keywords: ["about", "about us"], target: "#about" },

    { keywords: ["service", "services", "website", "web design",
                 "development", "seo", "responsive"],
      target: "#services" },

    { keywords: ["portfolio", "projects", "fitness",
                 "gym", "coconut", "resort",
                 "aamiz", "clothz", "techmaster",
                 "education", "learning"],
      target: "#projects" },

    { keywords: ["technology", "technologies", "html",
                 "css", "javascript", "bootstrap",
                 "react", "wordpress", "shopify"],
      target: "#technologies" },

    { keywords: ["contact", "phone", "email", "quote"],
      target: "#contact" },
    
    {
    keywords: [
        "faq",
        "question",
        "questions",
        "help",
        "support",
        "price",
        "pricing",
        "cost",
        "website cost",
        "business website cost",
        "redesign",
        "website redesign",
        "domain",
        "hosting",
        "ssl",
        "maintenance",
        "update",
        "seo",
        "mobile",
        "responsive",
        "ecommerce",
        "delivery",
        "time",
        "how long",
        "support after launch"
    ],
    target: "#faq"
}
];

function performSearch() {

    const value = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    if (!value) return;

    const result = searchItems.find(item =>
        item.keywords.some(keyword =>
            keyword.includes(value) || value.includes(keyword)
        )
    );

    // Close search modal
    const modal = bootstrap.Modal.getInstance(
        document.getElementById("searchModal")
    );

    if (modal) modal.hide();

    // If a match is found, go to that section.
    // Otherwise, go to FAQ.
    const target = result ? result.target : "#faq";

    setTimeout(() => {

        document.querySelector(target).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 300);
}

document.getElementById("searchBtn")
.addEventListener("click", performSearch);

document.getElementById("searchInput")
.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        e.preventDefault();
        performSearch();
    }

});

