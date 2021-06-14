const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
});





$(function () {
    var headerHeight, videoHeight, calc;

    function headerVideoHeight() {
        headerHeight = $('section').outerHeight();
        videoHeight = $('section .header-video iframe').height();
        calc = headerHeight / videoHeight;
        if (window.innerWidth < ($('section').outerHeight() * 1.78)) {
            // 1.78 == 1920 / 1080
            $('section .header-video iframe').css('transform', 'translateY(-50%) scale(' + calc + ')');
        } else {
            $('section .header-video iframe').css('transform', 'translateY(-50%)', );
        }
    }

    headerVideoHeight();

    var resizeTimer;
    $(window).on('resize', function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            headerVideoHeight();
        }, 150);
    });

    $('.pause').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('stopped')) {
            $('iframe').vimeo('play');
            $(this).removeClass('stopped');
        } else {
            $('iframe').vimeo('pause');
            $(this).addClass('stopped');
        }
    });

    $('.volume').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('muted')) {
            $('iframe').vimeo('setVolume', 1);
            $(this).removeClass('muted');
        } else {
            $('iframe').vimeo('setVolume', 0);
            $(this).addClass('muted');
        }
    });
});



// Fade In

$(window).load(function () {
    $("body").removeClass("preload");
});