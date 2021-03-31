$(() => {
	let stickyTop = 0,
	scrollTarget = false;
	
	let timeline = $('.timeline__nav'),
	items = $('li', timeline),
	milestones = $('.timeline__section .milestone'),
	offsetTop = parseInt(timeline.css('top'));
	
	const TIMELINE_VALUES = {
		start: 150,
	step: 30 };
	
	
	$(window).resize(function () {
		timeline.removeClass('fixed');
		
		stickyTop = timeline.offset().top - offsetTop;
		
		$(window).trigger('scroll');
	}).trigger('resize');
	
	$(window).scroll(function () {
		if ($(window).scrollTop() > stickyTop) {
			timeline.addClass('fixed');
			} else {
			timeline.removeClass('fixed');
		}
	}).trigger('scroll');
	
	items.find('span').click(function () {
		let li = $(this).parent(),
		index = li.index(),
		milestone = milestones.eq(index);
		
		if (!li.hasClass('active') && milestone.length) {
			scrollTarget = index;
			
			let scrollTargetTop = milestone.offset().top - 50;
			
			$('html, body').animate({ scrollTop: scrollTargetTop }, {
				duration: 400,
				complete: function complete() {
					scrollTarget = false;
				} });
				
		}
	});
	
	$(window).scroll(function () {
		let viewLine = $(window).scrollTop() + $(window).height() / 5,
		active = -1;
		
		if (scrollTarget === false) {
			milestones.each(function () {
				if ($(this).offset().top - viewLine > 0) {
					return false;
				}
				
				active++;
			});
			} else {
			active = scrollTarget;
		}
		
		timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
		
		items.filter('.active').removeClass('active');
		
		items.eq(active != -1 ? active : 0).addClass('active');
	}).trigger('scroll');
});

filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
}

function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);     
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
