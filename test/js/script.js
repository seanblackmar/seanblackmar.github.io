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


function randomImg() {
	var quotes = [
        {
			album: "....Lifun	-	Trubrot	-	1971",
			img:  "images/500x500/1.jpg",
		},
        {
			album: "...Sounds Like This	-	Nektar	-	1973",
			img:  "images/500x500/2.jpg",
		},
		{
			album: "1000 Autunni	-	Ske	-	2011",
			img:  "images/500x500/3.jpg",
		},
		{
			album: "1001° Centigrades	-	Magma	-	1971",
			img:  "images/500x500/4.jpg",
		},
		{
			album: "10cc	-	10cc	-	1973",
			img:  "images/500x500/5.jpg",
		},
		{
			album: "1973	-	Placebo	-	1973",
			img:  "images/500x500/6.jpg",
		},
		{
			album: "1990	-	Solaris	-	1990",
			img:  "images/500x500/7.jpg",
		},
		{
			album: "1998 la storia di sabazio	-	Triade	-	1973",
			img:  "images/500x500/8.jpg",
		},
		{
			album: "200 years after the last war	-	Omega	-	1973",
			img:  "images/500x500/9.jpg",
		},
		{
			album: "20000 Miles under the sea	-	Nautilus	-	1978",
			img:  "images/500x500/10.jpg",
		},
		
	];
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById("quote").innerHTML =
	'<img src="' + quote.img + '">' +
	'<h3>' + quote.album + '</h3>';
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}












