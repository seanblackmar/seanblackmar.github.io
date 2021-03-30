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



// Filter JS

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.projects [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show'); 
    });

  });
});

var header = document.getElementById("filters");
var btns = header.getElementsByClassName("filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}