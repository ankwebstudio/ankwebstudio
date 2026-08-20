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

/* =========================================================
   ANK WEBSTUDIO SEARCH MODAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const searchModalElement = document.getElementById("searchModal");

    // Stop if search elements don't exist on this page
    if (!searchInput || !searchBtn || !searchModalElement) {
        return;
    }


    /* =========================================
       SEARCH DATA
    ========================================= */

    const searchItems = [

        {
            keywords: [
                "home",
                "homepage",
                "main",
                "ank webstudio"
            ],
            target: "#header-carousel"
        },


        {
            keywords: [
                "about",
                "about us",
                "company",
                "founder"
            ],
            target: "#about"
        },


        {
            keywords: [
                "service",
                "services",
                "web design",
                "website",
                "website development",
                "development",
                "responsive",
                "redesign",
                "seo",
                "geo",
                "aeo",
                "performance"
            ],
            target: "#services"
        },


        {
            keywords: [
                "portfolio",
                "projects",
                "case study",
                "case studies",
                "fitness",
                "gym",
                "coconut",
                "resort",
                "aamiz",
                "clothz",
                "techmaster",
                "education",
                "learning"
            ],
            target: "#case-studies"
        },


        {
            keywords: [
                "technology",
                "technologies",
                "html",
                "css",
                "javascript",
                "bootstrap",
                "react",
                "wordpress",
                "shopify"
            ],
            target: "#technologies"
        },


        {
            keywords: [
                "contact",
                "phone",
                "email",
                "quote",
                "enquiry",
                "enquiry"
            ],
            target: "#contact"
        },


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
                "domain",
                "hosting",
                "ssl",
                "maintenance",
                "update",
                "mobile",
                "ecommerce",
                "delivery",
                "time",
                "how long"
            ],
            target: "#faq"
        }

    ];


    /* =========================================
       SEARCH FUNCTION
    ========================================= */

    function performSearch() {

        const value = searchInput.value
            .trim()
            .toLowerCase();


        // Don't search empty input
        if (!value) {

            searchInput.focus();

            return;

        }


        /* Find matching section */

        const result = searchItems.find(function (item) {

            return item.keywords.some(function (keyword) {

                return (
                    keyword.toLowerCase().includes(value) ||
                    value.includes(keyword.toLowerCase())
                );

            });

        });


        /*
         * If nothing matches,
         * show FAQ instead of doing nothing.
         */

        const targetSelector = result
            ? result.target
            : "#faq";


        const targetElement =
            document.querySelector(targetSelector);


        /* =========================================
           CLOSE MODAL
        ========================================= */

        const modalInstance =
            bootstrap.Modal.getInstance(searchModalElement);


        if (modalInstance) {

            modalInstance.hide();

        }


        /* =========================================
           SCROLL TO RESULT
        ========================================= */

        if (targetElement) {

            setTimeout(function () {

                targetElement.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }, 400);

        }

    }


    /* =========================================
       SEARCH BUTTON
    ========================================= */

    searchBtn.addEventListener("click", function (event) {

        event.preventDefault();

        performSearch();

    });


    /* =========================================
       ENTER KEY
    ========================================= */

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            performSearch();

        }

    });


    /* =========================================
       FOCUS INPUT WHEN MODAL OPENS
    ========================================= */

    searchModalElement.addEventListener(
        "shown.bs.modal",
        function () {

            setTimeout(function () {

                searchInput.focus();

            }, 150);

        }
    );


    /* =========================================
       CLEAR SEARCH WHEN MODAL CLOSES
    ========================================= */

    searchModalElement.addEventListener(
        "hidden.bs.modal",
        function () {

            searchInput.value = "";

        }
    );

});

/* =========================================================
   CASE STUDIES INTERACTION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const caseItems = document.querySelectorAll(".case-study-item");
    const caseDetails = document.querySelectorAll(".case-study-detail");
    const closeButtons = document.querySelectorAll(".case-study-close");


    /* Open Case Study */

    caseItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const targetId = item.getAttribute("data-target");
            const target = document.getElementById(targetId);

            if (!target) return;


            /* Close all other case studies */

            caseDetails.forEach(function (detail) {
                detail.classList.remove("active");
            });


            /* Remove active state from cards */

            caseItems.forEach(function (card) {
                card.classList.remove("active");
            });


            /* Open selected */

            target.classList.add("active");
            item.classList.add("active");


            /* Scroll to detail */

            setTimeout(function () {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);

        });

    });


    /* Close Case Study */

    closeButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const detail = button.closest(".case-study-detail");

            detail.classList.remove("active");


            /* Remove active card */

            const targetId = detail.id;

            const activeCard = document.querySelector(
                '.case-study-item[data-target="' + targetId + '"]'
            );

            if (activeCard) {
                activeCard.classList.remove("active");
            }

        });

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const filters = document.querySelectorAll(".service-filter");
    const cards = document.querySelectorAll(".service-card");

    filters.forEach(function (filter) {

        filter.addEventListener("click", function () {

            const selectedFilter = this.getAttribute("data-filter");

            /* Remove active class */
            filters.forEach(function (button) {
                button.classList.remove("active");
            });

            /* Add active class */
            this.classList.add("active");


            /* Filter cards */
            cards.forEach(function (card) {

                const category = card.getAttribute("data-category");

                if (
                    selectedFilter === "all" ||
                    category === selectedFilter
                ) {

                    card.classList.remove("service-hidden");

                } else {

                    card.classList.add("service-hidden");

                }

            });

        });

    });

});

