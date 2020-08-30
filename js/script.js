function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

$(document).ready(function () {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == "ru") {
        $('.language__ru, .ru').addClass('active');
    } else {
        $('.language__eng, .eng').addClass('active');
    }
});

// burger buttons 

$(document).ready(function () {
    $('.burger, .menu__btn').click(function (event) {
        $('.burger, .menu').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.language__ru').click(function (event) {
        $('.language__ru, .ru').addClass('active');
        $('.language__eng, .eng').removeClass('active');
    });
    $('.language__eng').click(function (event) {
        $('.language__ru, .ru').removeClass('active');
        $('.language__eng, .eng').addClass('active');
    });
});

$(document).ready(function () {
    if (window.innerWidth < 767) {
        $('header').addClass('mobile');
    }
});

$(document).ready(function () {
    window.addEventListener('resize', function () {
        if (window.innerWidth < 767) {
            $('header').addClass('mobile');
        }
        else {
            $('header').removeClass('mobile');
        }
    })
});

function age(){
    var diff_ms = Date.now() - (new Date(1991, 5, 28)).getTime();
    var age_dt = new Date(diff_ms); 
    var my_age = Math.abs(age_dt.getUTCFullYear() - 1970).toString();
    document.write (my_age);
}
;
function scrTo(Elem, mode) {
    var element = document.getElementById(Elem);
    element.scrollIntoView(mode);
};
// Hide Header on on scroll down
$(document).ready(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
});;
